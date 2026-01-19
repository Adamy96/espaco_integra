"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

import CloudsMobile from "@/images/svgs/clouds_mobile.svg";
import CloudsDesktop from "@/images/svgs/clouds_desktop.svg";
import { Button } from "@/components/shared";
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.left}
            >
              <div className={styles.badge}>Clínica Multidisciplinar</div>

              <h1 className={styles.title}>
                Cuidando do seu <span className={styles.brLg} />
                <span className={styles.titleGradient}>
                  desenvolvimento
                </span>{" "}
                <span className={styles.brLg} />
                integral
              </h1>

              <p className={styles.subtitle}>
                Oferecemos uma abordagem integrada e humanizada em saúde,
                reunindo especialistas dedicados ao bem-estar e progresso de
                cada paciente.
              </p>

              <div className={styles.actions}>
                <Link href="/especialidades">
                  <Button
                    size="lg"
                    className={clsx(styles.btnPrimary, styles.btn)}
                  >
                    Conheça Nossas Especialidades
                    <ArrowRight className={styles.btnIcon} size={20} />
                  </Button>
                </Link>

                <Link href="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className={clsx(styles.btnCta, styles.btn)}
                  >
                    Agende sua Consulta
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className={styles.right}
            >
              <div className={styles.visualWrap}>
                <div className={styles.ambientShape} />

                <div className={styles.visualGrid}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={clsx(styles.card, styles.cardTall)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1655842556550-6809c404ce9c"
                      alt="Fisioterapia"
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={styles.card}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                      alt="Psicologia"
                      className={styles.image}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={styles.statCard}
                  >
                    <div className={styles.statNumber}>6+</div>
                    <div className={styles.statLabel}>Especialidades</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <div className={styles.clouds}>
        <CloudsMobile className={styles.mobile} />
        <CloudsDesktop className={styles.desktop} />
      </div> */}
    </>
  );
};

export default HeroSection;
