import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser as User } from 'react-icons/fa';
import { FaEnvelope as Mail } from 'react-icons/fa';
import { FaLock as Lock } from 'react-icons/fa';
import { FiAlertCircle as AlertCircle } from 'react-icons/fi';

interface SignupFormProps {
  onSubmit: (username: string, email: string, password: string) => void;
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
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
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData.username, formData.email, formData.password);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Username</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary/20`}
              placeholder="Choose a username"
            />
          </div>
          {errors.username && (
            <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.username}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
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
              <AlertCircle size={16} />
              {errors.email}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary/20`}
              placeholder="Create a password"
            />
          </div>
          {errors.password && (
            <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.password}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary/20`}
              placeholder="Confirm your password"
            />
          </div>
          {errors.confirmPassword && (
            <div className="mt-1 text-red-500 text-sm flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.confirmPassword}
            </div>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full btn btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Sign Up
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm">
        Already have an account?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-primary hover:underline font-medium"
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignupForm;