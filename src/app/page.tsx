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
    <main className="min-h-screen bg-white">
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
