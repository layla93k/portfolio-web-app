import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText"
import Project from "./Project"
import ElderHelperPhoto from "@/assets/elderHelper.png"
import NCBEPhoto from "@/assets/NcNewsBe.png"
import NCFEPhoto from "@/assets/NcNewsFe.png"
import CFGBudgetApp from "@/assets/budgetApp.png"

const projects: Array<ClassType> = [
  {
    name: "Elder Helper",
    description:
      "I worked within a team of 6 using agile methodologies to create this mobile app. We used React Native for the front-end and Express.js to build the back-end API. When building the API, we rigorously tested using Jest and Supertest to ensure the reliability of the code whilst also handling any errors that could occur.",
    image: ElderHelperPhoto,
    github: "https://github.com/layla93k/ElderHelper-frontend",
    link: "https://northcoders.com/project-phase/elder-helper",
  },
  {
    name: "NC News back-end",
    description: "I created this API using Node.js, Express and PostgreSQL for the relational database.",
    image: NCBEPhoto,
    github: "https://github.com/layla93k/nc-news-backend-project",
    link: "https://nc-news-back-end-project.onrender.com/api"
  },
  {
    name: "NC News front-end",
    description:
      "",
    image: NCFEPhoto,
    github: "https://github.com/layla93k/fe-nc-news",
    link: "https://lk-news.netlify.app/"
  },
  {
    name: "Budget App",
    description:
      "This was the first project I created whilst working in a team during a Code First Girls 'Intro to JavaScript' course.",
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