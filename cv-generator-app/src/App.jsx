import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import './styles/App.css'
import sampleData from "./sampleData";

function App() {
  const [sections, setSections] = useState(sampleData);
  const [sectionOpen, setSectionOpen] = useState(null);
  const setOpen = (sectionName) => setSectionOpen(sectionName);

  function handleSectionChange(e, sectionName) {
    // e.target.dataset // key => "fullName"
    // e.target.value // value => "John Doe"
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    // const form = e.target.closest(".section-form");

    const updatedSections = { ...sections };

    updatedSections[sectionName][key] = inputValue;

    setSections(updatedSections);
  }

  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar />
        <div className="form-container">
          <Section
            data={sections.personal}
            onChange={(e) => handleSectionChange(e, "personal")}
            isOpen={sectionOpen === "Personal Details"}
            setOpen={setOpen}
            sectionName="Personal Details"
            iconName="fa-solid fa-address-card"
          />
          <Section
            data={sections.educations}
            onChange={(e) => handleSectionChange(e, "educations")}
            isOpen={sectionOpen === "Education"}
            setOpen={setOpen}
            sectionName="Education"
            iconName="fa-solid fa-graduation-cap"
          />
          <Section
            data={sections.experiences}
            onChange={(e) => handleSectionChange(e, "experiences")}
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
