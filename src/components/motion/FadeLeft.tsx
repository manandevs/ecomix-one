"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";


const FadeLeft = ({
  children,
  delay = 0,
}: {
  children: ReactElement;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -60}}
      whileInView={{
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.5, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default FadeLeft;
