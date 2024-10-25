"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";
const InactiveSidebar = () => {
  const [headerText, setHeaderText] = useState("Attendance");

  const handleSidebarClick = (text: string) => {
    setHeaderText(text);
  };
  return (
    <div className={styles.background}>
      <div className="w-64 h-screen bg-gray-300 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="p-4">
            <Image
              src="/images/church-logo.png"
              alt="church logo"
              width={160}
              height={10}
              className="h-auto"
            />
          </div>
          <nav className="p-4">
            <ul>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/notification.png"
                  alt="church logo"
                  width={24}
                  height={24}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Notifications")}
                  >
                    Notifications
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/setting.png"
                  alt="church logo"
                  width={24}
                  height={24}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Settings")}
                  >
                    Settings
                  </a>
                </span>
              </li>
              <hr className="space-x-4 mb-7 mt-7"></hr>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/dashboard.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Dashboard")}
                  >
                    Dashboard
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/branch.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Branch")}
                  >
                    Branch
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/offerings.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Offerings")}
                  >
                    Offerings
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/membership.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Membership")}
                  >
                    Membership
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/attendance.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Attendance")}
                  >
                    Attendance
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4 cursor-not-allowed">
                <Image
                  src="/images/salary.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Staff salary")}
                  >
                    Staff salary
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/report.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Report")}
                  >
                    Report
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/request.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Request")}
                  >
                    Request
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/event.png"
                  alt="church logo"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span>
                  <a
                    href="#"
                    className="cursor-not-allowed"
                    onClick={() => handleSidebarClick("Event")}
                  >
                    Event
                  </a>
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 sidebar-footer">
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src="/images/person.png"
              alt="church logo"
              width={24}
              height={24}
              className="h-auto"
            />
            <p className="cursor-not-allowed">Abolarin Esther</p>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src="/images/logout.png"
              alt="church logo"
              width={24}
              height={24}
              className="h-auto"
            />
            <button className="cursor-not-allowed">Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InactiveSidebar;