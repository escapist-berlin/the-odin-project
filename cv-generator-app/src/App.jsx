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
    const { key } = e.target.dataset;
    const inputValue = e.target.value;

    const updatedSections = { ...sections };

    if (sectionName === "personal") {
      updatedSections[sectionName][key] = inputValue;
    } else {
      const { id } = e.target.closest('.section-form').dataset;
      const index = updatedSections[sectionName].findIndex(item => item.id === id);
      updatedSections[sectionName][index][key] = inputValue;
    }
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
