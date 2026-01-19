"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { Button } from "@/components/shared";
import styles from "./styles.module.scss";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Especialidades", path: "/especialidades" },
      { name: "Nossa Equipe", path: "/profissionais" },
      { name: "Depoimentos", path: "/depoimentos" },
      { name: "Contato", path: "/contato" },
    ],
    [],
  );

  return (
    <header
      className={clsx(
        styles.header,
        isScrolled ? styles.headerScrolled : styles.headerTop,
      )}
    >
      <nav className={styles.nav}>
        <div className={styles.bar}>
          {/* Logo */}
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Ir para a Home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={styles.logo}
            >
              <span className={styles.brand}>Espaço Integrar</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav} aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={clsx(
                    styles.navLink,
                    isActive ? styles.navLinkActive : styles.navLinkIdle,
                  )}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={styles.activeTab}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.mobileWrap}
            >
              <div className={styles.mobilePanel}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={clsx(
                        styles.mobileLink,
                        isActive
                          ? styles.mobileLinkActive
                          : styles.mobileLinkIdle,
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
