import { Link } from "wouter";
import { Twitter, Linkedin } from "lucide-react";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.companySection}>
            <div className={styles.companyName}>Handshake Engineering</div>
            <div className={styles.companySubname}>Limited</div>
            <p className={styles.companyDescription}>
              Leading provider of ICT, communication systems, energy solutions, and security equipment across Nigeria. Building the future through innovative engineering solutions.
            </p>
            
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/partners" className={styles.link}>Partners</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li><span className={styles.serviceItem}>Communication Systems</span></li>
              <li><span className={styles.serviceItem}>IT Infrastructure</span></li>
              <li><span className={styles.serviceItem}>Solar Energy</span></li>
              <li><span className={styles.serviceItem}>Security Systems</span></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Handshake Engineering Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
