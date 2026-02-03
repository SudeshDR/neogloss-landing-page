import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Rocket, 
  Wrench, 
  BarChart3, 
  Cloud, 
  Share2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Static Websites",
    description: "Simple, fast-loading websites designed for businesses that need an online presence without complex backend requirements.",
    features: [
      "Responsive design for all devices",
      "SEO-friendly structure",
      "Lightweight and fast",
      "Easy content updates",
    ],
  },
  {
    icon: Rocket,
    title: "Dynamic Websites",
    description: "Interactive websites with dynamic content, user authentication, and backend integration for modern business needs.",
    features: [
      "Database-driven content",
      "User authentication & management",
      "Real-time updates",
      "Customizable functionality",
    ],
  },
  {
    icon: Wrench,
    title: "Customised Tools",
    description: "Tailor-made web applications and tools designed to meet your specific business requirements and workflows.",
    features: [
      "Custom application development",
      "Integration with existing systems",
      "User-specific functionality",
      "Ongoing support and updates",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Gather, process, and analyze business data to derive actionable insights for smarter decision-making.",
    features: [
      "Automated data collection",
      "Data cleaning & processing",
      "Custom analytics dashboards",
      "Reports & visualizations",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Secure and scalable cloud hosting solutions for websites, apps, and databases with high availability.",
    features: [
      "Multi-cloud deployment",
      "Scalable infrastructure",
      "Automated backups",
      "High security and uptime",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media management for YouTube, Instagram, Facebook, and more to grow your brand presence.",
    features: [
      "Content creation & scheduling",
      "Audience engagement",
      "Analytics & reporting",
      "Multi-platform management",
    ],
  },
];


export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end solutions to help businesses navigate the digital 
            landscape and achieve their strategic objectives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-2xl p-8 gradient-border group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  Key Features
                </span>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>

            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
