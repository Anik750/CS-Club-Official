import Layout from "@/components/Layout";
import csqrcode from "../components/images/assets/qr-code.png";
import "./pages.css";
import cpu from "../components/images/assets/cpu.jpg";

export default function Join() {
  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
       <div className="absolute inset-0 z-0">
          <img
            src={cpu}
            alt="Join and become part of the community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mystical/20 via-transparent to-gold/5"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-gold-dark to-gold bg-clip-text text-transparent">
              <strong>Join CS Club</strong>
            </span>
          </h1>
,,
          <div className="gold-surface">
            <img
              src={csqrcode}
              alt="CS Club QR Code"
              className="qr-code"
              color="#FFD700"
            />
            <p className="gold-class">
             <strong>Scan the QR Code above to join our club through Discord! </strong> 
            </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
