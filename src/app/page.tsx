import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import HowClassesWork from '@/components/HowClassesWork';
import ImportantInfo from '@/components/ImportantInfo';
import FAQ from '@/components/FAQ';
import Registration from '@/components/Registration';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import TurnstileContext from 'turnstile-next/vercel';
export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Continuous Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowClassesWork />
      <ImportantInfo />
      <FAQ />
      <Registration />
      <Team />
      <Footer />
    </main>
  );
}
