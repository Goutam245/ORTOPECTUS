import { useEffect } from "react";
import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import StatsBar from "@/components/site/StatsBar";
import PressStrip from "@/components/site/PressStrip";
import DoctorPreview from "@/components/site/DoctorPreview";
import ServicesGrid from "@/components/site/ServicesGrid";
import Process from "@/components/site/Process";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import GalleryPreview from "@/components/site/GalleryPreview";
import Testimonials from "@/components/site/Testimonials";
import Technology from "@/components/site/Technology";
import FinalCTA from "@/components/site/FinalCTA";

const Index = () => {
  useEffect(() => {
    document.title = "ORTOPECTUS — Clínica Integral y Estética Torácica";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Especialistas en cirugía torácica: deformidades, reconstrucción y estética torácica con técnicas mínimamente invasivas en Latinoamérica.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <StatsBar />
      <PressStrip />
      <DoctorPreview />
      <ServicesGrid />
      <Process />
      <WhyChooseUs />
      <GalleryPreview />
      <Technology />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
