import { FC } from "react";
import { projectConfig } from "../../project.config.ts";

export const Socials: FC = () => {
  const { socials } = projectConfig;
  return (
    <div className="inline-flex gap-10">
      {socials.map(({ social, logoUrl, linkUrl }) => (
        <a
          key={social}
          href={linkUrl}
          target="_blank"
          rel="noreferrer" className="inline-flex h-[42px] w-[42px] items-center justify-center bg-[url('./assets/img/icon.svg')] bg-contain bg-no-repeat transition hover:scale-[0.8]"
        >
          <img width={24} height={24} alt={social} src={logoUrl} />
        </a>
      ))}
    </div>
  );
};
