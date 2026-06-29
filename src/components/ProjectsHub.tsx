import { DownloadCV } from "@/components/DownloadCV";
import { ProjectFilters } from "@/components/ProjectFilters";
import { projects } from "@/data/projects";
import { Badge, Column, Heading, Text } from "@/once-ui/components";

export function ProjectsHub() {
  return (
    <Column fillWidth gap="32" paddingX="l">
      <Column maxWidth="s" gap="16" paddingY="24">
        <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" arrow={false}>
          <Text variant="label-default-s">Career Hub · Enterprise Software</Text>
        </Badge>
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          Proyectos reales para software empresarial, minería, educación e industria.
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
          Sistemas funcionales, implementados o diseñados durante experiencia profesional en Chile y
          Canadá, con foco en integración, automatización, datos y operación.
        </Text>
        <DownloadCV compact />
      </Column>

      <ProjectFilters projects={projects} />
    </Column>
  );
}
