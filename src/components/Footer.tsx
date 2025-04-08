import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/Absara14",
      label: "GitHub",
      color: "hover:text-[#333]"
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/absara-v-2842b2215/",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: <MdEmail size={24} />,
      href: "mailto:absaraviswathan@gmail.com",
      label: "Email",
      color: "hover:text-[#ea4335]"
    }
  ];

  return (
    <footer className="relative mt-8">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links with floating animation */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.color} transition-colors duration-300`}
                aria-label={social.label}
                initial={{ y: 0 }}
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.2
                  }
                }}
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright with gradient text */}
          <div className="relative group cursor-default">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-portfolio-400 to-portfolio-600 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-center text-sm text-muted-foreground px-6 py-2 rounded-lg backdrop-blur-sm">
              © {currentYear} <span className="font-medium bg-gradient-to-r from-portfolio-400 to-portfolio-600 bg-clip-text text-transparent">Absara Viswanathan</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;