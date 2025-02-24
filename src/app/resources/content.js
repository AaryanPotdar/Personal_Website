import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aaryan",
  lastName: "Potdar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Incoming @ Slack | CS + Econ @ Georgia Tech | Prev @ Deloitte",
  avatar: "",
  location: "Atlanta/San Francisco",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AaryanPotdar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aaryan-potdar-5b9b1b235/",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineer, Strategist and Builder</>,
  subline: (
    <>
    Hey, I'm Aaryan. I'm a Computer Science + Economics student at <InlineCode>Georgia Tech</InlineCode>.
    Currently, an incoming Technical Program Management intern at <InlineCode>Slack</InlineCode>,
    a Senior Consultant at <InlineCode>UCC @ GT</InlineCode>,
    and a Research Lead at <InlineCode>Data Science @ GT</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm passionate about solving complex problems at the intersection of technology, strategy, and data. Whether I'm optimizing AI models, architecting scalable systems, or driving impact through consulting, I take a hands-on, analytical approach to building solutions that matter.
       <br></br>
       <br></br>
        My experience spans software engineering, AI research, and strategic problem-solving—giving me a unique perspective on bridging technical excellence with real-world applications.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Slack",
        timeframe: "May 2025 - Aug 2025",
        role: "Data Engineering TPM Intern",
        achievements: [
          <>
            Incoming Summer 2025
          </>,
        ],
        images: [],
      },
      {
        company: "PwC",
        timeframe: "Sept 2024 - Oct 2024",
        role: "Product Strategy Extern",
        achievements: [
          <>
            Provided strategic recommendations for expanding The Arc of Indiana Foundation's digital outreach, including
            enhanced website features with visualizations and analytics to increase engagement by 45%.
          </>,
        ],
        images: [],
      },
      {
        company: "Deloitte",
        timeframe: "June 2024 - Aug 2024",
        role: "Cyber & Strategy Risk Intern",
        achievements: [
          <>
          Conducted Security Configuration Assessments of IT and Cloud infrastructure (AWS) for 3 Banking sector clients.
          Evaluated 63 security solutions and provided remediation to achieve 100% security compliance.  
          </>,
          <>
          Prepared and reviewed Secure Configuration Documents for 20+ Database, Linux, Windows and Web servers.
          </>,
          <>
          Developed weekly compliance and audit dashboards, enhancing internal efficiency and client delivery outcomes.
          </>
        ],
        images: [],
      },
      {
        company: "Molecular Evolution Core Lab",
        timeframe: "May 2024 - Aug 2024",
        role: "Software Engineer",
        achievements: [
          <>
          Managed implementation of a Laboratory Information Management System using MERN stack, serving 2k+ users. 
          </>,
          <>
          Composed production & development Dockerfiles to containerize application, reducing deployment time by 35%.
          </>,
          <>
          Managed bi-weekly sprints and integrated Kanban & Agile methodologies, increasing operational efficiency by 30%.
          </>,
          <>
          Implemented a one-way aggregation pipeline to mask sensitive data, ensuring data privacy regulation compliance.
          </>
        ],
        images: [],
      },
      {
        company: "HP Tech Ventures",
        timeframe: "Feb 2024 - April 2024",
        role: "Business Analyst Extern",
        achievements: [
          <>
          Developed growth strategies for 5 global startups based on startup metrics, product features and business models.
          </>,
          <>
          Cleaned large datasets (50k+ rows) using Open Refine, SQL and visualized industry data trends in Tableau.
          </>,
          <>
          Recommended high-potential startups and presented pitch deck on Coefficient.io for further investment due diligence.
          </>
        ],
        images: [],
      },
      {
        company: "Temple Allen Industries",
        timeframe: "May 2023 - Aug 2023",
        role: "Machine Learning Engineer Intern",
        achievements: [
          <>
          Designed an enhanced depth data capture solution, generating $8k+ in cost savings on mechanical arms.
          </>,
          <>
          Implemented real-time reconstruction of airplane surface, improving efficiency of Boeing's Paint Operations by 58%.
          </>,
          <>
          Pre-processed dataset of 270k+ images using OpenCV to train end effector Pose Estimation model with 94.5%
          accuracy, enhancing robotic arm precision in sanding airplane surfaces.
          </>
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        description: <>Bachelor of Science in Computer Science, specializing in Intelligence & Information Networks • Minor in Economics • GPA: 3.93 • 4x Faculty Honors</>,
      }
    ],
  },
  
  leadership: {
    display: true,
    title: "Leadership & Community",
    roles: [
      {
        organization: "Product @ GT",
        role: "Product Manager",
        achievements: [
          <>
            Project & Solution Discovery, User Research for a self-sustaining community garden for Cox Automotive.
          </>,
        ],
        images: [],
      },
      {
        organization: "Undergraduate Consulting Club @ GT",
        role: "Senior Consultant",
        achievements: [
          <>
            Market entry & Brand positioning, Customer experience & Retention Strategy for local business - Nom Station.
          </>,
        ],
        images: [],
      },
      {
        organization: "CLEF Research Group",
        role: "Research Lead",
        achievements: [
          <>
            Organized 14 8-hour hack sessions across 11 teams. Co-authored eRisk paper - accepted to CLEF 2024 conference.
          </>,
          <>
            Managed budget of $2k in Google Cloud credits and optimized costs by right-sizing Compute Engine instances.
          </>,
        ],
        images: [],
      },
      {
        organization: "Data Science @ GT",
        role: "Project Lead",
        achievements: [
          <>
            Led a team of 7 data scientists and software engineers to develop a Win Probability model for forecasting GT Basketball's games and strategically select their non-conference opponents to enhance NCAA championship prospects.
          </>,
        ],
        images: [],
      }
    ],
  },
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
