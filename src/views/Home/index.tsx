"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import {
  HeroSection,
  Specialties,
  Testimonials,
  WhyUs,
} from "@/components/client";
import { Button } from "@/components/shared";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      {/* Nossas Especialidades Preview */}
      <Specialties />

      {/* Por que nos escolher */}
      <WhyUs />

      {/* Depoimentos */}
      <Testimonials />

      {/* CTA Final */}
      {/* <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.ctaInner}
          >
            <h2 className={styles.ctaTitle}>
              Pronto para começar sua jornada?
            </h2>
            <p className={styles.ctaText}>
              Entre em contato conosco e agende uma avaliação com nossa equipe
              especializada
            </p>

            <Link href="/contato">
              <Button size="lg" className={styles.primaryBtn}>
                Agendar Consulta Agora
                <ArrowRight className={styles.btnIcon} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
