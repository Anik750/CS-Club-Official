import Layout from "@/components/Layout";
import { User } from "lucide-react";
import CodeJam from "../components/images/assets/CodeJam.png";
import oneevent from "../components/images/assets/oneevent.png";
import apcsaqr from "../components/images/assets/apcsaqr.png";
import octpic from "../components/images/assets/octpic.png";
import artwork from "../components/images/assets/artwork.jpg";
export default function Events() {
  const events = [
    {
      id: "1-event",
      name: "September General Meeting",
      description: "9/30/2025 \n Kicked off the school year with our first general meeting! Introduced club goals, upcoming events, and opportunities for involvement.",
      image: oneevent,
    },
    {
      id: "2-event",
      name: "October General Meeting",
      description: "10/30/2025 \n Introduced Code Squad, our afterschool program on Wednesdays to help members improve their coding skills following the USACO format (Led by Sean Fang).",
      image: octpic,
    },
    {
      id: "3-event",
      name: "November General Meeting",
      description: "11/20/2025 \n AP Computer Science A workshops will be hosted by Anik Koirala to help members prepare for the AP CSA exam in May. If you're interested in learning more about Java or interested in AP CSA, please scan this QR code!",
      image: apcsaqr,
    },
    {
      id: "codejam",
      name: "ABC CodeJam (~March 2026)",
      description: "An annual coding competition hosted by CS Club, open to all skill levels. Team up to create an application that solves real-world problems and win some prizes!",
      image: CodeJam,
    },
  ];
  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={artwork}
            alt="Conference and events"
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
          {/* Mystical overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-mystical/20 via-transparent to-gold/5"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center}">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Events
            </h2>
            <p className="text-gold/60 text-lg">
              Look at past and upcoming events hosted by CS Club! 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-dark-bg border border-gold/20 rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 group"
              >
                <div className="w-full h-64 bg-gradient-to-br from-dark-surface to-mystical/20 flex items-center justify-center border-b border-gold/20 group-hover:from-dark-surface group-hover:to-mystical/30 transition-all">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gold/40">
                      <User size={64} />
                      <span className="text-sm">Add event photo</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gold/10 rounded-full mb-3">
                    <span className="text-sm font-semibold text-gold">
                      {event.name}
                    </span>
                  </div>
                  <p className="text-gold/60 text-sm leading-relaxed">
                    {event.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
