import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGit, FaWordpress,
  FaDocker, FaAws, FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiMui, SiExpress, SiMongodb,
  SiPrisma,
  SiVercel, SiNetlify, SiNodered, SiSqlite, SiRedux,
  SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiMysql } from "react-icons/di";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Node-RED", icon: SiNodered, color: "#8F0000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: DiMysql, color: "#336791" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Sqlite", icon: SiSqlite, color: "#003B57" },
    ]
  },
  {
    title: "DevOps & Deployment",
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-portfolio-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my skills and technologies I've been working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
              className="bg-white dark:bg-background/30 dark:backdrop-blur-md dark:border dark:border-portfolio-400/20 dark:shadow-portfolio-400/5 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:dark:bg-background/40"
            >
              <h3 className="text-xl font-bold mb-6 text-portfolio-700 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.2 }}
                    className="flex flex-col items-center justify-center group transition-all"
                  >
                    <skill.icon
                      className="w-8 h-8"
                      style={{ color: skill.color }}
                    />
                    <span className="mt-2 text-xs text-muted-foreground group-hover:text-portfolio-600 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
