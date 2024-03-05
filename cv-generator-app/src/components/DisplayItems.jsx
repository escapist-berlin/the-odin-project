import { useState } from "react";
import PersonalDetailsDisplay from "./../components/PersonalDetailsDisplay";
import SectionDisplay from "./../components/SectionDisplay";
import PersonalDetailsForm from "./../components/PersonalDetailsForm";
import EducationForm from "./../components/EducationForm";
import ExperienceForm from "./../components/ExperienceForm";

export default function DisplayItems({
  /* eslint-disable react/prop-types */
  data,
  sectionName,
  onChange,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEditClick = (itemData) => {
    setIsCollapsed(false);
    if (itemData) {
      setSelectedItem(itemData);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsCollapsed(true);
    setSelectedItem(null);
  }

  return (
    <div>
      {sectionName === "Personal Details" && (
        <>
          {isCollapsed ? (
            <PersonalDetailsDisplay data={data} onEdit={handleEditClick} />
          ) : (
            <PersonalDetailsForm data={data} onChange={onChange} onCancel={handleCancelClick} />
          )}
        </>
      )}
      {sectionName === "Education" && (
        <>
          {isCollapsed ? (
            <SectionDisplay data={data} onEdit={handleEditClick} />
          ) : (
            <EducationForm data={selectedItem} onChange={onChange} onCancel={handleCancelClick} />
          )}
        </>
      )}
      {sectionName === "Professional Experience" && (
        <>
          {isCollapsed ? (
            <SectionDisplay data={data} onEdit={handleEditClick} />
          ) : (
            <ExperienceForm data={selectedItem} onChange={onChange} onCancel={handleCancelClick} />
          )}
        </>
      )}
    </div>
  )
}