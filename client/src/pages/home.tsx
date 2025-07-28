import { Link } from "wouter";
import { CheckCircle, Zap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import styles from "@/styles/home.module.css";

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Trusted by 500+ clients",
      bgColor: "bg-he-accent",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "15+ years experience",
      bgColor: "bg-green-500",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      text: "Premium global partners",
      bgColor: "bg-blue-400",
    },
  ];

  const services = [
    {
      title: "Communication Systems",
      description: "HF/VHF/UHF radio systems and Push-to-Talk solutions",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "IT Infrastructure",
      description: "Enterprise servers, laptops, and networking equipment",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Solar Energy",
      description: "Complete renewable energy solutions and installations",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div
          className={styles.heroBackground}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)",
          }}
        ></div>

        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Engineering Excellence in
                <span className={styles.heroAccent}>
                  {" "}
                  ICT & Energy Solutions
                </span>
              </h1>
              <p className={styles.heroDescription}>
                Leading provider of communication systems, IT infrastructure,
                solar energy solutions, and security equipment across Nigeria.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact">
                  <Button size="lg" className={styles.primaryButton}>
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className={styles.secondaryButton}
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className={styles.heroFeatures}>
              <Card className={styles.featuresCard}>
                <CardContent className={styles.featuresContent}>
                  <div className={styles.featuresList}>
                    {features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <div
                          className={`${styles.featureIcon} ${feature.bgColor}`}
                        >
                          {feature.icon}
                        </div>
                        <span className={styles.featureText}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.aboutPreview}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>
                About Handshake Engineering
              </h2>
              <p className={styles.sectionDescription}>
                Based in Abuja, Nigeria, we've been at the forefront of
                technological innovation for over 15 years, providing
                comprehensive solutions in ICT, communication systems, energy,
                and security sectors.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
              </div>
              <Link href="/about">
                <Button variant="outline" className={styles.learnMoreButton}>
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className={styles.aboutImage}>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional engineering team collaboration"
                className={styles.image}
              />
              <div className={styles.badge}>
                <div className={styles.badgeText}>ISO</div>
                <div className={styles.badgeSubtext}>Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className={styles.services}>
        <div className={styles.sectionContainer}>
          <div className={styles.servicesHeader}>
            <h2 className={styles.sectionTitle}>Featured Services</h2>
            <p className={styles.sectionDescription}>
              Comprehensive engineering solutions designed to meet modern
              business needs
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card key={index} className={styles.serviceCard}>
                <CardContent className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.image}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <Link href="/services">
              <Button size="lg" className={styles.viewAllButton}>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
