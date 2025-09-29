import React from "react";

const ConstList = () => {
  const services = [
    {
      id: "01",
      title: "Residential Construction",
      desc: "Creating dream homes with craftsmanship and attention to detail. Our residential construction services include design consultation, project management, and flawless execution tailored to your unique lifestyle."
    },
    {
      id: "02",
      title: "Architectural Design",
      desc: "Innovative architectural construction that blends aesthetics with functionality. We collaborate closely with architects to realize cutting-edge designs while ensuring structural integrity."
    },
    {
      id: "03",
      title: "Commercial Construction",
      desc: "Building business spaces that promote productivity and professionalism. Our experience spans offices, retail outlets, and industrial facilities, incorporating modern construction methods and durable materials."
    },
    {
      id: "04",
      title: "ACP Elevation ",
      desc: "Enhancing your space with Aluminum Composite Panel (ACP) solutions that offer durability, aesthetics, and weather resistance."
    }
  ];

  return (
    <section className="const-list">
      <div className="list-container">
        {services.map((service, index) => (
          <div className="list-card" key={index} data-aos="fade-up">
            <span className="list-id">{service.id}</span>
            <div className="list-line"></div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
            <a href="#1" className="list-arrow">→</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConstList;
