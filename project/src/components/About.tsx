import React from 'react';

const About: React.FC = () => {
  return (
    <section className="mb-20 animate-fade-in-delay-1">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4 leading-tight text-center">
          Bridging Gardens to Farms
        </h2>
        <p className="text-lg md:text-xl font-semibold text-green-700 mb-2 leading-snug text-center">
          MyAgricult bridges the gap between hobby gardeners and commercial farmers.
        </p>
        <p className="text-base md:text-lg font-medium text-green-700 leading-relaxed max-w-3xl mx-auto text-center">
          Whether you're nurturing a rose at home or managing acres of farmland, we bring digital guidance, smart insights, and a connected ecosystem that makes agriculture easier, transparent, and more rewarding.
        </p>
      </div>
    </section>
  );
};

export default About;