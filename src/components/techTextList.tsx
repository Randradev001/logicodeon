// components/TechTextList.tsx

export default function TechTextList() {
    const techs = [
      "React",
      "Node.js",
      "WordPress",
      "MySQL",
      "SQL Server",
      ".NET",
      "C#",
      "GeneXus",
    ];
  
    return (
      <div style={{ textAlign: "center", padding: "1rem", fontSize: "1.1rem" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          Cutting-edge Development Technologies
        </h3>
        <p>{techs.join("  •  ")}</p>
      </div>
    );
  }
  