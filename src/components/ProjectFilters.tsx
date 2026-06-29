"use client";

import { useMemo, useState } from "react";

import {
  Project,
  ProjectCompany,
  ProjectIndustry,
  projectCompanies,
  projectIndustries,
  projectTechnologyFilters,
} from "@/data/projects";
import { Button, Column, Flex, Grid, Select, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components/ProjectCard";

const ALL_INDUSTRIES = "Todas las industrias";
const ALL_TECHNOLOGIES = "Todas las tecnologías";
const ALL_COMPANIES = "Todas las empresas";

interface ProjectFiltersProps {
  projects: Project[];
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [industry, setIndustry] = useState(ALL_INDUSTRIES);
  const [technology, setTechnology] = useState(ALL_TECHNOLOGIES);
  const [company, setCompany] = useState(ALL_COMPANIES);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesIndustry =
        industry === ALL_INDUSTRIES || project.industry.includes(industry as ProjectIndustry);
      const matchesTechnology =
        technology === ALL_TECHNOLOGIES || project.technologies.includes(technology);
      const matchesCompany =
        company === ALL_COMPANIES || project.company === (company as ProjectCompany);

      return matchesIndustry && matchesTechnology && matchesCompany;
    });
  }, [company, industry, projects, technology]);

  const hasActiveFilters =
    industry !== ALL_INDUSTRIES || technology !== ALL_TECHNOLOGIES || company !== ALL_COMPANIES;

  const resetFilters = () => {
    setIndustry(ALL_INDUSTRIES);
    setTechnology(ALL_TECHNOLOGIES);
    setCompany(ALL_COMPANIES);
  };

  return (
    <Column fillWidth gap="24">
      <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="16" fillWidth>
        <Select
          id="industry-filter"
          label="Industria"
          value={industry}
          options={[
            { label: ALL_INDUSTRIES, value: ALL_INDUSTRIES },
            ...projectIndustries.map((item) => ({ label: item, value: item })),
          ]}
          onSelect={setIndustry}
        />
        <Select
          id="technology-filter"
          label="Tecnología"
          value={technology}
          options={[
            { label: ALL_TECHNOLOGIES, value: ALL_TECHNOLOGIES },
            ...projectTechnologyFilters.map((item) => ({ label: item, value: item })),
          ]}
          onSelect={setTechnology}
        />
        <Select
          id="company-filter"
          label="Empresa"
          value={company}
          options={[
            { label: ALL_COMPANIES, value: ALL_COMPANIES },
            ...projectCompanies.map((item) => ({ label: item, value: item })),
          ]}
          onSelect={setCompany}
        />
      </Grid>

      <Flex fillWidth horizontal="space-between" vertical="center" gap="16" wrap>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {filteredProjects.length} proyecto{filteredProjects.length === 1 ? "" : "s"} encontrado
          {filteredProjects.length === 1 ? "" : "s"}
        </Text>
        {hasActiveFilters && (
          <Button variant="tertiary" size="s" onClick={resetFilters}>
            Limpiar filtros
          </Button>
        )}
      </Flex>

      {filteredProjects.length > 0 ? (
        <Grid columns="2" mobileColumns="1" gap="16" fillWidth>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      ) : (
        <Column
          fillWidth
          gap="8"
          padding="32"
          radius="s"
          border="neutral-alpha-medium"
          background="surface"
          horizontal="center"
        >
          <Text variant="heading-strong-m">Sin resultados para esta combinación.</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Prueba quitando un filtro o seleccionando otra industria, tecnología o empresa.
          </Text>
        </Column>
      )}
    </Column>
  );
}
