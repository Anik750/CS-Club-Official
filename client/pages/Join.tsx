import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export default function Join() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-bg to-mystical/20 py-20">
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
              Join CS Club
            </span>
          </h1>

          <div className="bg-dark-surface border border-gold/20 rounded-xl p-12 mb-8">
            <p className="text-xl text-gold/70 mb-6">
              This page is a placeholder ready to be customized!
            </p>
            <p className="text-gold/60 mb-8">
              Tell the AI what you'd like on this page:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-3 text-gold/60 mb-8">
              <li className="flex gap-2">
                <ArrowRight
                  size={20}
                  className="text-gold flex-shrink-0 mt-1"
                />
                <span>Membership form or application process</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight
                  size={20}
                  className="text-gold flex-shrink-0 mt-1"
                />
                <span>Meeting times and locations</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight
                  size={20}
                  className="text-gold flex-shrink-0 mt-1"
                />
                <span>Benefits of joining</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight
                  size={20}
                  className="text-gold flex-shrink-0 mt-1"
                />
                <span>Contact information</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight
                  size={20}
                  className="text-gold flex-shrink-0 mt-1"
                />
                <span>Any other content you'd like</span>
              </li>
            </ul>
          </div>

          <p className="text-gold/50 text-sm">
            Continue chatting with the AI to design this page exactly how you
            want it
          </p>
        </div>
      </section>
    </Layout>
  );
}
