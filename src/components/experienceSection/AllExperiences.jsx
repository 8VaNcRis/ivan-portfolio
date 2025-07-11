import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "ICM Works",
    date: "2022 - Present",
    responsibilities: [
      "Learning.",
      "Learning.",
      "Learning.",
      "Learning.",
    ],
  },
  {
    job: "Freelance",
    company: "ICM Works",
    date: "2022 - Present",
    responsibilities: [
      "Learning.",
      "Learning.",
      "Learning.",
      "Learning.",
    ],
  },
  {
    job: "Study",
    company: "ICM Works",
    date: "2022 - Present",
    responsibilities: [
      "Learning.",
      "Learning.",
      "Learning.",
      "Learning.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
