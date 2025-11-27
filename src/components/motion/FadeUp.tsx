"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";


const FadeUp = ({
  children,
  delay = 0,
  yValue,
}: {
  children: ReactElement;
  delay?: number;
  yValue?: number | string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: yValue ? yValue : 60 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.6, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default FadeUp;
