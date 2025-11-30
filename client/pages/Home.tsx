import { Link } from "react-router-dom";
import { Code2, Zap, Users, BookOpen, Trophy, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-mystical/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg"
            alt="Digital code and technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mystical/20 via-transparent to-gold/5"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                CS Club
              </span>
              <br />
            </h1>

            <p className="text-lg sm:text-xl text-gold/70 max-w-2xl mx-auto leading-relaxed">
              Explore the world of computer science and coding with the click of a button! 
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
      <div className="relative h-20 bg-gradient-to-r from-dark-bg via-gold/10 to-dark-bg overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(212, 175, 55, 0.3)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M0,40 Q250,10 500,40 T1000,40" stroke="url(#waveGrad)" strokeWidth="2" fill="none" />
            <path d="M0,50 Q250,20 500,50 T1000,50" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" fill="none" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-around px-8">
            {[0, 25, 50, 75, 100].map((pos) => (
              <div
                key={pos}
                className="w-1 h-1 bg-gold rounded-full opacity-60"
                style={{
                  animation: `pulse 2s ease-in-out infinite`,
                  animationDelay: `${pos * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

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
                  "Master advanced programming concepts with hands-on projects and through lunch activity meetings!",
              },
              {
                icon: Trophy,
                title: "Compete & Win",
                description:
                  "Participate in coding competitions (USACO) and the ABC CodeJam Hackathon to showcase your skills.",
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
                  "Get access to tutorials, code challenges, and essential materials to further promote growth.",
              },
              {
                icon: Zap,
                title: "Guest Speakers",
                description:
                  "Keep up with the latest technologies, trends, and opportunities in tech with our monthly guest speaker meetings!",
              },
              {
                icon: Sparkles,
                title: "Mentorship",
                description:
                  "Learn from former and current cabinet members who will guide you through the world of Computer Science!",
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

      <section className="py-20 bg-gradient-to-br from-dark-bg via-mystical/10 to-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gold/70 mb-8">
            Take the first step towards becoming an expert computer 
            programmer by joining CS Club today!
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
