import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-6">
      {showConfetti && <Confetti />}
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl sm:text-5xl font-bold mb-4"
      >
        🎉 Thank You! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg sm:text-xl max-w-lg"
      >
        We appreciate your trust and support. Your journey with us means the world! 🌍
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        className="mt-6"
      >
        <a
          href="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
