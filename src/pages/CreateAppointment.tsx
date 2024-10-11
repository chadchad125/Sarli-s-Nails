import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

const services = ['Classic Manicure', 'Gel Manicure', 'Deluxe Pedicure', 'Nail Art', 'Acrylic Full Set', 'Nail Repair'];
const technicians = ['Emily', 'Sarah', 'Michael', 'Jessica'];

const CreateAppointment: React.FC = () => {
  const { dateTime } = useParams<{ dateTime: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    service: '',
    technician: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Appointment booked:', { ...formData, dateTime });
    alert('Appointment booked successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Create Appointment</h1>
      <p className="text-xl mb-6">Selected Date and Time: {moment(dateTime).format('MMMM D, YYYY h:mm A')}</p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="technician" className="block text-gray-700 font-bold mb-2">Technician</label>
          <select
            id="technician"
            name="technician"
            value={formData.technician}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          >
            <option value="">Select a technician</option>
            {technicians.map(technician => (
              <option key={technician} value={technician}>{technician}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;