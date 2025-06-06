// components/TechTextList.tsx

export default function PlacesTextWork() {
  const techs = [
    {
      name: "Agrosuper S.A.",
      description:
        "One of Chile's largest food production companies, specializing in poultry, pork, and salmon. I participated in automation and logistics improvement projects.",
    },
    {
      name: "Codelco – El Teniente Division",
      description:
        "The world’s largest underground copper mine, owned by the Chilean government. I contributed to digital solutions for equipment tracking and process optimization.",
    },
    {
      name: "Packing La Viña S.A.",
      description:
        "A major fruit packaging and export company in the O'Higgins Region. I helped develop systems for quality control and production flow tracking.",
    },
    {
      name: "Viña Pérez Cruz",
      description:
        "A premium family-owned winery in the Maipo Valley, known for its Cabernet Sauvignon. I was involved in digital marketing support and logistics coordination.",
    },
    {
      name: "APInformática Ltda.",
      description:
        "A Chilean IT company offering software and hardware solutions for SMEs. I worked as a software engineer developing custom ERP and inventory systems.",
    },
    {
      name: "CORMUN Rancagua",
      description:
        "Municipal Corporation of Rancagua responsible for managing public education and health services. I supported systems integration and user training processes.",
    },
  ];
  
  
    return (
      <div style={{ textAlign: "center", padding: "1rem", fontSize: "1.1rem" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
        Industry Project Experience
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {techs.map((tech, index) => (
          <div
            key={index}
            style={{
              maxWidth: "700px",
              padding: "0.5rem",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
            }}
          >
            <strong style={{ fontSize: "1.05rem" }}>{tech.name}</strong>
            <p style={{ margin: "0.3rem 0", fontSize: "0.95rem", lineHeight: "1.5" }}>
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    );
  }
  