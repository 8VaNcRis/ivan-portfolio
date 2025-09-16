import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
              Hi! I’m a passionate and hardworking 3rd year BS Information Technology student at Computer Arts and Technological College.
        I specialize in web development, creating responsive and user-friendly websites using tools like React, Tailwind CSS, PHP, and MySQL.
        I’m always eager to learn new technologies, solve real-world problems, and build projects that improve my skills as a future full-stack developer.
        Currently, I’m focused on gaining hands-on experience through personal projects and I’m open to freelance work, internships, or any opportunity that helps me grow in the tech industry.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
