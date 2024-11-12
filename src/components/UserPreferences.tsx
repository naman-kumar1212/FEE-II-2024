import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdSettings as Settings, MdSave as Save } from 'react-icons/md';

const sports = [
  "Football",
  "Basketball",
  "Tennis",
  "Table Tennis",
  "Archery",
  "Gym"
];

const UserPreferences = () => {
  const [favoriteSport, setFavoriteSport] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('favoriteSport');
    if (saved) setFavoriteSport(saved);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('favoriteSport', favoriteSport);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="preferences" className="section bg-card">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Settings size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Your Preferences</h2>
          <p className="text-xl text-text/80">
            Customize your sports experience by setting your preferences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="favorite-sport" className="block text-sm font-medium mb-2">
                Favorite Sport
              </label>
              <select
                id="favorite-sport"
                value={favoriteSport}
                onChange={(e) => setFavoriteSport(e.target.value)}
                className="w-full p-3 bg-background rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
              >
                <option value="">Choose your favorite sport</option>
                {sports.map(sport => (
                  <option key={sport} value={sport}>{sport}</option>
                ))}
              </select>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save size={20} />
              Save Preferences
            </motion.button>
          </form>

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 bg-green-500/10 text-green-500 rounded-lg text-center"
            >
              Preferences saved successfully!
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default UserPreferences;