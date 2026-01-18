import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Shield, 
  Rocket, 
  Video, 
  Cloud, 
  Database,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites, progressive web apps, e-commerce solutions, and content management systems tailored to your business needs.",
    features: [
      "Responsive design for all devices",
      "SEO optimization built-in",
      "Performance-optimized code",
      "Complete CMS integration",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, managed security services, and incident response planning.",
    features: [
      "Vulnerability assessment",
      "Security infrastructure setup",
      "24/7 threat monitoring",
      "Compliance management",
    ],
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions that modernize business processes and enhance customer engagement.",
    features: [
      "Process automation",
      "Cloud adoption & scalability",
      "Data-driven decision making",
      "Enhanced customer experience",
    ],
  },
  {
    icon: Video,
    title: "AV Services",
    description: "Professional audio-video solutions including system integration, event production, and conference room setups.",
    features: [
      "High-quality AV setup",
      "Live streaming & recording",
      "AV system integration",
      "On-site technical support",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, infrastructure management, DevOps solutions, and serverless architecture implementation.",
    features: [
      "Multi-cloud strategy",
      "Cost optimization",
      "Automated CI/CD pipelines",
      "Disaster recovery planning",
    ],
  },
  {
    icon: Database,
    title: "ERP Implementation",
    description: "Comprehensive ERP solutions to streamline operations and provide real-time insights for better decision-making.",
    features: [
      "End-to-end integration",
      "Real-time reporting",
      "Custom module development",
      "Scalable architecture",
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

              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
