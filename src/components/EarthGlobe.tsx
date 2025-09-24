import { motion } from "framer-motion";
import earthAnimated from "@/assets/earth-animated.jpg";

const EarthGlobe = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative">
          <img
            src={earthAnimated}
            alt="Animated Earth"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-transparent to-black/20" />
          <div className="absolute inset-0 rounded-full glow-primary animate-glow" />
        </div>
        
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-0 border border-primary/20 rounded-full"
          style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute inset-0 border border-secondary/20 rounded-full"
          style={{ width: "140%", height: "140%", left: "-20%", top: "-20%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Data points floating around */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent rounded-full glow-secondary"
          style={{
            left: `${30 + Math.cos(i * 60 * Math.PI / 180) * 200}px`,
            top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 200}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default EarthGlobe;