import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import styles from "@/styles/not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className={styles.button}>
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;