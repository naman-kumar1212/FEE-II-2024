import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick, }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Example usage of onThemeToggle
  // const handleThemeToggle = () => {
  //   onThemeToggle();
  // };

  return (
    <nav className="fixed w-full z-50 bg-card/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            USports
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#main">Home</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#sports">Sports</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLoginClick}
            >
              Log In
            </motion.button>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSignupClick}
            >
              Sign Up
            </motion.button>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-card shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-3">
            <MobileNavLink href="#main" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#events" onClick={() => setIsMenuOpen(false)}>Events</MobileNavLink>
            <MobileNavLink href="#sports" onClick={() => setIsMenuOpen(false)}>Sports</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            <motion.button
              className="w-full btn btn-secondary mt-4"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onLoginClick();
                setIsMenuOpen(false);
              }}
            >
              Log In
            </motion.button>
            <motion.button
              className="w-full btn btn-primary"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSignupClick();
                setIsMenuOpen(false);
              }}
            >
              Sign Up
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-text hover:text-primary transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ 
  href, 
  onClick, 
  children 
}) => (
  <motion.a
    href={href}
    className="block py-2 text-text hover:text-primary transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {children}
  </motion.a>
);

export default Navbar;