import Calendar from "react-calendar";

const CalendarView = ({ events }: { events: any[] }) => {
  const handleDateClick = (date: Date) => {};

  return <Calendar onClickDay={handleDateClick} />;
};

export default CalendarView;
