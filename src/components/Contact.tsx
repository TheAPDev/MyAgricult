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
  value: "myagricult@gmail.com",
  href: "mailto:myagricult@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad",
      href: "#"
    }
  ];

  return (
    <footer className="bg-forest-900 text-white py-8 sm:py-12 animate-fade-in-delay-4">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">Get In Touch</h2>
          <p className="text-forest-200 text-sm sm:text-base">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-full sm:max-w-3xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center p-4 sm:p-6 bg-forest-800/50 rounded-lg hover:bg-forest-700/50 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-emerald-300 mb-1 sm:mb-2">
                {item.label}
              </h3>
              <p className="text-forest-100 text-xs sm:text-base text-center">
                {item.value}
              </p>
            </a>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-forest-700">
          <p className="text-forest-300 text-xs sm:text-sm">
            © 2025 MyAgricult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
