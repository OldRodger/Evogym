import NavBar from "@/scenes/navbar"
import Home from '@/scenes/home'
import Benefits from "@/scenes/benefits";
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";
import OurClasses from "@/scenes/ourclasses";
import ContactUs from "@/scenes/contactus";
import Footer from "@/scenes/footer";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY !== 0) {
        setIsTopOfPage(false)
      }

      if (scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
