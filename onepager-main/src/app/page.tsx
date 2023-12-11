import Footer from '@/components/footer/Footer';
import Header from '@/components/header';
import OurValue from '@/components/ourValues';
import ClientMap from '@/components/ourclients/ClientMap';
import Projects from '@/components/project';
import Services from '@/components/services';
import OtherServices from '@/components/services/otherServices';
import Team from '@/components/team';
import Testimonies from '@/components/testimonies ';
import { OurValuesProvider } from '@/context/animateContext';

export default function Home() {
  return (
    <main>
      <Header />
      <OurValuesProvider>
        <OurValue />
        <Services />
        <OtherServices />
      </OurValuesProvider>
      <Projects />
      <ClientMap />
      <Testimonies />
      <Team />
      <Footer />
    </main>
  );
}
