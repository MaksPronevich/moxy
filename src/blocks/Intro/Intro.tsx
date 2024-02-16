import { FC, useState } from "react";
import { motion } from "framer-motion";
import image from "../../assets/img/intro-img.png";
import { projectConfig } from "../../project.config.ts";
import { animationConfig } from "../../animation.config.ts";
import { Socials } from "../../components/Socials/Socials.tsx";

export const Intro: FC = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);
  const { tokenAddress, buyLinkUrl } = projectConfig;
  const { leftAnimation, rightAnimation } = animationConfig;

  const copyHandler = (copiedText: string): void => {
    navigator.clipboard.writeText(copiedText);
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 500);
  };

  return (
    <motion.section className="py-12">
      <div className="mx-auto max-w-[1376px] px-4">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-0">
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={leftAnimation}
            viewport={{ amount: 0.2, once: true }}
            className="relative z-10 w-full max-w-[432px] text-center"
          >
            <h1 className="mb-3 text-5xl font-bold">$MOXY</h1>
            <div className="mb-16 text-2xl uppercase sm:mb-24">MEMES ON OXYCODONE</div>
            <a
              target="_blank"
              rel="noreferrer"
              href={buyLinkUrl}
              className="inline-flex h-[45px] w-[204px] items-center justify-center bg-[url('./assets/img/button.svg')] bg-contain bg-no-repeat font-bold text-white transition hover:scale-[0.8]"
            >
              Buy $MOXY
            </a>
            <div className="relative mb-16 mt-3 flex items-baseline justify-between gap-2 border-[3px] px-2 py-1 sm:mb-24">
              <div className="text-xs sm:text-sm">
                <span>{tokenAddress}</span>
              </div>
              <button
                onClick={() => copyHandler(tokenAddress)}
                className="text-sm font-bold transition hover:text-red sm:text-base"
              >
                Copy
              </button>
              {isNotificationVisible && (
                <div className="absolute -top-[40px] right-0 rounded border-2 bg-white px-2 py-1 text-sm font-bold">
                  Copied
                </div>
              )}
            </div>
            <Socials />
          </motion.div>
          <motion.div
            custom={0.7}
            initial="hidden"
            whileInView="visible"
            variants={rightAnimation}
            viewport={{ amount: 0.2, once: true }}
            className="relative w-full pb-[60%] lg:pb-[41%]"
          >
            <img alt="Moxy" src={image} className="absolute h-full w-full object-contain" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
