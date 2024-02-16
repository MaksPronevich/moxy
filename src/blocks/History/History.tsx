import { FC } from "react";
import { motion } from "framer-motion";
import { projectConfig } from "../../project.config.ts";
import { animationConfig } from "../../animation.config.ts";

const { bottomAnimation } = animationConfig;
const { comicImageUrls } = projectConfig;

export const History: FC = () => {
  return (
    <motion.section>
      <div className="mx-auto max-w-[1376px] px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
          {comicImageUrls.map((url, index) => (
            <motion.div
              custom={1}
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={bottomAnimation}
              viewport={{ amount: 0.1, once: true }}
              className="relative border-[4px] pb-[99%]"
            >
              <img src={url} alt="Comic" className="absolute h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
