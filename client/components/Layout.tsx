import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navigation />
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-dark-bg mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gold mb-4">CS Club</h3>
              <p className="text-gold/60 text-sm">
                Empowering the next generation of computer scientists.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-gold/60">
                <li>
                  <a href="/" className="hover:text-gold transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gold transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-gold transition">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gold mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gold/60">
                <li>
                  <a href="/resources" className="hover:text-gold transition">
                    Learning
                  </a>
                </li>
                <li>
                  <a href="/problems" className="hover:text-gold transition">
                    Practice
                  </a>
                </li>
                <li>
                  <a href="/join" className="hover:text-gold transition">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gold/60">
                <li>
                  <a href="#" className="hover:text-gold transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gold/50">
              © 2024 CS Club. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0 text-sm text-gold/50">
              <a href="#" className="hover:text-gold transition">
                Privacy
              </a>
              <a href="#" className="hover:text-gold transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
