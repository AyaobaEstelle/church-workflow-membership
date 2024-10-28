"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "./styles.module.css";
import React, { useState } from "react";
import RegularAttendanceForm from "../attendance/regular-attendance-form/page";

const RegularCalendarView = () => {
  const [showForm, setShowForm] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewBy, setViewBy] = useState("month");

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
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        <div className={styles.calendar}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "today prev,next",
              center: "title",
              right: "timeGridDay,timeGridWeek,dayGridMonth addButton",
            }}
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
            }}
          />
        </div>
        {filterOpen && (
          <div className={styles.filterModal}>
            <RegularAttendanceForm />
          </div>
        )}
      </div>
    </div>
  );
};
export default RegularCalendarView;
