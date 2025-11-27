"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";


const FadeUpTitle = ({
  children,
  delay = 0,
  yValue,
}: {
  children: ReactElement;
  delay?: number;
  yValue?: number | string;
}) => {
  return (
    <div className="overflow-hidden inline-block relative z-[9]">
      <motion.div
        initial={{ opacity: 0, translateY: yValue ? yValue : "100%" }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.6, delay: delay, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default FadeUpTitle;
