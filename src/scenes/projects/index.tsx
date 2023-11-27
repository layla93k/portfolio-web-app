import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText"
import Project from "./Project"
import ElderHelperPhoto from "@/assets/elderHelper.png"
import NCBEPhoto from "@/assets/NcNewsBe.png"
import NCFEPhoto from "@/assets/NcNewsFe.png"
import CFGBudgetApp from "@/assets/budgetApp.png"
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

const projects: Array<ClassType> = [
  {
    name: "Elder Helper",
    description:
      "Elder Helper is an app with 2 user interfaces that connects the community. I worked within a team of 6 using agile methodologies to create this mobile app. We used React Native for the front-end and Express.js to build the back-end API alongside PostreSQL for the relational database. When building the API, we rigorously tested using Jest and Supertest to ensure the reliability of the code whilst also handling any errors that could occur. We used a Google Maps Api integrated with React Native Maps to display the map view.",
    image: ElderHelperPhoto,
    github: "https://github.com/layla93k/ElderHelper-frontend",
    link: "https://northcoders.com/project-phase/elder-helper",
  },
  {
    name: "NC News back-end",
    description: "I created this API using Node.js, Express and PostgreSQ and hosted it on Render. It allows the user to carry out CRUD (create, read, update and delete) operations. There was a strong focus on Test Driven Development and following the red, green, refactor cycle. The API also allows the user to paginate data, as well as filtering and sorting. It also allows the user to post and delete comments, and increment or decrement the votes on an article.",
    image: NCBEPhoto,
    github: "https://github.com/layla93k/nc-news-backend-project",
    link: "https://nc-news-back-end-project.onrender.com/api"
  },
  {
    name: "NC News front-end",
    description:
      "This project was created using React, CSS and hosted on Netlify and links with my previously built API. I enjoyed being able to visualise the endpoints that I had created in my previous project and getting stuck in to using various different React hooks. I am keen to add context to this project to allow a user to sign in. This web-applicaton allows the user to filter articles by different topics and sortthem into ascending or descending depending on comment count, date or likes.",
    image: NCFEPhoto,
    github: "https://github.com/layla93k/fe-nc-news",
    link: "https://lk-news.netlify.app/"
  },
  {
    name: "Budget App",
    description:
      "This was the first project I created whilst working in a team during a Code First Girls, 'Intro to JavaScript' course. I worked as part of a team to produce a small web app that allows a user to input data to trigger a change on the page. For this project we used HTML, CSS and JavaScript.",
    image: CFGBudgetApp,
    github: "",
    link:"https://codepen.io/layla93k/pen/KKrBGxp",
  },
  ];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="w-full bg-primary-100 py-10 mt-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6 mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-5/6">
            <HText>MY PROJECTS</HText>
            <p className="text-xl mt-2">
              Please find the projects that I have completed displayed below. If you would like to discover more about the project please click the GitHub link to see the project in more detail including how to run it locally.
            </p>
            <p className="ml-[200px]">
            <ArrowRightCircleIcon className="w-10 h-10 justify-end mt-8" />
            Scroll Across
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        
          <ul className="w-[2800px] whitespace-nowrap">
         
            {projects.map((item: ClassType, index) => (
              <Project
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                github={item.github}
                link={item.link}
              />
            ))}
          </ul>
          
        </div>
      </motion.div>
    
    </section>
  );
};

export default Projects;