import InputField from "./InputField";
import "../styles/Section.css";

export default function EducationForm({
  /* eslint-disable react/prop-types */
  degree,
  schoolName,
  location,
  startDate,
  endDate,
  onChange,
}) {
  return (
    <form className="section-form">
      <InputField
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter degree / Field of study"
        value={degree}
        onChange={onChange}
        data-key="degree"
      />
      <InputField
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter school / university"
        value={schoolName}
        onChange={onChange}
        data-key="schoolName"
      />
      <InputField
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter location"
        value={location}
        onChange={onChange}
        data-key="location"
      />
      <div className="dates-group">
        <InputField
          type="text"
          id="start-date" // or just 'date'?
          labelText="Start Date"
          placeholder="Enter start date"
          value={startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <InputField
          type="text"
          id="end-date" // or just 'date'?
          labelText="End Date"
          placeholder="Enter end date"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
    </form>

  )
}