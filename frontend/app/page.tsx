import Image from "next/image";
import Contact from "./components/Contact us/contactus";
import Teams from "./components/Team/Teamssection";

export default function Home() {
  return (
    <main>
    
      <Teams />
      <Contact />
    </main>
  );
}