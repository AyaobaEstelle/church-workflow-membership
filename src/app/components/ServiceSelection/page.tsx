"use client";
import Image from "next/image";
import { useState } from "react";

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSelect = (serviceType: string) => {
    setSelectedService(serviceType);
  };

  return (
    <div>
      <h1>
        {selectedService ? `${selectedService} Event` : "Select Service Type?"}
      </h1>
      <div className="icon-container">
        <div onClick={() => handleSelect("Regular Service")}>
          <Image
            src="/images/regular-service.png"
            alt="church logo"
            width={50}
            height={50}
            className="w-16 h-16"
          />
          <a href="/components/ServiceForm">Regular Service</a>
        </div>
        <div onClick={() => handleSelect("Special Service")}>
          <Image
            src="/images/special-service.png"
            alt="church logo"
            width={50}
            height={50}
            className="w-16 h-16"
          />
          <a href="/components/ServiceForm">special Service</a>
        </div>
      </div>

      {/* {selectedService && <EventForm serviceType={selectedService} />} */}
    </div>
  );
};

export default ServiceSelection;
