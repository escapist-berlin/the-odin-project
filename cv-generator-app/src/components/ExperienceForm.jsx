import InputField from "./InputField";
import "../styles/Section.css";

export default function ExperienceForm({
  /* eslint-disable react/prop-types */
  employer,
  position,
  location,
  startDate,
  endDate,
  description,
  onChange,
}) {
  return (
    <form className="section-form">
      <h2>Edit Professional Experience</h2>
      <InputField
        type="text"
        id="employer"
        labelText="Employer"
        placeholder="Enter employer"
        value={employer}
        onChange={onChange}
        data-key="employer"
      />
      <InputField
        type="text"
        id="position"
        labelText="Position"
        placeholder="Enter position"
        value={position}
        onChange={onChange}
        data-key="position"
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
      <InputField
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Describe your role and achievements"
        value={description}
        onChange={onChange}
        data-key="description"
      />
    </form>
  )
}