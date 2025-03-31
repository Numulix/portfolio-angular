interface WorkExperienceItem {
    time: string;
    company: string;
    position: string;
    description: string;
}

export const WorkExperience: WorkExperienceItem[] = [
    {
        time: 'March 2022 - Current',
        company: 'Seven Bridges / Velsera',
        position: 'Associate Frontend Software Engineer',
        description: 'From the beginning of my tenure at the company, I was a member of the Computation team. My responsibilities included enhancing the functionality of several Angular applications, as well as developing and maintaining existing code within the legacy stack, which utilized Backbone.js and Marionette.js. Furthermore, I actively participated in various engineering initiatives, such as the migration to a microfrontend architecture and style decoupling, which broadened my understanding of web development principles and practices.'
    },
    {
        time: 'October 2021 - December 2021',
        company: 'Seven Bridges',
        position: 'JavaScript Developer Intern',
        description: 'During this internship, I gained initial experience with Angular development. Under the guidance of experienced mentors and in collaboration with fellow interns, our primary task was the development of an internal platform for database access requests. The project involved initial prototyping and design in Figma, followed by full-stack development using Angular.'
    },
    {
        time: 'October 2018 - October 2023',
        company: 'Računarski Fakultet / School of Computing Belgrade',
        position: 'Student',
        description: 'A 4 year curriculum in Computer Science. Graduated with a GPA 8.81.'
    }
]