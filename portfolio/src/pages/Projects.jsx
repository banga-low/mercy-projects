import ProjectCard from "../components/ProjectCard";
import posPadiImg from "../assets/pospadi.png";
import bankDashImg from "../assets/bankdash.png";
import freelancerImg from "../assets/freelancer.png";
import financialDashImg from "../assets/financialdashboard.png";

const Projects = () => {
  const projects = [
    {
      title: "POS-Padi",
      description: "Point of Sale system for retail businesses with inventory management, sales tracking, and reporting features.",
      tech: ["React", "Team Collaboration", "Chakra-UI", "Responsive Design" ],
      githubUrl: "https://github.com/InternPulse/pos-padi-frontend",
      liveUrl: "https://pospadi.com.ng/",
      imageUrl: posPadiImg
    },
    {
      title: "Bank Dashboard",
      description: "Collaborative banking application with transaction history, account management, and financial analytics.",
      tech: ["React", "Team Collaboration", "Tailwind", "Chakra UI"],
      githubUrl: "https://github.com/InternPulse-Frontend-March-2025/bankdash",
      liveUrl: "https://bankdash-team-2025.netlify.app/",
      imageUrl: bankDashImg
    },
    {
      title: "Freelancer Portfolio",
      description: "Professional portfolio template for freelancers showcasing services, projects, and client testimonials.",
      tech: ["React", "Chakra UI", "Responsive Design"],
      githubUrl: "https://github.com/banga-low/Freelancer-Dashboard",
      liveUrl: "https://freelancer-dashboard-rho.vercel.app/",
      imageUrl: freelancerImg
    },
    {
      title: "Financial Dashboard",
      description: "Real-time dashboard showcasing stock market data and Bitcoin prices with interactive charts and portfolio tracking.",
      tech: ["React",  "Chart.js", "API Integration"],
      githubUrl: "https://github.com/banga-low/InternPulse-Mercy",
      liveUrl: "https://financial-dashboard-rho-drab.vercel.app/",
      imageUrl: financialDashImg
    }
  ];

  return (
    <section className="p-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
