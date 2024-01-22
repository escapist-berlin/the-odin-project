import PersonalDetails from "./../components/PersonalDetails";
import EducationForm from "./../components/EducationForm";
import ExperienceForm from "./../components/ExperienceForm";

export default function DisplayItems({
  /* eslint-disable react/prop-types */
  sectionName,
}) {
  return (
    <div>
      {sectionName === "Personal Details" && <PersonalDetails />}
      {sectionName === "Education" && <EducationForm />}
      {sectionName === "Professional Experience" && <ExperienceForm />}
    </div>
  )
}