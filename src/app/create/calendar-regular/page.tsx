"use client";
import styles from "./styles.module.css";
import Sidebar from "@/app/components/Sidebar/page";
import RegularCalendarView from "@/app/components/regularCalendar/page";

const CalendarPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <RegularCalendarView />
    </div>
  );
};

export default CalendarPage;
