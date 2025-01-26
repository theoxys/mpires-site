import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC<any> = ({ block }) => {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = block;

  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage?.url}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <Link 
            href={ctaLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;