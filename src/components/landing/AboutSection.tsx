import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "4+ years delivering enterprise solutions",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across the globe",
  },
  {
    icon: Users,
    title: "Certified Teams",
    description: "University Certified professionals",
  },
  {
    icon: CheckCircle,
    title: "Client Success",
    description: "98% client retention rate",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              About Our Company
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2026, Neogloss has been at the forefront of digital 
              innovation. We started as a small web development team and have 
              grown into a comprehensive IT solutions provider serving clients globally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower businesses through technology, creating 
              custom solutions that drive growth and efficiency. With a team of 
              experienced professionals, we combine technical expertise with 
              strategic thinking to deliver exceptional results.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 gradient-border group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
