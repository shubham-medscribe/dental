import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function CallUsBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.a
      href="tel:+1510-574-0496"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="sm:hidden cursor-pointer fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6 flex items-center gap-3 justify-center z-50"
    >
      {/* Infinite Left-Right Motion */}
      <motion.div
        animate={{ x: [-10, 0, -20] }}
        transition={{
          type: "spring",
          stiffness: 200, // Higher value = quicker return
          damping: 10, // Controls bounce effect
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="flex items-center"
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="text-orange-500 text-lg sm:text-xl"
        />
      </motion.div>

      <span className="text-sm sm:text-base font-semibold">
        Call us to get Free Consultation
      </span>
    </motion.a>,
    document.body
  );
}
