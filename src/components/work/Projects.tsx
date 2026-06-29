import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Column, Grid, Heading, Text } from "@/once-ui/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const displayedProjects = range
    ? projects.slice(range[0] - 1, range[1] ?? projects.length)
    : projects;

  return (
    <Column fillWidth gap="20" marginBottom="40" paddingX="l">
      <Column gap="8">
        <Heading as="h2" variant="display-strong-xs">
          Casos destacados
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Una muestra de sistemas empresariales construidos para operación real.
        </Text>
      </Column>
      <Grid columns="2" mobileColumns="1" gap="16" fillWidth>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Column>
  );
}
