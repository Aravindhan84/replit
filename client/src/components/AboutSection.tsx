import { CheckIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About Us</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Learn more about our company and what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="mb-4 text-gray-700">
              Founded in 2023, our company has been at the forefront of creating 
              beautiful, functional websites that deliver results for our clients.
            </p>
            <p className="mb-6 text-gray-700">
              We believe in clean code, responsive design, and user-centered 
              experiences that help businesses grow and succeed in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Responsive Design</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Modern Technologies</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-3">
                  <CheckIcon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">User-Centered</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Team working together" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
