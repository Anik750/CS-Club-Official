import Layout from "@/components/Layout";
import { User } from "lucide-react";

export default function About() {
  const teamRoles = [
    {
      id: "president",
      role: "President",
      name: "Edit Member Name",
      description: "Placeholder - Edit to add team member bio",
      image: null,
    },
    {
      id: "vice-president",
      role: "Vice President",
      name: "Edit Member Name",
      description: "Placeholder - Edit to add team member bio",
      image: null,
    },
    {
      id: "treasurer",
      role: "Treasurer",
      name: "Edit Member Name",
      description: "Placeholder - Edit to add team member bio",
      image: null,
    },
    {
      id: "secretary",
      role: "Secretary",
      name: "Edit Member Name",
      description: "Placeholder - Edit to add team member bio",
      image: null,
    },
    {
      id: "head-events",
      role: "Head of Events",
      name: "Edit Member Name",
      description: "Placeholder - Edit to add team member bio",
      image: null,
    },
    {
      id: "head-education",
      role: "Head of Education",
      name: "Edit Member Name",
      description: "Placeholder - Edit to add team member bio",
      image: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-mystical/20 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mystical/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              About CS Club
            </span>
          </h1>
          <p className="text-xl text-gold/70 max-w-2xl mx-auto">
            A community dedicated to fostering a passion for computer science
            and building the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-dark-surface border border-gold/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gold mb-4">Our Mission</h2>
              <p className="text-gold/70 text-lg leading-relaxed">
                CS Club is dedicated to inspiring and empowering students to
                explore the vast world of computer science. We believe in
                creating an inclusive community where students can learn,
                collaborate, and grow together. Whether you're just starting
                your coding journey or already a seasoned developer, there's a
                place for you here.
              </p>
            </div>

            <div className="bg-dark-surface border border-gold/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gold mb-4">What We Do</h2>
              <ul className="space-y-3 text-gold/70">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Host weekly meetings and workshops on various programming
                    topics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>Organize hackathons and coding competitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Provide mentorship and guidance for all skill levels
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Create a supportive community for aspiring technologists
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Share resources and opportunities in the tech industry
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-surface/50 border-y border-gold/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gold/60 text-lg">
              The brilliant minds leading CS Club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamRoles.map((member) => (
              <div
                key={member.id}
                className="bg-dark-bg border border-gold/20 rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-dark-surface to-mystical/20 flex items-center justify-center border-b border-gold/20 group-hover:from-dark-surface group-hover:to-mystical/30 transition-all">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gold/40">
                      <User size={64} />
                      <span className="text-sm">Add member photo</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gold/10 rounded-full mb-3">
                    <span className="text-sm font-semibold text-gold">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold/60 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Edit Hint */}
                  <div className="mt-4 pt-4 border-t border-gold/10">
                    <p className="text-xs text-gold/40">
                      Edit this page to add member details like name, bio, and
                      upload a photo
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for values or culture section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-surface border border-gold/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">
                  Excellence
                </h3>
                <p className="text-gold/60">
                  We strive for excellence in everything we do
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">
                  Collaboration
                </h3>
                <p className="text-gold/60">
                  We believe in the power of teamwork and community
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">
                  Innovation
                </h3>
                <p className="text-gold/60">
                  We encourage creative thinking and exploration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
