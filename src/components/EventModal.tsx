import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { MdCalendarToday } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  image: string;
}

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card rounded-lg overflow-hidden w-full max-w-2xl relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <AiOutlineClose size={20} />
          </button>

          <div className="relative h-64">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
              {event.title}
            </h2>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-text/70">
                <MdCalendarToday size={20} />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-text/70">
                <FiMapPin size={20} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-text/70">
                <FaUsers size={20} />
                <span>{event.participants} Participants</span>
              </div>
            </div>

            <p className="text-text/80 leading-relaxed">
              {event.description}
            </p>

            <motion.button
              className="btn btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventModal;