import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const generateAvailableSlots = () => {
  const slots = [];
  const startDate = moment().startOf('day');
  for (let i = 0; i < 14; i++) {
    const date = moment(startDate).add(i, 'days');
    if (date.day() !== 0) { // Exclude Sundays
      for (let hour = 9; hour < 19; hour++) {
        slots.push({
          start: moment(date).hour(hour).toDate(),
          end: moment(date).hour(hour).minute(30).toDate(),
          title: 'Available',
        });
      }
    }
  }
  return slots;
};

const availableSlots = generateAvailableSlots();

const Booking: React.FC = () => {
  const navigate = useNavigate();

  const handleSlotSelect = (slotInfo: { start: Date; end: Date }) => {
    const selectedDateTime = moment(slotInfo.start).format('YYYY-MM-DDTHH:mm');
    navigate(`/create-appointment/${selectedDateTime}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Book an Appointment</h1>
      <div className="mb-8">
        <Calendar
          localizer={localizer}
          events={availableSlots}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectSlot={handleSlotSelect}
          selectable
          step={30}
          timeslots={1}
        />
      </div>
    </div>
  );
};

export default Booking;