
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import NotifyMe from './components/NotifyMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-emerald-50 to-lime-50">
      {/* Headbar */}
      <Header />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-lime-200/20 rounded-full blur-3xl animate-pulse delay-2s"></div>
        <div className="absolute -bottom-40 right-1/2 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-4s"></div>
      </div>

      {/* Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <NotifyMe />
          <About />
          <Features />
        </div>
        <Contact />
      </main>
    </div>
  );
}

export default App;