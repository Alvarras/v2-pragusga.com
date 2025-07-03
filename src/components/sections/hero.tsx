'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import Particles from '@/components/particles';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/pragusga25' },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    href: 'https://twitter.com/pragusga',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/pragusga',
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <Particles className="absolute inset-0" />
      <div className="container px-4 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-4xl md:text-6xl font-bold">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 leading-tight">
              Transforming Ideas into
              <br />
              Digital Reality
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          >
            Full-stack developer crafting elegant solutions to complex problems.
            Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 resume-btn shadow-lg shadow-blue-500/25"
              onClick={() =>
                window.open('/Taufik_Pragusga_Resume.pdf', '_blank')
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-beam group hover:text-blue-400 transition-colors border-blue-500/50 text-blue-400"
            >
              <a href="#contact">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mt-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}