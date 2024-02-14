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
  return (
    <div>
      {/* {sectionName === "Personal Details" && <PersonalDetailsForm data={data} onChange={onChange} />} */}
      {sectionName === "Personal Details" && <PersonalDetailsDisplay data={data} />}
      {sectionName === "Education" && <EducationForm data={data} onChange={onChange} />}
      {sectionName === "Professional Experience" && <ExperienceForm data={data} onChange={onChange} />}
    </div>
  )
}