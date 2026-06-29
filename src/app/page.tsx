import React from "react";

import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { about, home, newsletter, person, work } from "@/app/resources/content";
import { Badge, Button, Column, Flex, Grid, Heading, RevealFx, Row, Tag, Text } from "@/once-ui/components";
import { Meta, Schema } from "@/once-ui/modules";

const keywords = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "Node.js",
  "SQL Server",
  "GeneXus",
  "Power BI",
  "Mining Software",
  "Enterprise Software",
  "Chile",
  "Canada",
];

const coreTechnologies = [
  "React",
  "Node.js",
  ".NET",
  "SQL Server",
  "GeneXus",
  "Power BI",
  "APIs REST",
  "PLC Integration",
];

const strengths = [
  {
    title: "Software empresarial",
    description: "Plataformas para operación, trazabilidad, RR.HH., logística y control industrial.",
  },
  {
    title: "Integración y automatización",
    description: "APIs REST, SQL Server, email, SMS, PDF, Power BI y conexión con procesos externos.",
  },
  {
    title: "Industrias complejas",
    description: "Minería, educación, agroindustria, manufactura, tributación y experiencia en Canadá.",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
    keywords,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth paddingY="40" gap="32">
        <Column maxWidth="s" gap="20">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingLeft="12">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx translateY="4" fillWidth horizontal="start">
            <Column gap="12">
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </Column>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="start">
            <Flex gap="8" wrap>
              {coreTechnologies.map((technology) => (
                <Tag key={technology} size="m" variant="brand">
                  {technology}
                </Tag>
              ))}
            </Flex>
          </RevealFx>

          <RevealFx delay={0.4} horizontal="start">
            <Flex gap="12" wrap>
              <Button
                href="/cv/remigio-andres-andrade-vargas-cv-chile.pdf"
                download
                prefixIcon="download"
              >
                Download CV Chile
              </Button>
              <Button
                href="/cv/remigio-andres-andrade-vargas-canadian-resume.pdf"
                download
                prefixIcon="download"
                variant="secondary"
              >
                Download Canadian Resume
              </Button>
              <Button href={work.path} variant="secondary" suffixIcon="chevronRight">
                View Projects
              </Button>
              <Button href={`mailto:${person.email}`} variant="tertiary" prefixIcon="email">
                Contact
              </Button>
            </Flex>
          </RevealFx>
        </Column>

        <Grid columns="3" mobileColumns="1" gap="16" fillWidth>
          {strengths.map((item) => (
            <Column
              key={item.title}
              gap="8"
              padding="20"
              radius="s"
              border="neutral-alpha-medium"
              background="surface"
            >
              <Heading as="h2" variant="heading-strong-l">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <RevealFx translateY="16" delay={0.5} fillWidth>
        <Projects range={[1, 4]} />
      </RevealFx>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
