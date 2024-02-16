import { FC } from "react";
import { Socials } from "../../components/Socials/Socials.tsx";

export const Footer: FC = () => {
  return (
    <footer className="py-6">
      <div className="mx-auto max-w-[1376px] px-4">
        <div className="mx-auto flex max-w-[912px] flex-col-reverse items-center justify-between gap-5 sm:flex-row">
          <div>
            <span className="font-bold">© $MOXY</span>, {new Date().getFullYear()}. All Rights
            Reserved.
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
