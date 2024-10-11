import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-100 text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Serene Nails</h3>
            <p>123 Beauty Lane, Styleville, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@serenenails.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p>Monday - Friday: 9am - 7pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-rose-600"><Facebook /></a>
              <a href="#" className="text-gray-600 hover:text-rose-600"><Instagram /></a>
              <a href="#" className="text-gray-600 hover:text-rose-600"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Serene Nails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;