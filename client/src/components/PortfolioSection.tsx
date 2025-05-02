import { PortfolioItem } from "@/lib/types";
import { Button } from "@/components/ui/button";

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Website",
    description: "A modern online store with a seamless shopping experience."
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Fitness Mobile App",
    description: "Track workouts, set goals, and connect with trainers."
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Website",
    description: "Professional website for a leading financial services firm."
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Check out some of our recent projects and see what we can do for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-4">{item.description}</p>
                <a 
                  href="#" 
                  className="text-white bg-primary py-2 px-4 rounded inline-block hover:bg-opacity-90 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="btn-outlined">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
