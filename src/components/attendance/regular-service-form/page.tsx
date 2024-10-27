"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import InactiveSidebar from "@/components/InactiveSidebar/page";

const RegularServiceForm = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      <aside className="">
        <InactiveSidebar />
      </aside>
      <div className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>Regular Service</h1>
            <p className={styles.closeIcon}>X</p>
          </header>

          <hr className={styles.divider} />

          <form className={styles.form}>
            <div className={styles.formContent}>
              <label className={styles.label} htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                className={styles.inputField}
                placeholder="Sunday Service"
              />
            </div>

            <div className={styles.formContent}>
              <label className={styles.label} htmlFor="serviceType">
                Service type
              </label>
              <select id="serviceType" className={styles.inputField}>
                <option value="regular">Sunday Service</option>
                <option value="special">Regular Service</option>
              </select>
            </div>
            <div className={styles.halfForm}>
              <div className={styles.half}>
                <div className={styles.formContent}>
                  <label className={styles.label} htmlFor="date">
                    Date
                  </label>
                  <input type="date" id="date" className={styles.halfInput} />
                </div>
              </div>
              <div className={styles.half}>
                <div className={styles.formContent}>
                  <label className={styles.label} htmlFor="time">
                    Time
                  </label>
                  <input type="time" id="time" className={styles.halfInput} />
                </div>
              </div>
            </div>

            <div className={styles.formContent}>
              <label className={styles.label}>Location</label>
              <div className={styles.radio}>
                <input
                  type="radio"
                  value="online"
                  checked={location === "online"}
                  onChange={handleLocationChange}
                  className={styles.radioButton}
                />
                online
                <input
                  type="radio"
                  value="offline"
                  checked={location === "offline"}
                  onChange={handleLocationChange}
                  className={styles.radioButton}
                />
                offline
              </div>
            </div>

            <div className={styles.formContent}>
              <label className={styles.label} htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                className={styles.inputFieldAdd}
                placeholder="123 Main Street, Suite 456, SpringFiled, IL 62704, USA."
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <a href="/create/calendar-regular">Create Event</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegularServiceForm;
