import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ContactInfo, BusinessHours } from "@/lib/types";

const contactInfo: ContactInfo = {
  address: "123 Web Design Street, San Francisco, CA 94103",
  phone: "(123) 456-7890",
  email: "info@modernsite.com"
};

const businessHours: BusinessHours[] = [
  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real application
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a question or want to work together? Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary/90 transition"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <Card className="shadow-md mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="contact-icon">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Address</h4>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="contact-icon">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="contact-icon">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <ul className="space-y-3">
                  {businessHours.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
