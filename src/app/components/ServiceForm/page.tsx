"use client";
import { useState } from "react";

interface EventFormProps {
  serviceType: string;
}

const EventForm = ({ serviceType }: EventFormProps) => {
  const [formValues, setFormValues] = useState({
    title: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    locationType: "offline",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form values and redirect to calendar page
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{serviceType} Event Form</h2>

      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formValues.title}
        onChange={handleInputChange}
        required
      />

      <label>Service Type</label>
      <select name="serviceType" value={serviceType} disabled>
        <option value="regular">Regular Service</option>
        <option value="special">Special Service</option>
      </select>

      <div className="date-time-container">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formValues.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formValues.endDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="date-time-container">
        <div>
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formValues.startTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>End Time</label>
          <input
            type="time"
            name="endTime"
            value={formValues.endTime}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <label>Location</label>
      <select
        name="locationType"
        value={formValues.locationType}
        onChange={handleInputChange}
      >
        <option value="offline">Offline</option>
        <option value="online">Online</option>
      </select>

      {formValues.locationType === "offline" && (
        <>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
            required
          />
        </>
      )}

      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
