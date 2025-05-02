import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-serif font-bold text-2xl">
              Modern<span className="text-secondary">Site</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="mobile-nav-link">
                Home
              </Link>
              <Link href="/about" className="mobile-nav-link">
                About
              </Link>
              <Link href="/services" className="mobile-nav-link">
                Services
              </Link>
              <Link href="/portfolio" className="mobile-nav-link">
                Portfolio
              </Link>
              <Link href="/contact" className="mobile-nav-link">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
