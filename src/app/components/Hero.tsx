import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import BoxHover from './BoxHover'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 ">
      <BoxHover/>
      <div className="max-w-4xl mx-auto text-center block pt-25 xl:hidden">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-600">Anastasiia Skachenko</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Fullstack Web Developer
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Crafting seamless digital experiences with modern technologies. 
            Specialized in React, Node.js, and cloud architecture.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg">
            <a className='flex items-center gap-2' href='mailto:skachenkoa@gmail.com'><Mail className="w-4 h-4" />
            Get In Touch</a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <a href='#projects'>View Projects</a>
          </Button>
        </motion.div>

        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a 
            href="https://github.com/AnastasiaSkachenko"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/anastasiia-skachenko/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}