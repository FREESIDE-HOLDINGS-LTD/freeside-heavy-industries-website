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
    'Revision',
    2024,
    'Saarbrücken, Germany',
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
  new Project(
    'Chaos Communication Camp',
    2023,
    'Mildenberg, Germany',
    ProjectStatus.Completed,
  ),
  new Project(
    'Revision',
    2023,
    'Saarbrücken, Germany',
    ProjectStatus.Completed,
  ),
  new Project(
    'Goulash Programming Night',
    2023,
    'Karlsruhe, Germany',
    ProjectStatus.Completed,
  ),
  new Project(
    'FOSDEM',
    2023,
    'Brussels, Belgium',
    ProjectStatus.Completed,
  ),

  new Project(
    'Hacking In Parallel',
    2022,
    'Berlin, Germany',
    ProjectStatus.Completed,
  ),
  new Project(
    'May Contain Hackers',
    2022,
    'Zeewolde, Netherlands',
    ProjectStatus.Completed,
  ),
  new Project(
    'Electromagnetic Field',
    2022,
    'Eastnor, United Kingdom',
    ProjectStatus.Completed,
  ),
  new Project(
    'Goulash Programming Night',
    2022,
    'Karlsruhe, Germany',
    ProjectStatus.Completed,
  ),
  new Project(
    'FOSDEM',
    2022,
    'Brussels, Belgium',
    ProjectStatus.Completed,
  ),

  new Project(
    'Bornhack',
    2021,
    'Funen, Denmark',
    ProjectStatus.Completed,
  ),

  new Project(
    'FOSDEM',
    2020,
    'Brussels, Belgium',
    ProjectStatus.Completed,
  ),

  new Project(
    'Chaos Communication Congress',
    2019,
    'Leipzig, Germany',
    ProjectStatus.Completed,
  ),
  new Project(
    'Chaos Communication Camp',
    2019,
    'Mildenberg, Germany',
    ProjectStatus.Completed,
  ),

  new Project(
    'Chaos Communication Congress',
    2018,
    'Leipzig, Germany',
    ProjectStatus.Completed,
  ),

  new Project(
    'Chaos Communication Congress',
    2017,
    'Leipzig, Germany',
    ProjectStatus.Completed,
  ),

  new Project(
    'Chaos Communication Congress',
    2016,
    'Hamburg, Germany',
    ProjectStatus.Completed,
  ),
];
