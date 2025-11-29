import Layout from "@/components/Layout";
import { User } from "lucide-react";
import Alicia from "../components/images/members/Alicia.png"; 
import Anik from "../components/images/members/Anik.png"; 
import Cheta from "../components/images/members/Cheta.png"; 
import Daniel from "../components/images/members/Daniel.png"; 
import Joseph from "../components/images/members/Joseph.png"; 
import Matthew from "../components/images/members/Matthew.png"; 
import Rania from "../components/images/members/Rania.png"; 
import Rishon from "../components/images/members/Rishon.png"; 
import Sanjay from "../components/images/members/Sanjay.png"; 
import Sean from "../components/images/members/Sean.png"; 
import Srinjoy from "../components/images/members/Srinjoy.png"; 
import Vedant from "../components/images/members/Vedant.png"; 
import linux from "../components/images/assets/linux.jpg"
export default function About() {
  const teamRoles = [
    {
      id: "Co-Pres",
      role: "Co-President",
      name: "Daniel Son",
      description: "Fun Fact: \"I know the same number of programming languages as real languages.\"",
      image: Daniel,
    },
    {
      id: "Co-Pres",
      role: "Co-President",
      name: "Sanjay Ganapathy",
      description: "Fun Fact: \"I am a Machine Learning researcher and love going on walks around my neighborhood!\"",
      image: Sanjay,
    },
    {
      id: "VP",
      role: "Vice-President Internal Affairs",
      name: "Anik Koirala",
      description: "Fun Fact: \"I love playing chess in my free time.\"",
      image: Anik,
    },
    {
      id: "VP",
      role: "Vice-President External Affairs",
      name: "Srinjoy Maji",
      description: "Fun Fact: \"I have lived in Singapore for 2 years!\"",
      image: Srinjoy,
    },
    {
      id: "Sec",
      role: "Secretary",
      name: "Jeongseop Yoon",
      description: "Fun Fact: \"I play the guitar!\"",
      image: Joseph,
    },
    {
      id: "DOA",
      role: "Director of Activities",
      name: "Vedant Narayansa",
      description: "Fun Fact: \"I love Fortnite.\"",
      image: Vedant,
    },
    {
      id: "DOCP",
      role: "Director of Competitive Programming",
      name: "Sean Fang",
      description: "Fun Fact: \"I like playing golf.\"",
      image: Sean,
    },
    {
      id: "DOO",
      role: "Director of Outreach",
      name: "Rania Ahsan",
      description: "Fun Fact: \"I have a twin brother!\"",
      image: Rania,
    },
    {
      id: "DOP",
      role: "Director of Publicity",
      name: "Alicia Chen",
      description: "Fun Fact: \"I have a black cat named Hanzel.\"",
      image: Alicia,
    },
    {
      id: "DOP-2",
      role: "Director of Publicity",
      name: "Matthew Meng",
      description: "Fun Fact: \"I am double-jointed in both of my thumbs, and I can bend them awkwardly this way.\"",
      image: Matthew,
    },
    {
      id: "Treasurer",
      role: "Treasurer",
      name: "Rishon Joshua",
      description: "Fun Fact: \"I love Linux.\"",
      image: Rishon,
    },

    {
      id: "MS-Rep",
      role: "Middle School Representative",
      name: "Chetachukwu Nzeogu",
      description: "Fun Fact: \"Music is cool.\"",
      image: Cheta,
    },
  ];

  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-mystical/20 py-20">
      <div className="absolute inset-0 z-0">
          <img
            src={linux}
            alt="Diverse team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
          {/* Mystical overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-mystical/20 via-transparent to-gold/5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              About CS Club
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
      <section className="py-16 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-dark-surface border border-gold/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gold mb-4">Our Mission</h2>
              <p className="text-gold/70 text-lg leading-relaxed">
                CS Club is dedicated to inspiring and empowering students to
                explore the vast world of computer science. We believe in
                creating an inclusive community where students can learn and grow together. 
                Whether you're just starting your coding journey or already a seasoned developer, 
                there's a place for you here.
              </p>
            </div>

            <div className="bg-dark-surface border border-gold/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gold mb-4">What We Do</h2>
              <ul className="space-y-3 text-gold/70">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Host monthly general meetings and workshops on various programming
                    topics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>Organize hackathons and coding competitions (<strong>USACO & CodeJam</strong>, to name a few)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Provide mentorship and guidance for all skill levels (<strong>CodeSquad</strong>)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">→</span>
                  <span>
                    Create a supportive community for aspiring computer programmers
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
      
      <div className="relative h-16 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-gold/20 to-dark-bg"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      </div>

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
                  {/* <div className="mt-4 pt-4 border-t border-gold/10">
                    <p className="text-xs text-gold/40">
                      Edit this page to add member details like name, bio, and
                      upload a photo
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
