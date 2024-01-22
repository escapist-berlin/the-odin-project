import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import './styles/App.css'

function App() {
  const [sectionOpen, setSectionOpen] = useState(null);
  const setOpen = (sectionName) => setSectionOpen(sectionName);

  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar />
        <div className="form-container">
          <Section
            isOpen={sectionOpen === "Personal Details"}
            setOpen={setOpen}
            sectionName="Personal Details"
            iconName="fa-solid fa-address-card"
          />
          <Section
            isOpen={sectionOpen === "Education"}
            setOpen={setOpen}
            sectionName="Education"
            iconName="fa-solid fa-graduation-cap"
          />
          <Section
            isOpen={sectionOpen === "Professional Experience"}
            setOpen={setOpen}
            sectionName="Professional Experience"
            iconName="fa-solid fa-briefcase"
          />
        </div>
      </div>
      <h1>Your CV</h1>
    </div>
  )
}

export default App
