import Layout from "@/components/Layout";
import { ArrowRight, BookOpen, Code, Globe, Video, Users, GitBranch } from "lucide-react";
import com from "../components/images/assets/com.jpg"
export default function Resources() {
  const resourceCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      resources: [
        { name: "Python Documentation", url: "https://docs.python.org/3/" },
        { name: "JavaScript MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/" },
        { name: "Java Official Documentation", url: "https://docs.oracle.com/javase/" },
        { name: "C++ Reference", url: "https://en.cppreference.com/" },
      ],
    },
    {
      icon: BookOpen,
      title: "Learning Platforms",
      resources: [
        { name: "Codecademy", url: "https://www.codecademy.com/" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "Coursera", url: "https://www.coursera.org/" },
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
        { name: "Khan Academy", url: "https://www.khanacademy.org/" },
      ],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      resources: [
        { name: "YouTube - Crash Course Computer Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyJJsc7icy5G86XJHM" },
        { name: "TechLead YouTube Channel", url: "https://www.youtube.com/c/TechLead" },
        { name: "Code with Harry", url: "https://www.youtube.com/codewithharry" },
        { name: "Programming with Mosh", url: "https://www.youtube.com/c/programmingwithmosh" },
      ],
    },
    {
      icon: GitBranch,
      title: "Version Control & Collaboration",
      resources: [
        { name: "Git Documentation", url: "https://git-scm.com/doc" },
        { name: "GitHub", url: "https://github.com/" },
        { name: "GitLab", url: "https://gitlab.com/" },
        { name: "GitHub Learning Lab", url: "https://skills.github.com/" },
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { name: "W3Schools", url: "https://www.w3schools.com/" },
        { name: "HTML & CSS Tutorial", url: "https://www.htmlandcsstutorial.com/" },
        { name: "React Documentation", url: "https://react.dev/" },
        { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
      ],
    },
    {
      icon: Users,
      title: "Community & Networking",
      resources: [
        { name: "Stack Overflow", url: "https://stackoverflow.com/" },
        { name: "Dev.to", url: "https://dev.to/" },
        { name: "Hashnode", url: "https://hashnode.com/" },
        { name: "GitHub Discussions", url: "https://github.com/discussions" },
        { name: "Reddit r/learnprogramming", url: "https://www.reddit.com/r/learnprogramming/" },
      ],
    },
  ];

  const books = [
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      description: "Learn how to write code that is readable, maintainable, and elegant.",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      description: "Essential insights for becoming a better programmer.",
    },
    {
      title: "Introduction to Algorithms",
      author: "Cormen, Leiserson, Rivest, and Stein",
      description: "The definitive guide to algorithms and data structures.",
    },
    {
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Gang of Four",
      description: "Master design patterns for better software architecture.",
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      description: "Comprehensive guide to acing technical interviews.",
    },
  ];
  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-bg to-mystical/20 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={com}
            alt="Learning resources and library"
            className="w-full h-full object-cover mask-gradient"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Learning Resources
            </span>
          </h1>

        </div>
        
      </section>
      <div className="relative h-16 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-gold/20 to-dark-bg"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      </div>
      
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-dark-surface border border-gold/20 rounded-xl p-8 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-gold" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gold">{category.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {category.resources.map((resource, idx) => (
                      <li key={idx}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold/70 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                        >
                          <span className="text-gold/50 group-hover:text-gold">→</span>
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
