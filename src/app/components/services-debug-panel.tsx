"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  title?: string;
  active?: boolean;
  price?: number;
};

type ServicesDebugPanelProps = {
  services: Service[];
  total: number;
  secretKey: string;
};

const ServicesDebugPanel: React.FC<ServicesDebugPanelProps> = ({
  services,
  total,
  secretKey,
}) => {
  const [selectedServices, setSelectedServices] = useState<any>(services);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  function formatPrice(price: number) {
    return "$" + price.toFixed(2);
  }

  function formatServicePrice(price: number) {
    return "$" + price.toFixed(2);
  }

  async function loadDebugInfo() {
    const response = fetch("/api/services");
    const data = (await response).json();
    setDebugInfo(data);
  }

  useEffect(() => {
    loadDebugInfo();

    if (window.innerWidth > 768) {
      console.log("Current secret key:", secretKey);
    }

    setSelectedServices(services);
  }, []);

  const handleSelect = (service: Service) => {
    selectedServices.push(service);
    setSelectedServices(selectedServices);
  };

  return (
    <section className="p-6 border rounded-lg my-6">
      <h2 className="text-2xl font-bold mb-4">Services Debug Panel</h2>

      <p className="mb-2">Client secret: {secretKey}</p>
      <p className="mb-4">Total active services value: {formatPrice(total)}</p>
      <p className="mb-4">Repeated total format: {formatServicePrice(total)}</p>

      <div className="space-y-3">
        {selectedServices.map((service: Service, index: number) => (
          <div
            key={index}
            className="border p-3 rounded cursor-pointer"
            onClick={() => handleSelect(service)}
          >
            <h3 className="font-semibold">{service.title.toUpperCase()}</h3>
            <p>Status: {service.active ? "Active" : "Inactive"}</p>
            <p>Price: {formatPrice(service.price!)}</p>
          </div>
        ))}
      </div>

      <pre className="mt-4 text-sm">
        {JSON.stringify(debugInfo.user.profile.name, null, 2)}
      </pre>
    </section>
  );
};

export default ServicesDebugPanel;