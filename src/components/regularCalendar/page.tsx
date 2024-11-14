"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  ButtonHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import RegularAttendanceForm from "../attendance/regular-attendance-form/page";
import FilterModal from "../FilterModal";
import styles from "./styles.module.css";

// const RegularCalendarView = () => ;
const RegularCalendarView = forwardRef((props, ref) => {
  const calendarRef = useRef<FullCalendar>(null);
  const [showForm, setShowForm] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [shouldOpenMoreSettingsModal, setShouldOpenMoreSettingsModal] =
    useState(false);
  const [viewBy, setViewBy] = useState("month");

  useImperativeHandle(ref, () => ({
    getApi: () => calendarRef.current && calendarRef.current.getApi(),
  }));

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  const handleViewChange = (view: string) => {
    setViewBy(view);
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  useLayoutEffect(() => {
    const filterButton = document.querySelector(
      ".fc-filterButton-button"
    ) as HTMLElement;
    const searchButton = document.querySelector(
      ".fc-searchButton-button"
    ) as HTMLElement;
    filterButton?.classList.add("!bg-red-400");
    filterButton.innerHTML = `<svg class="! w-4 !h-4" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.10209 1.86664H13.3288C14.1821 1.86664 14.8754 2.55997 14.8754 3.4133V5.11997C14.8754 5.74664 14.4888 6.51997 14.1021 6.90664L10.7688 9.8533C10.3021 10.24 9.99542 11.0133 9.99542 11.64V14.9733C9.99542 15.44 9.68875 16.0533 9.30209 16.2933L8.22209 16.9733C7.20875 17.6 5.82209 16.8933 5.82209 15.6533V11.5466C5.82209 11 5.51542 10.3066 5.19542 9.91997L2.24875 6.8133C1.86209 6.43997 1.55542 5.7333 1.55542 5.26664V3.4933C1.55542 2.55997 2.24875 1.86664 3.10209 1.86664Z" stroke="#6B6B6B" stroke-width="1.77778" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
    searchButton.innerHTML = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2222 20C16.1927 20 20.2222 15.9706 20.2222 11C20.2222 6.02944 16.1927 2 11.2222 2C6.25161 2 2.22217 6.02944 2.22217 11C2.22217 15.9706 6.25161 20 11.2222 20Z" stroke="#6B6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.1521 20.6898C19.6821 22.2898 20.8921 22.4498 21.8221 21.0498C22.6721 19.7698 22.1121 18.7198 20.5721 18.7198C19.4321 18.7098 18.7921 19.5998 19.1521 20.6898Z" stroke="#6B6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  }, []);

  return (
    <div className={styles.pageContainer} data-testid="calendar">
      <div className={styles.mainContent}>
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              multiMonthPlugin,
              interactionPlugin,
              timeGridPlugin,
            ]}
            headerToolbar={{
              left: "today prev,next,title",
              // center: "title",
              right: "searchButton filterButton addButton",
            }}
            ref={calendarRef}
            titleFormat={{ year: "numeric", month: "long" }}
            themeSystem="bootstrap5"
            initialView={"dayGridMonth"}
            nowIndicator={true}
            editable={true}
            selectable={true}
            selectMirror={true}
            initialEvents={[
              {
                title: "sunday service",
                start: new Date(2024, 9, 10, 10, 0),
                resourceId: "a",
                isAllDay: false,
              },
              {
                title: "regular service",
                start: new Date(2024, 9, 1, 12, 30),
                resourceId: "b",
                isAllDay: false,
              },
              {
                title: "anointing service",
                start: new Date(2024, 9, 13, 2, 45),
                resourceId: "c",
                isAllDay: false,
              },
              {
                title: "special service",
                start: new Date(),
                isAllDay: false,
                resourceId: "d",
              },
            ]}
            customButtons={{
              addButton: {
                text: "Add",

                click: toggleFilter,
              },
              searchButton: {
                text: "",
                click: toggleFilter,
              },
              filterButton: {
                text: "",
                click: () =>
                  setShouldOpenMoreSettingsModal(!shouldOpenMoreSettingsModal),
              },
            }}
          />
        </div>
        {filterOpen && (
          <div className={styles.filterModal}>
            <RegularAttendanceForm />
          </div>
        )}

        {shouldOpenMoreSettingsModal && (
          <section
            className={`${styles.filterModal} w-[50%] mx-auto`}
            data-testid="filter-modal-container"
          >
            <FilterModal calendarRef={calendarRef} />
          </section>
        )}
      </div>
    </div>
  );
});

RegularCalendarView.displayName = "RegularCalendarView";
export default RegularCalendarView;
