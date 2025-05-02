import { Link } from "wouter";
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  SendIcon
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Modern<span className="text-secondary">Site</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Creating beautiful, functional websites that help businesses succeed online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-social" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="footer-social" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">Web Design</a>
              </li>
              <li>
                <a href="#" className="footer-link">Mobile Development</a>
              </li>
              <li>
                <a href="#" className="footer-link">SEO Optimization</a>
              </li>
              <li>
                <a href="#" className="footer-link">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="footer-link">UI/UX Design</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates.
            </p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none text-dark" 
                required
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary/90">
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ModernSite. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
