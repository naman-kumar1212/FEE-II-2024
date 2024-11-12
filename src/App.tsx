import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdChat as MessageCircle, MdDarkMode as Moon, MdLightMode as Sun } from 'react-icons/md';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sports from './components/Sports';
import Events from './components/Events';
import UserPreferences from './components/UserPreferences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/auth/AuthModal';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const handleAuthClick = (view: 'login' | 'signup') => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar 
        onLoginClick={() => handleAuthClick('login')}
        onSignupClick={() => handleAuthClick('signup')}
        onThemeToggle={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Sports />
        <Events />
        <UserPreferences />
        <Contact />
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView={authView}
      />

      {/* Chatbot Toggle Button */}
      <motion.button
        className="fixed bottom-5 right-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        <MessageCircle size={24} />
      </motion.button>

      <Chatbot 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />

      {/* Theme Toggle */}
      <motion.button
        className="fixed bottom-5 left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
    </div>
  );
}

export default App;