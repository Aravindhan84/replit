import { Laptop, Smartphone, Search } from "lucide-react";
import { Service } from "@/lib/types";
import { ArrowRight } from "lucide-react";

const services: Service[] = [
  {
    id: "1",
    icon: "laptop",
    iconColor: "primary",
    title: "Web Design",
    description: "Beautiful, responsive websites that look great on any device and help you achieve your business goals."
  },
  {
    id: "2",
    icon: "smartphone",
    iconColor: "secondary",
    title: "Mobile Development",
    description: "Custom mobile applications for iOS and Android that engage your customers and simplify processes."
  },
  {
    id: "3",
    icon: "search",
    iconColor: "accent",
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive more targeted traffic to your website."
  }
];

const ServicesSection = () => {
  const renderIcon = (service: Service) => {
    switch (service.icon) {
      case "laptop":
        return <Laptop className={`text-xl`} />;
      case "smartphone":
        return <Smartphone className={`text-xl`} />;
      case "search":
        return <Search className={`text-xl`} />;
      default:
        return null;
    }
  };

  const getIconClass = (color: Service["iconColor"]) => {
    switch (color) {
      case "primary":
        return "bg-primary service-icon-primary";
      case "secondary":
        return "bg-secondary service-icon-secondary";
      case "accent":
        return "bg-accent service-icon-accent";
      default:
        return "";
    }
  };

  const getLinkClass = (color: Service["iconColor"]) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "";
    }
  };
  
  return (
    <section id="services" className="py-16 bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We offer a range of services to help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md p-6 card-hover"
            >
              <div className={`service-icon ${getIconClass(service.iconColor)}`}>
                {renderIcon(service)}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href="#" 
                className={`${getLinkClass(service.iconColor)} font-medium hover:underline flex items-center`}
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
