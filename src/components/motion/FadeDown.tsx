import { motion } from "framer-motion";
import { ReactElement } from "react";
const FadeDown = ({
  children,
  delay = 0,
  yValue,
}: {
  children: ReactElement;
  delay?: number;
  yValue?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: yValue ? -yValue : -60 }}
      whileInView={{
        opacity: 1,
        translateY: -0,
        transition: { duration: 0.6, delay: delay },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default FadeDown;
