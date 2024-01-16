import { useState } from "react";
import ExpandSection from "./ExpandSection";

export default function Section() {
  const [sectionOpen, setSectionOpen] = useState(null);
  const setOpen = (sectionName) => setSectionOpen(sectionName);

  return (
    <div>
      <ExpandSection
        isOpen={sectionOpen === "Personal Details"}
        setOpen={setOpen}
        sectionName="Personal Details"
        iconName="fa-solid fa-address-card"
      />
      <ExpandSection
        isOpen={sectionOpen === "Education"}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa-solid fa-graduation-cap"
      />
      <ExpandSection
        isOpen={sectionOpen === "Professional Experience"}
        setOpen={setOpen}
        sectionName="Professional Experience"
        iconName="fa-solid fa-briefcase"
      />
    </div>
  )
}