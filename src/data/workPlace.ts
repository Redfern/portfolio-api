import { EmploymentType } from 'src/types/employmentType';
import { WorkPlace } from 'src/types/workPlace';

export const workPlaces: WorkPlace[] = [
  {
    title: 'C# Full Stack Senior Developer',
    place: 'Money Means',
    years: 'September 2024 - April 2025',
    description:
      'C# full stack permanent developer creating a website for Money Means using Blazor, C#, Tailwind, Docker, GitHub Actions for CI and Playwright for E2E testing.\n\nOne of my greatest accomplishments was to setup the entire E2E testing framework for the website from the ground up, including creating docker images of the Web, Api and Database, seeding the database in docker, then running the E2E tests in playwright tests using GitHub actions in the CI process.\n\nThis was a startup company and I left because the entire development team was made redundant due to costs and a change in focus for the business.',
    employmentType: EmploymentType.Permanent,
  },
  {
    title: 'Full Stack Senior Developer',
    place: 'Vortex IOT',
    years: 'December 2023 - September 2024',
    description:
      "Full stack (mainly working with React) permanent developer creating and adapting internal portal websites to create and manage devices which are one of the company's main products.\n\nMy main task was to improve an internal React/NextJS website by improving the look and feel and the UX of how the site works. I improved the website by upgrading packages, removing redundant packages, giving the website a modern look and feel, making it fully responsive using styled components, adding in full E2E tests using Cypress, adding git hooks to prevent errors, added prettier to auto format code and more.\n\nThis was all presented to management and stakeholders on a regular basis to get feedback and prioritise new and future features to be developed.",
    employmentType: EmploymentType.Permanent,
  },
  {
    title: 'React Contract Developer',
    place: 'TDCO (The Tote)',
    years: 'June 2021 - July 2023',
    description:
      'Helped to develop and launch a brand-new fantasy section to The Tote website [www.tote.co.uk/fantasy](https://www.tote.co.uk/fantasy "Tote Fantasy") using React, React Context, Styled Components, Typescript, CircleCI, AWS, Cypress, GraphQL and more.\n\nI worked closely with the UX designers, stakeholders, product owners, backend developers and QA testers to deliver this product.\n\nMy job would involve a daily morning stand up with the team, talking to UX designers about the designs I would be working on in Figma and translating them to the frontend, talking to product owners about any requirements in tickets and working with the backend team to manage data in and out of GraphQL using AWS.',
    employmentType: EmploymentType.Contract,
  },
  {
    title: 'Frontend React Contract Developer',
    place: 'Sharp Gaming',
    years: 'Sep 2020 - April 2021',
    description:
      'Worked on a new website for Betfred and OddsKing using React, Redux, Typescript, Jenkins, Node, React Hooks, React testing library and more.\n\nI was brought on to help the core team get the website they were building across the line to go live, which involved extensive troubleshooting.',
    employmentType: EmploymentType.Contract,
  },
  {
    title: 'Full Stack React Contract Developer',
    place: 'UK Tote Group',
    years: 'Jul 2019 - Feb 2020',
    description:
      'Helped to build a new website [www.tote.co.uk](https://www.tote.co.uk "Tote website") from the ground up using AWS, CircleCI, Agile, Jira, React, React Hooks, Redux, Styled Components, Node, Lambda, Terraform and Github.\n\nThis was a fresh build of this website including choosing what tools and platforms we would use as a team to build it including Contentful as a CMS and CircleCI as a CI/CD solution.',
    employmentType: EmploymentType.Contract,
  },
  {
    title: 'React / C# Contract Developer',
    place: 'Betfred',
    years: 'Jan 2017 - Jul 2019',
    description:
      'Worked on a brand-new website.\n\nWorking with an up to date tech stack of: ReactJs, C#. dot net core, sass, styled components, nextjs, ci (teamcity), tdd, aws, elastic beanstalk, lambda, cloud formation and more.',
    employmentType: EmploymentType.Contract,
  },
  {
    title: 'Contract C# Developer',
    place: 'Stockport Council',
    years: 'May 2016 - December 2017',
    description:
      'A core part of the team which revamped the [www.stockport.gov.uk](https://www.stockport.gov.uk "Stockport Council Website") website using the latest tech stack: .Net Core, MVC 6, TDD, Moq, Contentful, Docker, AWS, SASS, Gulp, Agile, Scrum, Kanban, Git, Coding in the open (partial open source), CI, Pair Programming and more.\n\nI helped create a public rest api for the website, which included rate limiting, versioning, confirming the urls to rest standards, api keys and swagger integration.',
    employmentType: EmploymentType.Contract,
  },
  {
    title: 'Senior C# Developer',
    place: 'Reason Digital',
    years: 'December 2014 - May 2016',
    description:
      'Worked on various C# websites including 2 bespoke MVC solutions and an Umbraco MVC solution.\n\nMain skills used here were C#, MVC, Entity Framework, SQL, Stored Procedures, HTML, CSS, Bootstrap, Grunt, Design Patterns, NUnit, MSTest, Dependency Injection, Moq, TeamCity, Agile, Umbraco, Git and Jira',
    employmentType: EmploymentType.Permanent,
  },
  {
    title: 'Techincal Developer',
    place: 'Reading Room',
    years: 'July 2012 - December 2014',
    description:
      'Worked as a back-end C# developer, working with and expanding various CMS based .Net systems including Umbraco, Sitecore, Kentico, Immedacy and Telligent.',
    employmentType: EmploymentType.Permanent,
  },
  {
    title: 'Developer (C#, VB.Net, Objective C)',
    place: 'Yellowbus Solutions',
    years: 'July 2010 - July 2012',
    description:
      'My main responsibilities were to work on and deliver large scale projects including many dynamic websites. These ranged from small HTML and CSS cut up sites, to large dynamic data driven sites. I also worked on a number of native iPhone applications using Objective-C and Xcode.',
    employmentType: EmploymentType.Permanent,
  },
  {
    title: 'Developer (VB.Net)',
    place: 'Club Systems',
    years: 'December 2008 - July 2010',
    description:
      'Main responsibilities included developing new features for [www.howdidido.com](https://www.howdidido.com "HowDidIDo Golfing Website"), designing and developing new microsites. Other responsibilities included server managing, email campaigns, website analytics, statistics, design mock-ups, adverts design and more.',
    employmentType: EmploymentType.Permanent,
  },
];
