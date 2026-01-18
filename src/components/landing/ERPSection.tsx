import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShoppingCart, 
  FolderKanban, 
  ClipboardCheck, 
  Users2, 
  Package, 
  Receipt,
  Landmark,
  FileText,
  Factory
} from "lucide-react";

const modules = [
  { icon: FolderKanban, title: "Project Management", description: "Manage projects based on milestones and dependencies." },
  { icon: Users2, title: "Vendor Management", description: "Collaborate with vendors through an automated platform." },
  { icon: Package, title: "Inventory Management", description: "Remotely manage inventory with cloud-based solutions." },
  { icon: Receipt, title: "Sales Order Management", description: "Automate your order-to-cash processes efficiently." },
  { icon: FileText, title: "E-Invoicing", description: "Ease invoicing burdens, compatible with all ERPs." },
  { icon: Factory, title: "Manufacturing ERP", description: "Automate production for higher flexibility." },
];

export const ERPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Enterprise Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Core Business Process Modules
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive ERP modules designed to streamline every aspect of your business operations.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="glass-card rounded-xl p-5 flex items-start gap-4 hover:bg-secondary/60 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <module.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Odoo Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
        </motion.div>
      </div>
    </section>
  );
};
