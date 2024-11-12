import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaClock, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">We are USports Team</h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            "No more queues for booking your sports here's your hassle-free solution!"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Empowering Your Sports Experience
            </h3>
            <p className="text-text/80 mb-8">
              We aim to empower you to be more efficient and productive by streamlining your sports experience. 
              With easy online booking, you can reserve time slots effortlessly, ensuring you make the most of 
              your time on the field.
            </p>
            <div className="space-y-4">
              <Feature 
                icon={<FaClock className="text-primary" size={24} />}
                title="Easy Booking"
                description="Book your preferred sports facilities in seconds"
              />
              <Feature 
                icon={<FaUsers className="text-primary" size={24} />}
                title="Community"
                description="Join a thriving community of sports enthusiasts"
              />
              <Feature 
                icon={<FaAward className="text-primary" size={24} />}
                title="Quality Assured"
                description="Access to top-notch sports facilities and equipment"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Modern sports facility"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-text/70">{description}</p>
    </div>
  </div>
);

export default About;