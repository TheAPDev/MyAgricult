import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8106035907",
      href: "tel:+918106035907"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aayushmaanpandab@gmail.com",
      href: "mailto:aayushmaanpandab@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad",
      href: "#"
    }
  ];

  return (
    <footer className="bg-forest-900 text-white py-12 animate-fade-in-delay-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-forest-200">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center p-6 bg-forest-800/50 rounded-lg hover:bg-forest-700/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-emerald-300 mb-2">
                {item.label}
              </h3>
              <p className="text-forest-100 text-center">
                {item.value}
              </p>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-forest-700">
          <p className="text-forest-300 text-sm">
            © 2025 MyAgricult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;