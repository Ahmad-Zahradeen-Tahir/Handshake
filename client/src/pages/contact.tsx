import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import styles from "@/styles/contact.module.css";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+234 802 342 3369",
      color: "bg-he-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@handshakeengineering.com",
      color: "bg-he-primary"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Abuja, Nigeria",
      color: "bg-he-primary"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroDescription}>
            Ready to discuss your project? Contact our team of experts for a consultation and discover how we can help you achieve your engineering goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.contactDetails}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.contactItem}>
                    <div className={`${styles.contactIcon} ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className={styles.contactTitle}>{info.title}</h3>
                      <p className={styles.contactContent}>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className={styles.hoursCard}>
                <CardContent className={styles.hoursContent}>
                  <h4 className={styles.hoursTitle}>
                    <Clock className="w-5 h-5 mr-2" />
                    Business Hours
                  </h4>
                  <div className={styles.hoursList}>
                    {businessHours.map((schedule, index) => (
                      <div key={index} className={styles.hoursItem}>
                        <span className={styles.hoursDay}>{schedule.day}</span>
                        <span className={styles.hoursTime}>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className={styles.formCard}>
              <CardContent className={styles.formContent}>
                <h3 className={styles.formTitle}>Send us a Message</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>First Name *</label>
                      <Input
                        type="text"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Last Name *</label>
                      <Input
                        type="text"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={styles.input}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone</label>
                    <Input
                      type="tel"
                      placeholder="+234 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Service Interest</label>
                    <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                      <SelectTrigger className={styles.select}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="communication">Communication Systems</SelectItem>
                        <SelectItem value="it">IT Infrastructure</SelectItem>
                        <SelectItem value="solar">Solar Energy</SelectItem>
                        <SelectItem value="security">Security Systems</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Message *</label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={styles.textarea}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className={styles.submitButton}
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
