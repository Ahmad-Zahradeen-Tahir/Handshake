import { ExternalLink, Award, Handshake, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import styles from "@/styles/partners.module.css";

const Partners = () => {
  const partners = [
    {
      name: "Motorola",
      description: "Leading provider of communication solutions and two-way radio systems",
      category: "Communication",
      products: ["Two-Way Radios", "Digital Radio Systems", "Communication Infrastructure"],
      logo: "text-2xl font-bold text-he-primary"
    },
    {
      name: "Codan",
      description: "Specialist in HF radio communications and tactical communications",
      category: "Communication",
      products: ["HF Radio Systems", "Tactical Communications", "Emergency Communications"],
      logo: "text-2xl font-bold text-he-primary"
    },
    {
      name: "Dell",
      description: "Global technology leader providing enterprise IT solutions",
      category: "IT Infrastructure",
      products: ["Servers", "Laptops", "Workstations", "Storage Solutions"],
      logo: "text-2xl font-bold text-he-primary"
    },
    {
      name: "HP",
      description: "Innovative technology solutions for business and personal use",
      category: "IT Infrastructure",
      products: ["Printers", "Laptops", "Desktops", "Print Solutions"],
      logo: "text-2xl font-bold text-he-primary"
    },
    {
      name: "IBM",
      description: "Enterprise technology and consulting services provider",
      category: "IT Infrastructure",
      products: ["Enterprise Servers", "Cloud Solutions", "AI Technology", "Consulting"],
      logo: "text-2xl font-bold text-he-primary"
    },
    {
      name: "iPTT",
      description: "Push-to-Talk over Cellular communication solutions",
      category: "Communication",
      products: ["PoC Solutions", "Mobile Communications", "Fleet Management"],
      logo: "text-2xl font-bold text-he-primary"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Access to genuine, high-quality products with full manufacturer warranties"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Authorized Support",
      description: "Official technical support and service from certified partner networks"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Standards",
      description: "Solutions that meet international standards and best practices"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Trusted Global Partners</h1>
          <p className={styles.heroDescription}>
            We collaborate with industry-leading brands to deliver world-class solutions and maintain the highest standards of quality and reliability.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className={styles.partners}>
        <div className={styles.sectionContainer}>
          <div className={styles.partnersGrid}>
            {partners.map((partner, index) => (
              <Card key={index} className={styles.partnerCard}>
                <CardContent className={styles.partnerContent}>
                  <div className={styles.partnerLogo}>
                    <div className={partner.logo}>{partner.name}</div>
                  </div>
                  <div className={styles.partnerCategory}>{partner.category}</div>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerDescription}>{partner.description}</p>
                  <div className={styles.productsList}>
                    <h4 className={styles.productsTitle}>Key Products:</h4>
                    <ul className={styles.products}>
                      {partner.products.map((product, productIndex) => (
                        <li key={productIndex} className={styles.product}>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.sectionContainer}>
          <div className={styles.benefitsHeader}>
            <h2 className={styles.sectionTitle}>Partnership Benefits</h2>
            <p className={styles.sectionDescription}>
              Why our strategic partnerships matter for your projects
            </p>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <Card key={index} className={styles.benefitCard}>
                <CardContent className={styles.benefitContent}>
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Statement */}
      <section className={styles.statement}>
        <div className={styles.sectionContainer}>
          <div className={styles.statementContent}>
            <h2 className={styles.statementTitle}>
              Building Strong Partnerships for Exceptional Results
            </h2>
            <p className={styles.statementText}>
              These strategic partnerships enable us to offer cutting-edge technology solutions and maintain our position as Nigeria's leading engineering services provider. Through our authorized partnerships, we ensure that every solution we deliver meets the highest standards of quality, reliability, and performance.
            </p>
            <p className={styles.statementText}>
              Our partnerships span across multiple industries and technologies, allowing us to provide comprehensive solutions that address the diverse needs of our clients across communication systems, IT infrastructure, energy solutions, and security systems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Leverage Our Partnerships?</h2>
            <p className={styles.ctaDescription}>
              Contact us to learn how our strategic partnerships can benefit your next project
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg" className={styles.primaryButton}>
                  Contact Us Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className={styles.secondaryButton}>
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;