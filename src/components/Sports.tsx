import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaFootballBall, FaBasketballBall, FaTableTennis } from 'react-icons/fa';
import { GiArcheryTarget } from "react-icons/gi";
import { IoMdTennisball } from "react-icons/io";

const sports = [
  {
    name: "Football",
    icon: <FaFootballBall size={32} />,
    description: "Experience the thrill of the beautiful game with our state-of-the-art football facilities.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall size={32} />,
    description: "Hit the court and showcase your skills in our professional basketball arena.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
  },
  {
    name: "Tennis",
    icon: <IoMdTennisball size={32} />,
    description: "Perfect your serve on our well-maintained tennis courts.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    name: "Table Tennis",
    icon: <FaTableTennis size={32} />,
    description: "Challenge your friends to an exciting game of table tennis.",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
  },
  {
    name: "Archery",
    icon: <GiArcheryTarget size={32} />,
    description: "Focus, aim, and hit the bullseye in our archery range.",
    image: "https://plus.unsplash.com/premium_photo-1718315730752-eb55b9b6afa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Gym",
    icon: <FaDumbbell size={32} />,
    description: "Stay fit with our modern gym equipment and expert trainers.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
];

const Sports = () => {
  const [visibleSports, setVisibleSports] = useState(4);

  return (
    <section id="sports" className="section bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Sports</h2>
          <p className="text-xl text-text/80 max-w-2xl mx-auto">
            Choose from our wide range of sports facilities and start your journey today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sports.slice(0, visibleSports).map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {sport.icon}
                </div>
                <h3 className="text-xl font-semibold">{sport.name}</h3>
              </div>
              <p className="text-text/70">{sport.description}</p>
            </motion.div>
          ))}
        </div>

        {visibleSports < sports.length && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
              onClick={() => setVisibleSports(prev => prev + 2)}
            >
              Load More Sports
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sports;