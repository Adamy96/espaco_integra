import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import styles from "./styles.module.scss";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Especialidades", path: "/especialidades" },
    { name: "Profissionais", path: "/profissionais" },
    { name: "Contato", path: "/contato" },
  ] as const;

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Clinic Info */}
          <div className={styles.clinic}>
            <div className={styles.clinicHeader}>
              <Heart className={styles.heartIcon} aria-hidden="true" />
              <span className={styles.brand}>Espaço Integrar</span>
            </div>

            <p className={styles.clinicText}>
              Centro especializado em terapias integradas, oferecendo cuidado
              humanizado e tratamentos personalizados para todas as idades.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <span className={styles.title}>Links Rápidos</span>

            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className={styles.linkItem}>
                    <span className={styles.bullet} aria-hidden="true">
                      •
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contact}>
            <span className={styles.title}>Contato</span>

            <ul className={styles.contactList}>
              <li className={styles.contactRow}>
                <span
                  className={clsx(styles.iconPill, styles.iconPillSecondary)}
                  aria-hidden="true"
                >
                  <Phone className={styles.pillIcon} />
                </span>
                <span className={styles.contactValue}>(11) 98765-4321</span>
              </li>

              <li className={styles.contactRow}>
                <span
                  className={clsx(styles.iconPill, styles.iconPillPrimary)}
                  aria-hidden="true"
                >
                  <Mail className={styles.pillIcon} />
                </span>
                <span className={styles.contactValue}>
                  contato@espacointegrar.com.br
                </span>
              </li>

              <li className={styles.contactRow}>
                <span
                  className={clsx(styles.iconPill, styles.iconPillTertiary)}
                  aria-hidden="true"
                >
                  <MapPin className={styles.pillIcon} />
                </span>
                <span className={styles.contactValue}>
                  Av. Paulista, 1000 - São Paulo, SP
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className={styles.social}>
            <span className={styles.title}>Conecte-se</span>

            <div className={styles.hoursCard}>
              <span className={styles.hoursTitle}>Horário de Atendimento</span>
              <div className={styles.hoursBody}>
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 13h
              </div>
            </div>

            <div className={styles.socialRow}>
              <a
                href="#"
                className={clsx(styles.socialBtn, styles.socialBtnPrimary)}
                aria-label="Facebook"
              >
                <Facebook className={styles.socialIcon} />
              </a>

              <a
                href="#"
                className={clsx(styles.socialBtn, styles.socialBtnSecondary)}
                aria-label="Instagram"
              >
                <Instagram className={styles.socialIcon} />
              </a>

              <a
                href="#"
                className={clsx(styles.socialBtn, styles.socialBtnTertiary)}
                aria-label="LinkedIn"
              >
                <Linkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Espaço Integrar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
