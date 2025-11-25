import { Link } from "react-router-dom";
import { Code2, Zap, Users, BookOpen, Trophy, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-mystical/20">
        {/* Mystical background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mystical/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm">
                <span className="text-sm font-semibold text-gold flex items-center gap-2">
                  <Sparkles size={16} />
                  Welcome to the Mystical Realm of Code
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                CS Club
              </span>
              <br />
              <span className="text-gold/60">Where Code Meets Magic</span>
            </h1>

            <p className="text-lg sm:text-xl text-gold/70 max-w-2xl mx-auto leading-relaxed">
              Unlock the secrets of computer science. Join a community of
              passionate learners, solve challenging problems, and build the
              future together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/join"
                className="px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Zap size={20} />
                Join the Club
              </Link>
              <Link
                to="/events"
                className="px-8 py-4 border-2 border-gold/50 text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-300 hover:border-gold inline-flex items-center justify-center gap-2"
              >
                <Users size={20} />
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface/50 border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Why Join CS Club?
            </h2>
            <p className="text-gold/60 text-lg">
              Experience the ultimate computer science journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Learn to Code",
                description:
                  "Master fundamental and advanced programming concepts with hands-on projects and expert guidance.",
              },
              {
                icon: Trophy,
                title: "Compete & Win",
                description:
                  "Participate in coding competitions, hackathons, and challenges to showcase your skills.",
              },
              {
                icon: Users,
                title: "Build Community",
                description:
                  "Connect with like-minded peers who share your passion for computer science.",
              },
              {
                icon: BookOpen,
                title: "Access Resources",
                description:
                  "Get unlimited access to tutorials, code challenges, and learning materials.",
              },
              {
                icon: Zap,
                title: "Stay Updated",
                description:
                  "Keep up with the latest technologies, trends, and opportunities in tech.",
              },
              {
                icon: Sparkles,
                title: "Mentorship",
                description:
                  "Learn from experienced mentors and officers who guide your growth.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-dark-bg border border-gold/20 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <feature.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gold/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-dark-bg via-mystical/10 to-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gold/70 mb-8">
            Take the first step towards becoming an exceptional computer
            scientist. Join CS Club today!
          </p>
          <Link
            to="/join"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
