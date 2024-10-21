import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col justify-between">
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
              <span>Notification</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/setting.png"
                alt="church logo"
                width={24}
                height={24}
                className="h-auto"
              />
              <span>Settings</span>
            </li>
            <hr className="space-x-4 mb-4"></hr>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/dashboard.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/branch.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Branch</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/offerings.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Offering</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/membership.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Membership</span>
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
                <a href="/components/ServiceSelection"> Attendance</a>
              </span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/salary.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Staff Salary</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/report.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Report</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/request.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Request</span>
            </li>
            <li className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/event.png"
                alt="church logo"
                width={18}
                height={18}
                className="h-auto"
              />
              <span>Event</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/images/person.png"
            alt="church logo"
            width={24}
            height={24}
            className="h-auto"
          />
          <p>Abolarin Esther</p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/images/logout.png"
            alt="church logo"
            width={24}
            height={24}
            className="h-auto"
          />
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
