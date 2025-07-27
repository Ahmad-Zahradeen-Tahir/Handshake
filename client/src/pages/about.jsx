import { CheckCircle, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import styles from "@/styles/about.module.css";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in all our engineering solutions and services."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "Building lasting relationships with clients through trust and reliable service delivery."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to provide forward-thinking solutions."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "ISO certified processes ensuring consistent quality across all projects."
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Handshake Engineering Ltd was established in Abuja, Nigeria"
    },
    {
      year: "2012",
      title: "First Major Contract",
      description: "Secured our first major communication systems installation project"
    },
    {
      year: "2016",
      title: "Solar Division Launch",
      description: "Expanded into renewable energy solutions with our solar energy division"
    },
    {
      year: "2020",
      title: "ISO Certification",
      description: "Achieved ISO certification for quality management systems"
    },
    {
      year: "2024",
      title: "500+ Projects",
      description: "Reached milestone of 500 completed projects across Nigeria"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Handshake Engineering</h1>
          <p className={styles.heroDescription}>
            Building Nigeria's future through innovative engineering solutions in ICT, energy, and security systems.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className={styles.overview}>
        <div className={styles.sectionContainer}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.paragraph}>
                Founded in 2008 and based in Abuja, Nigeria, Handshake Engineering Ltd has been at the forefront of technological innovation for over 15 years. We specialize in providing comprehensive solutions across ICT, communication systems, energy, and security sectors.
              </p>
              <p className={styles.paragraph}>
                Our expertise spans across radio communications (HF/VHF/UHF), Push-to-Talk over Cellular systems, IT infrastructure, solar energy installations, and advanced security equipment. We pride ourselves on delivering excellence through our strategic partnerships with industry leaders including Motorola, Codan, Dell, HP, IBM, and iPTT.
              </p>
              <p className={styles.paragraph}>
                With over 500 completed projects and a commitment to quality that earned us ISO certification, we continue to build lasting partnerships with clients across Nigeria and beyond.
              </p>
            </div>
            
            <div className={styles.overviewImage}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional engineering team in modern office" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className={styles.values}>
        <div className={styles.sectionContainer}>
          <div className={styles.valuesHeader}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionDescription}>
              The principles that guide everything we do
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <Card key={index} className={styles.valueCard}>
                <CardContent className={styles.valueContent}>
                  <div className={styles.valueIcon}>
                    {value.icon}
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className={styles.timeline}>
        <div className={styles.sectionContainer}>
          <div className={styles.timelineHeader}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionDescription}>
              Key milestones in our company's growth and development
            </p>
          </div>

          <div className={styles.timelineContainer}>
            {timeline.map((event, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{event.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p className={styles.timelineDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.sectionContainer}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Global Partners</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;