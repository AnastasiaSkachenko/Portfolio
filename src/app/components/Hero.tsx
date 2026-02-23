import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import BoxHover from './BoxHover';

interface SocialLink {
  href: string;
  icon: typeof Github;
  label: string;
}

export const Hero = () => {
  const socialLinks: SocialLink[] = [
    { href: 'https://github.com/AnastasiaSkachenko/', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/anastasiia-skachenko/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:skachenkoa@gmail.com', icon: Mail, label: 'Email' }
  ];

  const scrollToContact = (): void => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = (): void => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <BoxHover/>
    </section>
  );
}