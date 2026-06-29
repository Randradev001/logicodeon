"use client";

import { Project, statusLabels } from "@/data/projects";
import { Button, Column, Flex, Heading, Tag, Text } from "@/once-ui/components";
import { TechBadge } from "@/components/TechBadge";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  priority?: boolean;
}

const statusTone: Record<Project["status"], "success" | "warning" | "info"> = {
  production: "success",
  "in-development": "warning",
  concept: "info",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  const visibleTechnologies = compact
    ? project.technologies.slice(0, 4)
    : project.technologies.slice(0, 6);

  return (
    <Column
      as="article"
      fillWidth
      gap="16"
      padding="24"
      radius="s"
      border="neutral-alpha-medium"
      background="surface"
      shadow="s"
      style={{ height: "100%" }}
    >
      <Flex fillWidth horizontal="space-between" vertical="start" gap="12" wrap>
        <Column gap="4" flex={1}>
          <Text variant="label-default-s" onBackground="brand-weak">
            {project.company} · {project.country}
          </Text>
          <Heading as="h3" variant={compact ? "heading-strong-l" : "heading-strong-xl"}>
            {project.title}
          </Heading>
        </Column>
        <Tag size="s" variant={statusTone[project.status]}>
          {statusLabels[project.status]}
        </Tag>
      </Flex>

      <Flex gap="8" wrap>
        {project.industry.map((industry) => (
          <Tag key={industry} size="s" variant="brand">
            {industry}
          </Tag>
        ))}
      </Flex>

      <Text variant="body-default-m" onBackground="neutral-weak">
        {project.summary}
      </Text>

      {!compact && (
        <Column gap="8">
          <Text variant="label-strong-s">Impacto</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {project.impact}
          </Text>
        </Column>
      )}

      <Flex gap="8" wrap>
        {visibleTechnologies.map((technology) => (
          <TechBadge key={technology} label={technology} />
        ))}
        {project.technologies.length > visibleTechnologies.length && (
          <Tag size="s">+{project.technologies.length - visibleTechnologies.length}</Tag>
        )}
      </Flex>

      <Flex paddingTop="8" style={{ marginTop: "auto" }}>
        <Button href={`/projects/${project.id}`} variant="secondary" size="s" suffixIcon="chevronRight">
          Ver caso
        </Button>
      </Flex>
    </Column>
  );
};
