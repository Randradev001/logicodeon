import { Column, Card, Text, Flex, Heading } from "@/once-ui/components";

const keyProjects = [
  {
    title: "Codelco Chile – Corrective Actions System",
    description:
      "Captures mining incidents and intelligently manages corrective actions, sending weekly reports and ensuring continuous improvement.",
  },
  {
    title: "Drilling Bar Control",
    description:
      "Manages precision drilling bars used in explosives; ensures exhaustive traceability and safety.",
  },
  {
    title: "High Voltage Infrastructure Management",
    description:
      "Controls maintenance and safety protocols for high-voltage panels in industrial facilities.",
  },
  {
    title: "Effective Time Management (Mining)",
    description:
      "Tracks productive hours per division in mining, improving transparency and efficiency.",
  },
  {
    title: "Automation & Industrial Control",
    description:
      "Export system that supervises a full production line in an industrial setting.",
  },
  {
    title: "Educational Performance Platform",
    description:
      "Evaluates over 60,000 students; includes dashboards and Power BI integration.",
  },
  {
    title: "Truck Entry & Loading Time Control",
    description:
      "Tracks truck activity and loading dock scheduling in industrial plants.",
  },
  {
    title: "Web Design & SEO for SMEs",
    description:
      "Complete websites and brand launches focused on digital presence and growth.",
  },
];

export default function KeyProjects() {
  return (
<Column align="center" gap="l" marginTop="xl" maxWidth="l">
  <Heading variant="display-strong-s">
    Key Projects
  </Heading>
  <Column gap="m">
    {keyProjects.map((project, index) => (
      <Card key={index} padding="l" shadow="m" >
        <Column gap="s">
          <Text >{project.title}</Text>
          <Text >{project.description}</Text>
        </Column>
      </Card>
    ))}
  </Column>
</Column>


  );
}
