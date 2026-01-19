import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Music,
  Utensils,
  Users,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/shared";
import styles from "./styles.module.scss";

const specialties = [
  {
    icon: Brain,
    title: "Fisioterapia Neurofuncional",
    description:
      "Reabilitação neurológica especializada para recuperação de movimentos e funções.",
    gradient: "blue",
  },
  {
    icon: Users,
    title: "Fonoaudiologia",
    description:
      "Tratamento de distúrbios da comunicação, linguagem, fala e audição.",
    gradient: "purple",
  },
  {
    icon: Heart,
    title: "Neuropsicologia/Psicologia",
    description:
      "Avaliação e reabilitação cognitiva, apoio emocional e terapia comportamental.",
    gradient: "pink",
  },
  {
    icon: Stethoscope,
    title: "Terapia Ocupacional",
    description:
      "Desenvolvimento de habilidades para atividades diárias e autonomia.",
    gradient: "green",
  },
  {
    icon: Utensils,
    title: "Terapia Alimentar",
    description:
      "Intervenção em dificuldades alimentares e seletividade alimentar.",
    gradient: "orange",
  },
  {
    icon: Music,
    title: "Musicoterapia",
    description:
      "Uso terapêutico da música para desenvolvimento cognitivo e emocional.",
    gradient: "indigo",
  },
] as const;

const Specialties = () => {
  return (
    <section className={styles.specialties}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>
            Nossas <span>Especialidades</span>
          </h2>
          <p className={styles.sectionDescription}>
            Oferecemos uma gama completa de terapias integradas para atender às
            necessidades de cada paciente
          </p>
        </motion.div>

        <div className={styles.cardsGrid}>
          {specialties.map((specialty, index) => (
            <motion.div
              key={`${specialty.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={styles.card}
            >
              <div className={styles.iconHeader}>
                <div
                  className={`${styles.iconBox} ${
                    styles[`iconBox__${specialty.gradient}`]
                  }`}
                >
                  <specialty.icon className={styles.icon} />
                </div>

                <h3 className={styles.cardTitle}>{specialty.title}</h3>
              </div>
              <p className={styles.cardText}>{specialty.description}</p>
            </motion.div>
          ))}
        </div>

        <Link href="/especialidades">
          <Button size="lg" className={styles.btnCta}>
            Ver Todas as Especialidades
            <ArrowRight className={styles.btnIcon} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Specialties;
