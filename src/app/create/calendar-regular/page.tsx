"use client";
import styles from "./styles.module.css";
import Sidebar from "@/components/Sidebar/page";
import RegularCalendarView from "@/components/regularCalendar/page";

const CalendarPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <RegularCalendarView />
    </div>
  );
};

export default CalendarPage;
