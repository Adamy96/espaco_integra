"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clsx from "clsx";

import { Button } from "@/components/shared";
import styles from "./styles.module.scss";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      childName: "Pedro Silva",
      specialty: "Fisioterapia Neurofuncional",
      rating: 5,
      text: "A equipe do Espaço Integrar transformou a vida do meu filho. O progresso tem sido incrível e a dedicação dos profissionais é admirável.",
      initial: "M",
    },
    {
      name: "João Santos",
      childName: "Ana Santos",
      specialty: "Fonoaudiologia",
      rating: 5,
      text: "Profissionais extremamente competentes e atenciosos. Minha filha está se desenvolvendo muito bem com o acompanhamento fonoaudiológico.",
      initial: "J",
    },
    {
      name: "Carla Oliveira",
      childName: "Lucas Oliveira",
      specialty: "Terapia Ocupacional",
      rating: 5,
      text: "O ambiente é acolhedor e os profissionais realmente se importam. Estamos muito satisfeitos com os resultados da terapia ocupacional.",
      initial: "C",
    },
  ] as const;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>O Que Dizem Nossos Pacientes</h2>
          <p className={styles.subtitle}>
            Depoimentos de famílias que confiam no nosso trabalho
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <motion.div
              key={`${t.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.card}
            >
              <Quote className={styles.quoteIcon} size={32} />

              <div
                className={styles.starsRow}
                aria-label={`${t.rating} estrelas`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className={styles.star} size={18} />
                ))}
              </div>

              <p className={styles.text}>&quot;{t.text}&quot;</p>

              <div className={styles.footer}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.initial}
                </div>

                <div className={styles.meta}>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.child}>Mãe/Pai de {t.childName}</p>
                  <p className={styles.specialty}>{t.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.cta}
        >
          <Link href="/depoimentos">
            <Button
              variant="outline"
              size="lg"
              className={clsx(styles.ctaBtn, styles.btnLg)}
            >
              Ver Todos os Depoimentos
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
