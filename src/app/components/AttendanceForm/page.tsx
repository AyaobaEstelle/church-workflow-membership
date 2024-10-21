"use client";
import { useState } from "react";

const AttendanceForm = () => {
  const [attendance, setAttendance] = useState({
    men: 0,
    women: 0,
    youth: 0,
    teenagers: 0,
    children: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttendance({ ...attendance, [e.target.name]: parseInt(e.target.value) });
  };

  return (
    <form>
      <input
        type="number"
        name="men"
        placeholder="Men"
        onChange={handleChange}
      />
      <input
        type="number"
        name="women"
        placeholder="Women"
        onChange={handleChange}
      />
      <input
        type="number"
        name="youth"
        placeholder="Youth"
        onChange={handleChange}
      />
      <input
        type="number"
        name="teenagers"
        placeholder="Teenagers"
        onChange={handleChange}
      />
      <input
        type="number"
        name="children"
        placeholder="Children"
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4">
        Update
      </button>
    </form>
  );
};

export default AttendanceForm;
