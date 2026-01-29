import { motion } from "framer-motion";

const RetroDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle sun in top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -top-20 -right-20 w-64 h-64"
      >
        <div className="retro-sun w-full h-full opacity-20" />
      </motion.div>

      {/* Small decorative circle bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-1/4 -left-16 w-32 h-32"
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: `linear-gradient(180deg, 
              hsl(var(--retro-teal)) 0%, 
              hsl(var(--retro-deep-teal)) 100%
            )`,
          }}
        />
        {/* Horizontal lines on circle */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-full bg-background/40"
              style={{ marginBottom: `${(i + 1) * 8}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Vertical gradient stripes - very subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute top-1/3 right-10 w-20 h-40"
      >
        <div 
          className="w-full h-full"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              hsl(var(--retro-orange)) 0px,
              hsl(var(--retro-orange)) 4px,
              hsl(var(--retro-coral)) 4px,
              hsl(var(--retro-coral)) 8px,
              hsl(var(--retro-yellow)) 8px,
              hsl(var(--retro-yellow)) 12px,
              transparent 12px,
              transparent 16px
            )`,
          }}
        />
      </motion.div>

      {/* Wavy lines decoration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.08, x: 0 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-20 right-1/4 w-24 h-32"
      >
        <svg viewBox="0 0 100 150" className="w-full h-full">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M 10 ${20 + i * 25} Q 30 ${10 + i * 25}, 50 ${20 + i * 25} T 90 ${20 + i * 25}`}
              stroke={`hsl(var(--retro-${i % 2 === 0 ? 'teal' : 'orange'}))`}
              strokeWidth="2"
              fill="none"
              opacity={0.6 - i * 0.1}
            />
          ))}
        </svg>
      </motion.div>

      {/* Small geometric shape */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.1, rotate: 0 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute top-2/3 left-10 w-12 h-12"
      >
        <div 
          className="w-full h-full"
          style={{
            background: `linear-gradient(135deg, 
              hsl(var(--retro-coral)) 0%, 
              hsl(var(--retro-orange)) 100%
            )`,
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default RetroDecorations;