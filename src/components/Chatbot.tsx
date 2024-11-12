import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX as X, FiSend as Send } from 'react-icons/fi';
import { FaRobot as Bot } from "react-icons/fa";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botMessageText: string;

      // Determine response based on user input
      if (input.toLowerCase().includes('football')) {
        botMessageText = "Football is a great sport! Do you have a favorite team?";
      } else if (input.toLowerCase().includes('basketball')) {
        botMessageText = "Basketball is exciting! Who's your favorite player?";
      } else if (input.toLowerCase().includes('tennis')) {
        botMessageText = "Tennis is a fantastic sport! Have you played before?";
      } else {
        botMessageText = "Thanks for your message! Our team will get back to you soon.";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botMessageText,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-5 w-80 bg-card rounded-lg shadow-xl overflow-hidden z-40"
        >
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Bot size={24} />
              <span className="font-semibold">Sports Assistant</span>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-background text-text rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 bg-background rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              />
              <motion.button
                type="submit"
                className="p-2 bg-primary text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!input.trim()}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;