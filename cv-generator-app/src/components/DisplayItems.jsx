import { useState } from "react";
import PersonalDetailsDisplay from "./../components/PersonalDetailsDisplay";
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

  const handleEditClick = () => {
    setIsCollapsed(false);
  };

  return (
    <div>
      {sectionName === "Personal Details" && (
        <>
          {isCollapsed ? (
            <PersonalDetailsDisplay data={data} onEdit={handleEditClick} />
          ) : (
            <PersonalDetailsForm data={data} onChange={onChange} />
          )}
        </>
      )}
      {sectionName === "Education" && <EducationForm data={data} onChange={onChange} />}
      {sectionName === "Professional Experience" && <ExperienceForm data={data} onChange={onChange} />}
    </div>
  )
}