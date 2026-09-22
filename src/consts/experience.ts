export interface WorkExperienceItem {
  time: string;
  company: string;
  position: string;
  description: string;
}

export interface ExperienceSkillTag {
  name: string;
  hoverColor: string;
  isSpecial?: boolean;
}

export interface RichExperienceItem {
  company: string;
  position: string;
  positionBadgeVariant: 'yellow' | 'mint' | 'blue' | 'pink';
  time: string;
  description: string;
  skills: ExperienceSkillTag[];
}

export const WorkExperience: WorkExperienceItem[] = [
  {
    time: 'September 2025 - February 2026',
    company: 'LotusFlare',
    position: 'Frontend Engineer',
    description:
      'At LotusFlare, I worked on a Vue.js-based portal for managing TM Forum-aligned telecommunications entities, including Application Owners, Applications, and Channel Partners. My responsibilities included maintaining and extending existing platform functionality, as well as architecting and developing a unified page that consolidated key information for a selected entity. I collaborated closely with backend engineers to define REST API contracts and wrote unit tests to ensure the reliability and correctness of core components.'
  },
  {
    time: 'March 2022 - May 2025',
    company: 'Seven Bridges / Velsera',
    position: 'Associate Frontend Software Engineer',
    description:
      'From the beginning of my tenure at the company, I was a member of the Computation team. My responsibilities included enhancing the functionality of several Angular applications, as well as developing and maintaining existing code within the legacy stack, which utilized Backbone.js and Marionette.js. Furthermore, I actively participated in various engineering initiatives, such as the migration to a microfrontend architecture and style decoupling, which broadened my understanding of web development principles and practices.'
  },
  {
    time: 'October 2021 - December 2021',
    company: 'Seven Bridges',
    position: 'JavaScript Developer Intern',
    description:
      'During this internship, I gained initial experience with Angular development. Under the guidance of experienced mentors and in collaboration with fellow interns, our primary task was the development of an internal platform for database access requests. The project involved initial prototyping and design in Figma, followed by full-stack development using Angular.'
  },
  {
    time: 'October 2018 - October 2023',
    company: 'Računarski Fakultet / School of Computing Belgrade',
    position: 'B.Sc. Student',
    description:
      'A 4-year rigorous curriculum in Computer Science focusing on data structures, algorithms, distributed systems, and modern software architectures. Graduated with an outstanding cumulative GPA of 8.81.'
  }
];

export const richExperiences: RichExperienceItem[] = [
  {
    company: 'LotusFlare',
    position: 'Frontend Engineer',
    positionBadgeVariant: 'yellow',
    time: 'September 2025 – February 2026',
    description:
      'At LotusFlare, I worked on a Vue.js-based portal for managing TM Forum-aligned telecommunications entities, including Application Owners, Applications, and Channel Partners. My responsibilities included maintaining and extending existing platform functionality, as well as architecting and developing a unified page that consolidated key information for a selected entity. I collaborated closely with backend engineers to define REST API contracts and wrote unit tests to ensure the reliability and correctness of core components.',
    skills: [
      { name: 'Vue.js', hoverColor: 'hover:bg-nb-yellow' },
      { name: 'TM Forum Standards', hoverColor: 'hover:bg-nb-mint' },
      { name: 'REST API Contracts', hoverColor: 'hover:bg-nb-pink' },
      { name: 'Unit Testing', hoverColor: 'hover:bg-nb-blue' }
    ]
  },
  {
    company: 'Seven Bridges / Velsera',
    position: 'Associate Frontend Software Engineer',
    positionBadgeVariant: 'mint',
    time: 'March 2022 – May 2025',
    description:
      'From the beginning of my tenure at the company, I was a member of the Computation team. My responsibilities included enhancing the functionality of several Angular applications, as well as developing and maintaining existing code within the legacy stack, which utilized Backbone.js and Marionette.js. Furthermore, I actively participated in various engineering initiatives, such as the migration to a microfrontend architecture and style decoupling, which broadened my understanding of web development principles and practices.',
    skills: [
      { name: 'Angular', hoverColor: 'hover:bg-nb-yellow' },
      { name: 'Microfrontends', hoverColor: 'hover:bg-nb-mint' },
      { name: 'Style Decoupling', hoverColor: 'hover:bg-nb-pink' },
      { name: 'Backbone / Marionette', hoverColor: 'hover:bg-nb-blue' }
    ]
  },
  {
    company: 'Seven Bridges',
    position: 'JavaScript Developer Intern',
    positionBadgeVariant: 'blue',
    time: 'October 2021 – December 2021',
    description:
      'During this internship, I gained initial experience with Angular development. Under the guidance of experienced mentors and in collaboration with fellow interns, our primary task was the development of an internal platform for database access requests. The project involved initial prototyping and design in Figma, followed by full-stack development using Angular.',
    skills: [
      { name: 'Angular', hoverColor: 'hover:bg-nb-yellow' },
      { name: 'Figma Prototyping', hoverColor: 'hover:bg-nb-mint' },
      { name: 'Internal Platform', hoverColor: 'hover:bg-nb-pink' }
    ]
  },
  {
    company: 'Računarski Fakultet / School of Computing Belgrade',
    position: 'B.Sc. Student',
    positionBadgeVariant: 'pink',
    time: 'October 2018 – October 2023',
    description:
      'A 4-year rigorous curriculum in Computer Science focusing on data structures, algorithms, distributed systems, and modern software architectures. Graduated with an outstanding cumulative GPA of 8.81.',
    skills: [
      { name: 'GPA 8.81 / 10.0', hoverColor: '', isSpecial: true },
      { name: 'Computer Science', hoverColor: 'hover:bg-nb-mint' },
      { name: 'Belgrade, Serbia', hoverColor: 'hover:bg-nb-coral' }
    ]
  }
];