"use client";

import { url } from "inspector";
import * as motion from "motion/react-client";

interface TopNavProps {
  page: string;
}

const TopNav: React.FC<TopNavProps> = ({ page }) => {
  return (
    <div className="h-full w-svh relative z-20 inset-y-0">
      <div className="flex flex-row bg-black w-full h-[10%] justify-between px-20 items-center">
        {["Home", "About", "Projects", "Interests", "Contact Me"].map(
          (item) => (
            <motion.div
              key={item}
              whileHover={{ backgroundColor: "#7d32f8", scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`p-2 rounded-md text-white font-bold cursor-pointer w-32 flex justify-center ${
                page === item ? "border-b-4 border-[#ffffff]" : ""
              }`}
            >
              {item}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};
export { TopNav };
