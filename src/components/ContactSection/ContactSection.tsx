
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Check, Copy, AlertCircle, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Tooltip } from '../Common/UI';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Payload identity required';
      else if (value.trim().length < 2) error = 'Identify with at least 2 characters';
    }
    if (name === 'email') {
      if (!value.trim()) error = 'Dispatch protocol required';
      else if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid communication protocol (Email)';
    }
    if (name === 'message') {
      if (!value.trim()) error = 'Payload data required';
      else if (value.trim().length < 10) error = 'Minimum 10 characters for transmission';
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name as keyof typeof formData]) }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('sabirsheik12787@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsSubmitting(true);
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        message: formData.message,
      };

      const SERVICE_ID = 'service_j0j25eq';
      const PUBLIC_KEY = 'G3O5uK74c4TDZEODQ';
      const NOTIFICATION_TEMPLATE = 'template_sz8p0tl';

      emailjs.send(SERVICE_ID, NOTIFICATION_TEMPLATE, templateParams, PUBLIC_KEY)
        .then(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTouched({ name: false, email: false, message: false });
          setTimeout(() => setIsSuccess(false), 5000);
        })
        .catch((err) => {
          const logMsg = err?.text || err?.message || (typeof err === 'string' ? err : JSON.stringify(err));
          console.error('TRANSMISSION FAILED:', logMsg);
          setIsSubmitting(false);
          alert(`Transmission failed: ${logMsg}.`);
        });
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-80 px-6 md:px-12 lg:px-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45rem] font-black text-white/5 tracking-tighter pointer-events-none select-none italic -z-0">
        HIRE
      </div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-[0.7] mb-16"
          >
            LET'S <br /> <span className="text-zinc-800 italic">BUILD.</span>
          </motion.h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-500 mb-20 max-w-xl font-light leading-snug">
            Accepting inquiries for full-stack web development roles and modern software <span className="text-white font-bold italic underline decoration-zinc-800">solutions</span>.
          </p>
          <div className="space-y-16">
            <div className="group flex flex-col md:flex-row md:items-center w-full md:w-fit transition-all hover:translate-x-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-800 flex items-center justify-center md:mr-10 mb-6 md:mb-0 group-hover:bg-white group-hover:text-zinc-950 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-2xl">
                <Mail size={32} />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700 mb-3">Direct Dispatch</p>
                <div className="flex items-center gap-4">
                  <p className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tighter break-all lg:break-normal overflow-hidden text-ellipsis">sabirsheik12787@gmail.com</p>
                  <button 
                    onClick={copyToClipboard}
                    className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors relative"
                  >
                    {isCopied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} className="text-zinc-500" />}
                    <AnimatePresence>
                      {isCopied && (
                        <motion.span 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-black tracking-widest uppercase px-3 py-1 rounded-lg"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 lg:gap-20 pt-16 border-t border-zinc-900 justify-center md:justify-start">
              <Tooltip text="Connect on LinkedIn">
                <a href="https://www.linkedin.com/in/sabir-ali-837501340" className="group flex flex-col space-y-4" target='_blank'>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-800">LinkedIn_Node</span>
                  <span className="text-xl lg:text-2xl font-medium group-hover:text-zinc-500 transition-colors flex items-center gap-2">/sabir-ali-mern <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" /></span>
                </a>
              </Tooltip>
              <Tooltip text="View GitHub Repos">
                <a href="https://github.com/sabirsheik" className="group flex flex-col space-y-4" target='_blank'>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-800">GitHub_Protocol</span>
                  <span className="text-xl lg:text-2xl font-medium group-hover:text-zinc-500 transition-colors flex items-center gap-2">/dev-sabir <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" /></span>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 backdrop-blur-3xl border border-zinc-800/50 p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] shadow-5xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 rounded-full bg-white text-zinc-950 flex items-center justify-center mb-10 shadow-4xl">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-black tracking-tighter mb-4">Transmission Successful</h3>
                <p className="text-zinc-500 text-lg font-light max-w-xs">Payload received. I will initiate contact shortly.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12 md:space-y-16" 
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-4 relative group">
                    <div className="flex justify-between items-center">
                      <label className={`text-[10px] font-black uppercase tracking-[0.5em] transition-colors ${errors.name && touched.name ? 'text-red-500' : 'text-zinc-600'}`}>Identity</label>
                      {touched.name && !errors.name && formData.name && <Check size={14} className="text-emerald-500" />}
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('name')}
                      className={`w-full bg-transparent border-b ${touched.name && errors.name ? 'border-red-500/50' : touched.name && !errors.name ? 'border-emerald-500/30' : 'border-zinc-800'} py-6 outline-none focus:border-white transition-all text-2xl font-light placeholder:text-zinc-800`} 
                      placeholder="Full Name" 
                    />
                    <AnimatePresence>
                      {touched.name && errors.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex items-center gap-2 text-red-500 text-[10px] font-black tracking-widest uppercase mt-2"
                        >
                          <AlertCircle size={12} />
                          <span>{errors.name}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-4 relative group">
                    <div className="flex justify-between items-center">
                      <label className={`text-[10px] font-black uppercase tracking-[0.5em] transition-colors ${errors.email && touched.email ? 'text-red-500' : 'text-zinc-600'}`}>Protocol</label>
                      {touched.email && !errors.email && formData.email && <Check size={14} className="text-emerald-500" />}
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full bg-transparent border-b ${touched.email && errors.email ? 'border-red-500/50' : touched.email && !errors.email ? 'border-emerald-500/30' : 'border-zinc-800'} py-6 outline-none focus:border-white transition-all text-2xl font-light placeholder:text-zinc-800`} 
                      placeholder="Email Address" 
                    />
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex items-center gap-2 text-red-500 text-[10px] font-black tracking-widest uppercase mt-2"
                        >
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-4 relative group">
                  <div className="flex justify-between items-center">
                    <label className={`text-[10px] font-black uppercase tracking-[0.5em] transition-colors ${errors.message && touched.message ? 'text-red-500' : 'text-zinc-600'}`}>Payload</label>
                    {touched.message && !errors.message && formData.message && <Check size={14} className="text-emerald-500" />}
                  </div>
                  <textarea 
                    rows={3} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                    className={`w-full bg-transparent border-b ${touched.message && errors.message ? 'border-red-500/50' : touched.message && !errors.message ? 'border-emerald-500/30' : 'border-zinc-800'} py-6 outline-none focus:border-white transition-all text-2xl font-light resize-none placeholder:text-zinc-800`} 
                    placeholder="Your requirements..." 
                  />
                  <AnimatePresence>
                    {touched.message && errors.message && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 text-red-500 text-[10px] font-black tracking-widest uppercase mt-2"
                      >
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="group w-full py-10 md:py-12 bg-white text-zinc-950 font-black rounded-[2rem] md:rounded-[2.5rem] transition-all duration-1000 hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-8 shadow-4xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="tracking-[0.4em] text-[10px] md:text-xs uppercase">{isSubmitting ? 'Transmitting...' : 'Initiate Transmission'}</span>
                  {!isSubmitting && <ArrowRight size={26} className="transition-transform group-hover:translate-x-6" />}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
