import InputField from "./InputField";
import FormButtons from "./../components/FormButtons";
import "../styles/Section.css";

export default function EducationForm({
  /* eslint-disable react/prop-types */
  data,
  onChange,
}) {
  return (
    <form className="section-form">
      <InputField
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter degree / Field of study"
        value={data.degree}
        onChange={onChange}
        data-key="degree"
      />
      <InputField
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter school / university"
        value={data.schoolName}
        onChange={onChange}
        data-key="schoolName"
      />
      <InputField
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter location"
        value={data.location}
        onChange={onChange}
        data-key="location"
      />
      <div className="dates-group">
        <InputField
          type="text"
          id="start-date" // or just 'date'?
          labelText="Start Date"
          placeholder="Enter start date"
          value={data.startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <InputField
          type="text"
          id="end-date" // or just 'date'?
          labelText="End Date"
          placeholder="Enter end date"
          value={data.endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
      <FormButtons />
    </form>

  )
}