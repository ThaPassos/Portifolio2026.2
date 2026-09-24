import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  from?: "left" | "right" | "up" | "down";
  delay?: number;
  id?: string;
};

const offsets = {
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
};

export function Reveal({ children, className, from = "up", delay = 0, id }: Props) {
  const offset = offsets[from];

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
