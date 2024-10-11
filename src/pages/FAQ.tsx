import React from 'react';

const faqs = [
  {
    question: 'How long does a manicure last?',
    answer: 'A regular manicure typically lasts 5-7 days, while a gel manicure can last up to 2-3 weeks with proper care.'
  },
  {
    question: 'Is it safe to get a pedicure if I have diabetes?',
    answer: 'If you have diabetes, it\'s important to consult with your doctor before getting a pedicure. We offer special diabetic-friendly pedicures, but always prioritize your health and safety.'
  },
  {
    question: 'How often should I get my nails done?',
    answer: 'For maintaining healthy nails, we recommend getting a manicure every 2-3 weeks and a pedicure every 4-6 weeks.'
  },
  {
    question: 'Do you offer vegan or cruelty-free nail polish options?',
    answer: 'Yes, we offer a range of vegan and cruelty-free nail polish options. Please ask your technician about our selection.'
  },
  {
    question: 'What\'s the difference between gel and acrylic nails?',
    answer: 'Gel nails are made from a gel-like substance that\'s cured under UV light, while acrylic nails are created by mixing a liquid monomer with a powder polymer. Gel tends to look more natural and is less damaging to nails, while acrylic is more durable.'
  },
  {
    question: 'How can I make my nail polish last longer?',
    answer: 'To extend the life of your manicure, always use a base and top coat, avoid hot water for the first few hours after application, moisturize your cuticles daily, and wear gloves when doing household chores.'
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-rose-600 mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;