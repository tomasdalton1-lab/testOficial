'use client';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('heroTitle')}
        </motion.h1>
        <motion.p
          className="text-white text-lg md:text-xl max-w-2xl"
          data-aos="fade-up"
        >
          {t('heroSubtitle')}
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {t('contactButton')}
        </motion.button>
      </div>
    </section>
  );
}