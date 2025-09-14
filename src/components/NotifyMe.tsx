import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';

const NotifyMe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    // Try to insert email into Supabase
    const { error } = await supabase.from('emails').insert([{ email }]);
    if (error) {
      // Check for duplicate key error (unique constraint)
      if (
        error.message?.includes('duplicate key value') ||
        error.message?.includes('unique constraint')
      ) {
        setStatus('error');
        setMessage('This email is already subscribed!');
      } else {
        setStatus('error');
        setMessage('Invalid credentials or error occurred.');
      }
    } else {
      setStatus('success');
      setMessage('Successfully notified!');
      setEmail('');
    }
    // Reset message after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <section className="mb-16 sm:mb-24 animate-fade-in-delay-3">
      <div className="max-w-full sm:max-w-2xl mx-auto text-center pt-10 sm:pt-20 pb-10 sm:pb-20 px-2">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-green-800 mb-1 sm:mb-2 leading-tight font-serif">
          MyAgricult
        </h1>
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-center text-green-900 mb-1 sm:mb-2 tracking-tight">
          "The Green Cult of the Future"
        </h2>
        <div className="text-base sm:text-xl md:text-2xl text-green-800 font-bold mb-2 sm:mb-3">"coming soon"</div>
        <p className="text-sm sm:text-base md:text-lg text-center text-green-700 mb-6 sm:mb-10 font-normal max-w-full sm:max-w-3xl mx-auto">
          Bridging Gardens to Farms with Digital Guidance, Smart Insights, and a Connected Ecosystem.
        </p>
        <div className="bg-white/95 rounded-2xl shadow-xl px-2 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-full sm:max-w-2xl mx-auto border border-emerald-100">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-4">
            <label htmlFor="notify-email" className="sr-only">Email address</label>
            <div className="relative w-full sm:w-auto flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 pointer-events-none" />
              <input
                id="notify-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-2 sm:py-2.5 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none text-sm sm:text-base bg-white font-sans shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base font-sans shadow"
            >
              Get Notified
            </button>
          </form>
        </div>
        <div className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 text-center font-light">Be the first to know when we launch</div>
        {/* Status Message */}
        {message && (
          <div className={`mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg flex items-center justify-center space-x-2 ${
            status === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          } animate-fade-in`}>
            {status === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="text-xs sm:text-sm font-medium">{message}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default NotifyMe;
