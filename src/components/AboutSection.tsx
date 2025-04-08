import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Import the download icon
import TimelineItem from "./TimelineItem";

const AboutSection = () => {

  const experiences = [
    {
      year: "2021 - 2023",
      title: "Associate Software Developer",
      company: "Neartekpod APAC Technologies",
      description: "Developed and maintained high-performance web applications using React.js and Next.js, integrating RESTful APIs for seamless frontend-backend communication. Designed responsive UI components with Tailwind CSS and Material-UI.Optimized performance through caching strategies and bundle size reduction while working with CI/CD pipelines for automated deployment.",
    },
    {
      year: "2022",
      title: "Web Developer Intern",
      company: "KICE Infosytems",
      description: " Designed and developed a custom website for a clothing session ensuring responsive design Utilized JavaScript, HTML, and CSS for front-end development Built a robust back-end system using Django for managing customer data and orders", 
    },
  ];

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Absara-Resume-Updated.pdf'; 
    link.download = 'Absara-Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="animate-slide-in text-center">
            <p className="text-muted-foreground mb-4 max-w-2xl">
              Passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies.
              Experienced in developing innovative solutions, including an AI-based warranty application, and optimizing
              user experiences across various platforms. Adept at tackling complex challenges and continuously learning
              technologies. Eager to contribute my expertise in a dynamic firm, driving innovation and delivering
              high-quality applications that enhance business efficiency and user engagement.
            </p>
            <div className="flex justify-center">
              <Button 
              onClick={handleDownloadCV}
              className="bg-portfolio-600 hover:bg-portfolio-700 flex items-center gap-2"
              >
              <Download size={16} />
              View My Resume
              </Button>
            </div>
          </div>
        </div>


        {/* Experience Timeline */}
        <div className="animate-slide-in">
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
          key={index}
          className="relative border-l-4 border-portfolio-600 pl-6 pb-6"
              >
          <div className="absolute top-0 left-[-10px] w-5 h-5 bg-portfolio-600 rounded-full"></div>
          <div className="bg-background/95 dark:bg-card p-4 rounded-lg shadow-md border dark:border-portfolio-400/20">
            <p className="text-sm text-muted-foreground dark:text-foreground/80">{experience.year}</p>
            <h4 className="text-lg font-semibold text-foreground dark:text-foreground">{experience.title}</h4>
            <p className="text-sm font-medium text-portfolio-600 dark:text-portfolio-400">
              {experience.company}
            </p>
            <p className="text-sm mt-2 text-muted-foreground dark:text-foreground/80">{experience.description}</p>
          </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
