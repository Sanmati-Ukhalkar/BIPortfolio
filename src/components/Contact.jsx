import React, { useState } from 'react';
import { Mail, FileText, Send, CheckCircle } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const socials = [
    {
      name: "Professional Email",
      value: "your.email@gmail.com",
      href: "mailto:your.email@gmail.com",
      icon: Mail,
      color: "hover:border-cyan-500/30 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
    },
    {
      name: "LinkedIn",
      value: "Connect professionally",
      href: "https://linkedin.com",
      icon: Linkedin,
      color: "hover:border-blue-500/30 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
    },
    {
      name: "GitHub",
      value: "View my code repositories",
      href: "https://github.com",
      icon: Github,
      color: "hover:border-white/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    },
    {
      name: "Download Resume",
      value: "Curriculum Vitae (PDF)",
      href: "/resume.pdf",
      icon: FileText,
      color: "hover:border-teal-500/30 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]",
      download: true
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-bg-dark grid-bg">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[110px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent-indigo/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let's work with <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">data together.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
          <p className="text-text-secondary mt-4 text-sm sm:text-base">
            I'm actively looking for a Trainee BI Developer opportunity where I can contribute from day one and keep growing. If you're building a data team or have an interesting problem to solve — I'd love to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Social cards list (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading text-lg font-bold text-white px-2 mb-6">
              Connect Channels
            </h3>
            
            <div className="space-y-4">
              {socials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    download={item.download}
                    target={item.download ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`glass-panel p-5 rounded-2xl border border-white/5 flex items-center gap-4 transition-all duration-300 ${item.color} group`}
                  >
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold truncate max-w-[240px]">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Input Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/5">
            <h3 className="font-heading text-lg font-bold text-white mb-6 text-left">
              Send Direct Message
            </h3>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center animate-scale-up">
                <div className="p-4 rounded-full bg-accent-teal/10 text-accent-teal border border-accent-teal/20 shadow-glow-teal animate-bounce">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">Message Transmitted!</h4>
                <p className="text-text-secondary text-sm max-w-xs">
                  Your message was received successfully. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-blue focus:shadow-glow-blue transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-blue focus:shadow-glow-blue transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    Message Body
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe your data modeling or visualization requirements..."
                    className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-blue focus:shadow-glow-blue transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-indigo text-bg-dark font-bold text-sm tracking-wide shadow-glow-blue transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

        {/* Footer info & Closing Quote */}
        <div className="mt-20 pt-10 border-t border-white/5 text-center flex flex-col items-center">
          <p className="text-lg sm:text-xl font-heading font-bold text-white italic mb-6">
            "Data is just noise until someone builds the right lens to look through it.<br/>
            <span className="text-accent-teal">I build the lens.</span>"
          </p>
          <p className="text-xs text-text-secondary">© {new Date().getFullYear()} BI Portfolio Hub. Crafted with React, Vite, Tailwind v4 and Recharts.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
