import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Handshake Engineering Ltd</h3>
            <p className={styles.footerDescription}>
              Leading provider of ICT, communication systems, energy solutions, and security equipment across Nigeria.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Phone className="w-4 h-4" />
                <span>+234 802 342 3369</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className="w-4 h-4" />
                <span>info@handshakeengineering.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className="w-4 h-4" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="/" className={styles.footerLink}>Home</Link>
              <Link href="/about" className={styles.footerLink}>About</Link>
              <Link href="/services" className={styles.footerLink}>Services</Link>
              <Link href="/partners" className={styles.footerLink}>Partners</Link>
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Our Services</h4>
            <div className={styles.footerLinks}>
              <span className={styles.footerLink}>Communication Systems</span>
              <span className={styles.footerLink}>IT Infrastructure</span>
              <span className={styles.footerLink}>Solar Energy</span>
              <span className={styles.footerLink}>Security Systems</span>
            </div>
          </div>

          {/* Partners */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Trusted Partners</h4>
            <div className={styles.footerLinks}>
              <span className={styles.footerLink}>Motorola</span>
              <span className={styles.footerLink}>Codan</span>
              <span className={styles.footerLink}>Dell</span>
              <span className={styles.footerLink}>HP</span>
              <span className={styles.footerLink}>IBM</span>
              <span className={styles.footerLink}>iPTT</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © 2024 Handshake Engineering Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;