import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Nail salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Serene Nails</h1>
              <p className="text-xl text-white mb-8">Experience luxury at your fingertips</p>
              <Link to="/booking" className="bg-rose-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-rose-700 transition duration-300">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Manicure', 'Pedicure', 'Nail Art'].map((service) => (
            <div key={service} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="/services" className="text-rose-600 hover:text-rose-700">Learn more</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Sarah L.', text: 'Absolutely love the service at Serene Nails! My nails have never looked better.' },
            { name: 'Mike R.', text: 'Great atmosphere and professional staff. Highly recommend for anyone looking for top-notch nail care.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1604656367554-6c9e4c7a8fa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1604656366461-ad98331af50e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          ].map((img, index) => (
            <div key={index} className="relative h-48 rounded-lg overflow-hidden">
              <img src={img} alt={`Nail design ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-rose-700 transition duration-300">
            View Full Gallery
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;