import { FC } from "react";
import { Intro } from "./blocks/Intro/Intro.tsx";
import { Footer } from "./blocks/Footer/Footer.tsx";
import { History } from "./blocks/History/History.tsx";

export const App: FC = () => {
  return (
    <>
      <main>
        <Intro />
        <History />
      </main>
      <Footer />
    </>
  );
};
