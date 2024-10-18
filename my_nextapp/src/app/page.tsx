import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Blogs />
      <Services />
      <Contact />
    </>
  )
}
