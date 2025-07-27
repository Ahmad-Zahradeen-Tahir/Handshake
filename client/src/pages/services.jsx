import { Radio, Server, Sun, Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import styles from "@/styles/services.module.css";

const Services = () => {
  const services = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Communication Systems",
      description: "Advanced radio communication solutions including HF/VHF/UHF systems, Push-to-Talk over Cellular (PoC), and comprehensive communication infrastructure.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Two-Way Radio Systems",
        "Push-to-Talk over Cellular",
        "Network Infrastructure",
        "Communication Towers",
        "Emergency Communication Systems"
      ],
      bgColor: "bg-he-primary"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Enterprise-grade IT solutions including servers, laptops, printers, and comprehensive hardware solutions from leading global brands.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Server Solutions",
        "Business Laptops & Desktops",
        "Network Equipment",
        "Printing Solutions",
        "Data Center Setup"
      ],
      bgColor: "bg-blue-600"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Energy",
      description: "Complete solar power solutions including design, installation, and maintenance of renewable energy systems for residential and commercial applications.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "Solar Panel Installation",
        "Battery Storage Systems",
        "Energy Consulting",
        "Maintenance Services",
        "Grid-Tie Solutions"
      ],
      bgColor: "bg-he-accent"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Systems",
      description: "Comprehensive security solutions including surveillance systems, access control, and integrated security platforms for maximum protection.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: [
        "CCTV Surveillance Systems",
        "Access Control Systems",
        "Alarm Systems",
        "Security Integration",
        "Remote Monitoring"
      ],
      bgColor: "bg-red-600"
    }
  ];

  const additionalServices = [
    "Project Management & Consulting",
    "System Maintenance & Support",
    "Training & Technical Education",
    "Custom Engineering Solutions",
    "24/7 Technical Support"
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroDescription}>
            Comprehensive engineering solutions designed to meet the evolving needs of modern businesses across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className={styles.services}>
        <div className={styles.sectionContainer}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card key={index} className={styles.serviceCard}>
                <CardContent className={styles.serviceContent}>
                  <div className={styles.serviceImageWrapper}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={styles.serviceImage}
                    />
                  </div>
                  <div className={`${styles.serviceIcon} ${service.bgColor}`}>
                    {service.icon}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.featureItem}>
                        <Check className="w-4 h-4 text-he-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={styles.additionalServices}>
        <div className={styles.sectionContainer}>
          <div className={styles.additionalServicesContent}>
            <h2 className={styles.sectionTitle}>Additional Services</h2>
            <p className={styles.sectionDescription}>
              Beyond our core offerings, we provide comprehensive support services to ensure your success
            </p>
            <div className={styles.additionalServicesList}>
              {additionalServices.map((service, index) => (
                <div key={index} className={styles.additionalServiceItem}>
                  <Check className="w-5 h-5 text-he-success mr-3" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Contact our team of experts to discuss your project requirements and discover how we can help you achieve your engineering goals.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg" className={styles.primaryButton}>
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/partners">
                <Button variant="outline" size="lg" className={styles.secondaryButton}>
                  View Our Partners
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;