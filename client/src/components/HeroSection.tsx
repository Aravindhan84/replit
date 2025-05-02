import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to our Modern Website
            </h1>
            <p className="text-lg mb-6">
              A clean, responsive design built with HTML, CSS, and a touch of JavaScript.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out text-center">
                Our Services
              </Link>
              <Link href="/contact" className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-150 ease-in-out text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Person working on laptop" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
