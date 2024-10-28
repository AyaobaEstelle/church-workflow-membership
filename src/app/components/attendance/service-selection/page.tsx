import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import InactiveSidebar from "@/app/components/InactiveSidebar/page";

const ServiceSelection = () => {
  return (
    <div className={styles.pageContainer}>
      {/* <div className="absolute inset-50 bg-gray-500 opacity-50 z-10"></div> */}
      <aside className="">
        <InactiveSidebar />
      </aside>
      <div className={styles.container}>
        <div className={` bg-gray-100 p-8 z-0 ${styles.contentContainer}`}>
          <h1 className={styles.title}>What type of service?</h1>
          <div className={styles.cardContainer}>
            <button className={styles.card}>
              <Image
                src="/images/plain-bible.png"
                alt="bible logo"
                width={50}
                height={50}
                className={`w-16 h-16 ${styles.imageIcon}`}
              />

              <a href="/components/attendance/regular-service-form">
                Regular Service
              </a>
            </button>

            <button className={styles.card}>
              <Image
                src="/images/church-icon.png"
                alt="church logo"
                width={50}
                height={50}
                className={`w-16 h-16 ${styles.imageIcon}`}
              />
              <a href="/components/attendance/special-service-form">
                Special Service
              </a>
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}></div>
      </div>
    </div>
  );
};

export default ServiceSelection;
