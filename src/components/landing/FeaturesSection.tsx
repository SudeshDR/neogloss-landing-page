import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Users, 
  Scale, 
  ShieldCheck, 
  RefreshCw, 
  HeadphonesIcon,
  Globe2,
  Server,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Development",
    description: "Accelerated development cycles with Agile methodologies that get your product to market faster.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Committed specialists assigned to your project, ensuring consistent support and communication.",
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    description: "Future-proof architecture designed to grow with your business needs and handle increasing demands.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "Multi-layered security measures implemented to protect your data and systems from threats.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Integration",
    description: "Automated testing and deployment processes to ensure quality and reduce time to production.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance to resolve issues promptly and minimize downtime.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "International presence enabling us to serve clients across different time zones and markets.",
  },
  {
    icon: Server,
    title: "Dedicated Hosting",
    description: "High-performance hosting solutions tailored to your specific application requirements.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Industry-leading data encryption and privacy measures to safeguard sensitive information.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Why Choose Neogloss
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver more than just technology—we provide strategic advantages 
            that help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 border border-transparent hover:border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
