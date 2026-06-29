import { Button, Column, Flex, Heading, Text } from "@/once-ui/components";

const cvFiles = [
  {
    label: "Download CV Chile",
    description: "Formato orientado a oportunidades en Chile y Latinoamérica.",
    href: "/cv/remigio-andres-andrade-vargas-cv-chile.pdf",
  },
  {
    label: "Download Canadian Resume",
    description: "Resume en formato canadiense para procesos internacionales.",
    href: "/cv/remigio-andres-andrade-vargas-canadian-resume.pdf",
  },
];

interface DownloadCVProps {
  compact?: boolean;
}

export function DownloadCV({ compact = false }: DownloadCVProps) {
  return (
    <Column
      fillWidth
      gap={compact ? "12" : "16"}
      padding={compact ? "0" : "24"}
      radius="s"
      border={compact ? undefined : "neutral-alpha-medium"}
      background={compact ? undefined : "surface"}
    >
      {!compact && (
        <Column gap="4">
          <Heading as="h2" variant="heading-strong-xl">
            CV y resume
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Archivos listos para descargar según el tipo de oportunidad.
          </Text>
        </Column>
      )}

      <Flex gap="12" wrap>
        {cvFiles.map((file) => (
          <Button
            key={file.href}
            href={file.href}
            download
            variant={file.label.includes("Canadian") ? "secondary" : "primary"}
            size="m"
            prefixIcon="download"
          >
            {file.label}
          </Button>
        ))}
      </Flex>

      {!compact && (
        <Column gap="4">
          {cvFiles.map((file) => (
            <Text key={file.href} variant="body-default-s" onBackground="neutral-weak">
              {file.label}: {file.description}
            </Text>
          ))}
        </Column>
      )}
    </Column>
  );
}
