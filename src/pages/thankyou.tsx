import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import theme from "../constant/Constant";

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{backgroundColor:theme}} className="min-h-screen flex flex-col items-center justify-center  text-white text-center p-6">
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
        Thank you for information, we will back to you as soon as possible! 🌍
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        className="mt-6"
      >
        <a
          href="/"
        
          className="border  text-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-[#4CC1C4] transition-all duration-200"
        >
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
