import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdMail } from 'react-icons/md';
import { MdError } from 'react-icons/md';
import { MdLock } from 'react-icons/md';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData.email, formData.password);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <MdMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary/20`}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <MdError size={16} />
              {errors.email}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary/20`}
              placeholder="Enter your password"
            />
          </div>
          {errors.password && (
            <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <MdError size={16} />
              {errors.password}
            </div>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full btn btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Log In
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm">
        Don't have an account?{' '}
        <button
          onClick={onSwitchToSignup}
          className="text-primary hover:underline font-medium"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;