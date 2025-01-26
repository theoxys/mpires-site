import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroProps {
  block: {
    title: string;
    subtitle?: string;
    backgroundImage: {
      url: string;
    };
    ctaText?: string;
    ctaLink?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ block }) => {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = block;

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage?.url}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-50"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;