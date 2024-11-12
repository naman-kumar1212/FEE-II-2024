import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdCalendarToday } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import EventModal from './EventModal';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "National Kickboxing Championship",
    date: "2024-09-30",
    location: "Main Arena",
    participants: "100+",
    description: "Join us for the exciting National Kickboxing Championship featuring top athletes from across the country. Experience intense matches, incredible techniques, and the spirit of martial arts at its finest.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 2,
    title: "Summer Tennis Tournament",
    date: "2024-10-15",
    location: "Tennis Courts",
    participants: "64",
    description: "Annual summer tennis tournament with singles and doubles categories. Register now to participate! Whether you're a beginner or pro, there's a division for everyone.",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 3,
    title: "Basketball League Finals",
    date: "2024-11-05",
    location: "Indoor Stadium",
    participants: "200+",
    description: "The culmination of our basketball league season. Don't miss the exciting finals! Watch the top teams battle it out for the championship title in this thrilling conclusion to the season.",
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section id="events" className="section bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            Stay updated with our latest sports events and competitions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
              <div className="space-y-2 text-text/70">
                <div className="flex items-center gap-2">
                  <MdCalendarToday size={16} />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdLocationOn size={16} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers size={16} />
                  <span>{event.participants} Participants</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </div>
    </section>
  );
};

export default Events;