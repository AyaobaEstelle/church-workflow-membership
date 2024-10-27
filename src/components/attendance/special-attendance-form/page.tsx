"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const SpecialAttendanceForm = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  return (
    <div className={styles.pageContainer}>
      {filterOpen && (
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>Special service attendance</h1>
            <div className={styles.headerIcons}>
              <Image
                src="/images/trash.png"
                alt="church logo"
                width={16}
                height={16}
                className={`h-auto ${styles.formIcon}`}
              />
              <FaTimes onClick={toggleFilter} />
            </div>
          </header>

          <hr className={styles.divider} />

          <div className={styles.flexRow}>
            <div className={styles.form}>
              <Image
                src="/images/calendar.png"
                alt="church logo"
                width={24}
                height={24}
                className={`h-auto ${styles.formIcon}`}
              />
              <label>Sept, 12, 2024</label>
            </div>

            <div className={styles.form}>
              <Image
                src="/images/location.png"
                alt="church logo"
                width={24}
                height={24}
                className={`h-auto ${styles.formIcon}`}
              />
              <label> Offline</label>
            </div>
          </div>

          <div className={styles.flexRow}>
            <div className={styles.form}>
              <Image
                src="/images/clock.png"
                alt="church logo"
                width={24}
                height={24}
                className={`h-auto ${styles.formIcon}`}
              />
              <label>8am-11am</label>
            </div>

            <div className={styles.form}>
              <Image
                src="/images/routing.png"
                alt="church logo"
                width={24}
                height={24}
                className={`h-auto ${styles.formIcon}`}
              />
              <label>
                123 Main Street, Suite 456, Springfield, IL 62704, USA.
              </label>
            </div>
          </div>
          <div className={styles.formTwo}>
            <header className={styles.subHeader}>
              <h2 className={styles.subTitle}>Attendance</h2>
              <Image
                src="/images/attendance.png"
                alt="church logo"
                width={24}
                height={24}
                className={`h-auto ${styles.formIcon}`}
              />
            </header>

            <div className={styles.flexRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="men">
                  Men
                </label>
                <input
                  type="number"
                  id="men"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="women">
                  Women
                </label>
                <input
                  type="number"
                  id="women"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.flexRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="youth">
                  Youth
                </label>
                <input
                  type="number"
                  id="youth"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="teenagers">
                  Teenagers
                </label>
                <input
                  type="number"
                  id="teenagers"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>
            </div>

            <div className={styles.flexRow}>
              <div className={styles.formFieldTwo}>
                <label className={styles.formLabel} htmlFor="children">
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  className={styles.inputField}
                  placeholder="0"
                />
              </div>

              <div className={styles.formCat}>
                <Image
                  src="/images/element-plus.png"
                  alt="church logo"
                  width={20}
                  height={20}
                  className={`h-auto ${styles.formIcon}`}
                />
                <label className={styles.formLabelCat}>add category</label>
              </div>
            </div>

            <button type="submit" className={styles.updateButton}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SpecialAttendanceForm;
