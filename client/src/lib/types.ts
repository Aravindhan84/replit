// Service type
export interface Service {
  id: string;
  icon: string;
  iconColor: "primary" | "secondary" | "accent";
  title: string;
  description: string;
}

// Portfolio item type
export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

// Contact info type
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

// Business hours type
export interface BusinessHours {
  day: string;
  hours: string;
}
