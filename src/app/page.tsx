import type { Metadata } from "next";
import { HomeView } from "@/views";

export const metadata: Metadata = {
  title: "Espaço Integrar - Clínica de Terapias Integradas",
  description:
    "Centro especializado em terapias integradas, oferecendo fisioterapia neurofuncional, fonoaudiologia, neuropsicologia, terapia ocupacional e mais.",
};
const Home = () => {
  return <HomeView />;
};

export default Home;
