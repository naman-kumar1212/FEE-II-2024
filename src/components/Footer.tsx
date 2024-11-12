import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              USports
            </motion.h3>
            <p className="text-text/70">
              Your go-to platform for all sports-related events and bookings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#main">Home</FooterLink>
              <FooterLink href="#events">Events</FooterLink>
              <FooterLink href="#sports">Sports</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sports</h4>
            <ul className="space-y-2">
              <FooterLink href="#sports">Football</FooterLink>
              <FooterLink href="#sports">Basketball</FooterLink>
              <FooterLink href="#sports">Tennis</FooterLink>
              <FooterLink href="#sports">Table Tennis</FooterLink>
              <FooterLink href="#sports">Archery</FooterLink>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<FaFacebookF size={20} />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitter size={20} />} />
              <SocialLink href="https://instagram.com" icon={<FaInstagram size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn size={20} />} />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-text/70">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart size={16} className="text-red-500" /> by USports Team
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} USports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <motion.a
      href={href}
      className="text-text/70 hover:text-primary transition-colors"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.a>
  </li>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Footer;