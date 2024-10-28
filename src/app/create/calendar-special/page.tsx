"use client";
import styles from "./styles.module.css";
import Sidebar from "@/app/components/Sidebar/page";
import SpecialCalendarView from "@/app/components/specialCalendar/page";

const CalendarPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <SpecialCalendarView />
    </div>
  );
};

export default CalendarPage;
