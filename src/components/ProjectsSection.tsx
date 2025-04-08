
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hospitality PMS and AI Guest Assistance",
    description: "An innovative Property Management System with integrated AI guest assistance, streamlining hotel operations and enhancing guest experience through automated responses and service management.",
    category: "Enterprise Solution",

    technologies: ["React.js", "Express", "Node-RED"],
    image: "/Hospitality-PMS.avif"
  },
  {
    id: 2,
    title: "Warranty AI",
    description: "A sophisticated warranty management platform leveraging AI to automate claims processing, validate warranties, and provide instant customer support for warranty-related queries.",
    category: "AI Platform",
    technologies: ["Next.js", "Prisma ORM", "Node-RED"],
    image: "/Warranty-AI.jpg"
  },
  {
    id: 3,
    title: "Simplifai",
    description: "An AI-powered automation platform that simplifies complex business processes, featuring workflow automation, data processing, and intelligent decision-making capabilities.",
    category: "AI Platform",
    technologies: ["Next.js", "Node-RED", "DynamoDB"],
    image: "/simplifai.jpg"
  },
  {
    id: 4,
    title: "Jacana Warranty",
    description: "A comprehensive warranty management solution for e-commerce businesses, featuring automated warranty registration, claim processing, and customer support integration.",
    category: "E-commerce Solution",
    technologies: ["Wordpress", "WooCommerce Plugin"],
    image: "/jacana-warranty-2.jpg"
  },
 
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-portfolio-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Update the Card component to remove hover actions
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-portfolio-500/20 hover:shadow-portfolio-500/20 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="text-sm text-portfolio-600 mb-1">{project.category}</div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-secondary rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
            
            </Card>
          ))}
        </div>
   
      </div>
    </section>
  );
};

export default ProjectsSection;
