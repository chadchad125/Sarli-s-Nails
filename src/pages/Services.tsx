import React from 'react';

const services = [
  { name: 'Classic Manicure', price: '$25', description: 'Includes nail shaping, cuticle care, hand massage, and polish application.' },
  { name: 'Gel Manicure', price: '$35', description: 'Long-lasting gel polish application with nail prep and cuticle care.' },
  { name: 'Deluxe Pedicure', price: '$45', description: 'Foot soak, exfoliation, nail care, massage, and polish application.' },
  { name: 'Nail Art', price: 'From $10', description: 'Custom nail art designs to suit your style and preferences.' },
  { name: 'Acrylic Full Set', price: '$60', description: 'Full set of acrylic nails with your choice of length and shape.' },
  { name: 'Nail Repair', price: '$10 per nail', description: 'Quick fix for broken or chipped nails.' }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-rose-600 mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-xl font-bold text-gray-800">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;