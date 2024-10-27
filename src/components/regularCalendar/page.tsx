"use client";

import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./styles.module.css";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import RegularAttendanceForm from "../attendance/regular-attendance-form/page";
import FilterModal from "../FilterModal";
import { get } from "http";

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
              right: "addButton filterButton",
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
              filterButton: {
                text: "Filter",
                // icon: "funnel-fill",
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
