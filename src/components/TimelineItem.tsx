interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem = ({ year, title, company, description }: TimelineItemProps) => {
  return (
    <div className="flex group relative">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-[2px] bg-portfolio-600 dark:bg-portfolio-400 pointer-events-none"></div>
      </div>
      <div className="transform transition-all duration-300 ease-in-out group-hover:-translate-y-1">
        <div className="flex items-center mb-1">
          <div className="bg-portfolio-600 dark:bg-portfolio-400 w-4 h-4 rounded-full -ml-[6px] mr-3"></div>
          <span className="text-sm font-semibold text-portfolio-600 dark:text-portfolio-400">{year}</span>
        </div>
        <div className="ml-6 bg-background/95 dark:bg-card p-4 rounded-lg shadow-md border dark:border-portfolio-400/20">
          <h4 className="text-lg font-bold text-foreground dark:text-foreground">{title}</h4>
          <p className="text-portfolio-600 dark:text-portfolio-400 font-medium">{company}</p>
          <p className="text-muted-foreground dark:text-foreground/80 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;