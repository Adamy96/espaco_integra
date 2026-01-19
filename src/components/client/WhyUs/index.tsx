import { motion } from "framer-motion";
import { Heart, Users, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Star from "@/images/pngs/star.png";

import { Button } from "@/components/shared";
import styles from "./styles.module.scss";

const benefits = [
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description:
      "Tratamento personalizado com atenção às necessidades individuais de cada paciente",
    gradient: "blue",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description:
      "Especialistas experientes e comprometidos com sua saúde e bem-estar",
    gradient: "purple",
  },
  {
    icon: CheckCircle2,
    title: "Tratamento Personalizado",
    description: "Planos terapêuticos individualizados para cada paciente",
    gradient: "pink",
  },
  {
    icon: Building2,
    title: "Infraestrutura Completa",
    description: "Ambiente adaptado e equipamentos de última geração",
    gradient: "green",
  },
] as const;

const WhyUs = () => {
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <svg
            width={48}
            height={48}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="heartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#E68BB4" />
                <stop offset="100%" stopColor="#9A7CFF" />
              </linearGradient>
            </defs>

            <Heart color="url(#heartGradient)" strokeWidth={2} />
          </svg>
          <h2 className={styles.sectionTitle}>
            Por <span>que nos</span> <span>escolher</span>
          </h2>
          <img src="/images/pngs/star.png" className={styles.star} />
        </motion.div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={`${benefit.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={styles.card}
            >
              <div
                className={`${styles.iconBox} ${
                  styles[`iconBox__${benefit.gradient}`]
                }`}
              >
                <benefit.icon className={styles.icon} />
              </div>

              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardText}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <Link href="/especialidades">
          <Button size="lg" className={styles.btnCta}>
            Agende sua Consulta
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
