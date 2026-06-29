import { Project, statusLabels } from "@/data/projects";
import { Button, Column, Flex, Grid, Heading, Tag, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components/ProjectCard";
import { TechBadge } from "@/components/TechBadge";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

const statusTone: Record<Project["status"], "success" | "warning" | "info"> = {
  production: "success",
  "in-development": "warning",
  concept: "info",
};

const detailFields = [
  { label: "Empresa", key: "company" },
  { label: "Industria", key: "industry" },
  { label: "País", key: "country" },
  { label: "Rol", key: "role" },
] as const;

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return (
    <Column as="article" maxWidth="m" fillWidth gap="32">
      <Column maxWidth="s" gap="16">
        <Button href="/projects" variant="tertiary" size="s" prefixIcon="chevronLeft">
          Proyectos
        </Button>
        <Flex gap="8" wrap>
          <Tag size="s" variant={statusTone[project.status]}>
            {statusLabels[project.status]}
          </Tag>
          {project.industry.map((industry) => (
            <Tag key={industry} size="s" variant="brand">
              {industry}
            </Tag>
          ))}
        </Flex>
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          {project.title}
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
          {project.summary}
        </Text>
      </Column>

      <Grid columns="4" tabletColumns="2" mobileColumns="1" gap="12" fillWidth>
        {detailFields.map((field) => {
          const value =
            field.key === "industry" ? project.industry.join(", ") : String(project[field.key]);

          return (
            <Column
              key={field.key}
              gap="4"
              padding="16"
              radius="s"
              border="neutral-alpha-medium"
              background="surface"
            >
              <Text variant="label-default-s" onBackground="neutral-weak">
                {field.label}
              </Text>
              <Text variant="body-strong-m">{value}</Text>
            </Column>
          );
        })}
      </Grid>

      <Grid columns="2" mobileColumns="1" gap="24" fillWidth>
        <Column gap="12">
          <Heading as="h2" variant="heading-strong-xl">
            Problema
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {project.problem}
          </Text>
        </Column>
        <Column gap="12">
          <Heading as="h2" variant="heading-strong-xl">
            Solución
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {project.solution}
          </Text>
        </Column>
      </Grid>

      <Column gap="12">
        <Heading as="h2" variant="heading-strong-xl">
          Funcionalidades
        </Heading>
        <Grid as="ul" columns="2" mobileColumns="1" gap="12" padding="0" margin="0">
          {project.features.map((feature) => (
            <Flex
              as="li"
              key={feature}
              gap="8"
              padding="16"
              radius="s"
              border="neutral-alpha-medium"
              background="surface"
            >
              <Text variant="body-default-m">{feature}</Text>
            </Flex>
          ))}
        </Grid>
      </Column>

      <Column gap="12">
        <Heading as="h2" variant="heading-strong-xl">
          Tecnologías
        </Heading>
        <Flex gap="8" wrap>
          {project.technologies.map((technology) => (
            <TechBadge key={technology} label={technology} tone="brand" />
          ))}
        </Flex>
      </Column>

      <Column gap="12" padding="24" radius="s" border="brand-alpha-medium" background="surface">
        <Text variant="label-default-s" onBackground="brand-weak">
          Impacto
        </Text>
        <Text variant="heading-default-m" wrap="balance">
          {project.impact}
        </Text>
      </Column>

      {relatedProjects.length > 0 && (
        <Column gap="16">
          <Heading as="h2" variant="heading-strong-xl">
            Proyectos relacionados
          </Heading>
          <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="16" fillWidth>
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.id} project={relatedProject} compact />
            ))}
          </Grid>
        </Column>
      )}
    </Column>
  );
}
