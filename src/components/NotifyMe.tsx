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
    <section className="mb-16 sm:mb-24 animate-fade-in-delay-3 bg-gradient-to-b from-cream-50 via-emerald-50 to-lime-50 min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto text-center pt-10 sm:pt-20 pb-10 sm:pb-20 px-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-green-800 mb-2 sm:mb-4 leading-tight font-serif tracking-tight">
          MyAgricult
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-green-900 mb-2 sm:mb-3 tracking-tight">
          "The Green Cult of the Future"
        </h2>
  <div className="text-lg sm:text-xl text-green-700 font-semibold mb-4">Coming Soon</div>
        <p className="text-base sm:text-lg text-center text-green-700 mb-8 font-normal max-w-full mx-auto">
          Bridging Gardens to Farms with Digital Guidance, Smart Insights, and a Connected Ecosystem.
        </p>
        <div className="bg-white rounded-2xl shadow-xl px-4 sm:px-8 py-6 flex flex-col items-center gap-4 max-w-full mx-auto border border-emerald-100">
          <div className="w-full">
            <div className="text-base font-semibold text-green-800 mb-2">Stay Updated</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
              <label htmlFor="notify-email" className="sr-only">Email address</label>
              <input
                id="notify-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full border border-emerald-200 rounded-lg px-4 py-3 text-base bg-emerald-50 focus:border-green-700 focus:outline-none transition"
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all duration-200 text-base shadow"
              >
                Get Notified
              </button>
            </form>
          </div>
        </div>
        <div className="text-green-700 text-sm mt-4 text-center font-light">Be the first to know when we launch</div>
        {/* Status Message */}
        {message && (
          <div className={`mt-4 p-3 rounded-lg flex items-center justify-center space-x-2 ${
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
