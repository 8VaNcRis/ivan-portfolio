import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Project 1",
    year: "2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/project1.jpg`,
    link: "#",
  },
  {
    name: "Project 2",
    year: "2025",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/project2.jpg`,
    link: "#",
  },
  {
    name: "Project 3",
    year: "2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}images/project4.jpg`,
    link: "#",
  },
  {
    name: "Project 4",
    year: "2025",
    align: "left",
    image: `${import.meta.env.BASE_URL}images/project5.jpg`, // just example
    link: "#",
  },
];


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
