import FullCalendar from "@fullcalendar/react";
import { RefObject } from "react";

const FilterModal = ({
  calendarRef,
}: {
  calendarRef: RefObject<FullCalendar>;
}) => {


  return (
    <div className="px-32 py-10 z-[9999] bg-gray-100  w-full" >
      <p>Filter By</p>
      <div>
        <button
          onClick={() =>
            calendarRef?.current?.getApi().changeView("dayGridWeek")
          }
          className="active:scale-95 transition-all px-4 py-2 border border-black mx-2 rounded"
        >
          Week
        </button>
        <button
          onClick={() =>
            calendarRef?.current?.getApi().changeView("dayGridMonth")
          }
          className="active:scale-95 transition-all px-4 py-2 border border-black mx-2 rounded"
        >
          Months
        </button>
        <button
        onClick={() =>
          calendarRef?.current?.getApi().changeView("multiMonthYear")
        }
        className="active:scale-95 transition-all px-4 py-2 border border-black mx-2 rounded">
          Year
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
