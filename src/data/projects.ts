export enum ProjectStatus {
  Planned,
  Completed,
}

export class Project {
  constructor(
    public name: string,
    public year: number,
    public location: string,
    public status: ProjectStatus,
  ) {
  }
}

export const projects: Project[] = [
  new Project(
    'Chaos Communication Congress',
    2024,
    'Hamburg, Germany',
    ProjectStatus.Planned,
  ),
  new Project(
    'Electromagnetic Field',
    2024,
    'Eastnor, United Kingdom',
    ProjectStatus.Completed,
  ),
  new Project(
    'FOSDEM',
    2024,
    'Brussels, Belgium',
    ProjectStatus.Completed,
  ),
  new Project(
    'Chaos Communication Congress',
    2023,
    'Hamburg, Germany',
    ProjectStatus.Completed,
  ),
];
