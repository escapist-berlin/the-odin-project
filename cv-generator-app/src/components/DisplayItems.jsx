import PersonalDetails from "./../components/PersonalDetails";
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
      {sectionName === "Personal Details" && <PersonalDetails data={data} onChange={onChange} />}
      {sectionName === "Education" && <EducationForm data={data} onChange={onChange} />}
      {sectionName === "Professional Experience" && <ExperienceForm data={data} onChange={onChange} />}
    </div>
  )
}