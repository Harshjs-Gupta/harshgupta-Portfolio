import AboutPage from "@/components/aboutPage/aboutPage";
import ContactPage from "@/components/contactPage/contactPage";
import HomePage from "@/components/homePage/homePage";
import ProjectPage from "@/components/projectPage/projectPage";
import ServicePage from "@/components/servicePage/servicePage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ServicePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}
