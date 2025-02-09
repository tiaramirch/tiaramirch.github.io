import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MessageProps {
  text: string;
  align: "start" | "end";
  bgColor: string;
}

const Message: React.FC<MessageProps> = ({ text, align, bgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
    rootMargin: "-20% 0px -40% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className={`flex ${
        align === "start" ? "justify-start" : "justify-end"
      } py-16 snap-start`}
    >
      <div
        className={`bg-[${bgColor}] text-white rounded-3xl p-3 px-5 max-w-[70%] my-1 text-lg`}
      >
        {text}
      </div>
    </motion.div>
  );
};

export default Message;
