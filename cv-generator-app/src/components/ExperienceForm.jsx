import InputField from "./InputField";
import FormButtons from "./../components/FormButtons";
import "../styles/Section.css";

export default function ExperienceForm({
  /* eslint-disable react/prop-types */
  data,
  onChange,
  onCancel,
}) {
  return (
    <form className="section-form" data-id={data.id}>
      <InputField
        type="text"
        id="company-name"
        labelText="Employer"
        placeholder="Enter employer"
        value={data.companyName}
        onChange={onChange}
        data-key="companyName"
      />
      <InputField
        type="text"
        id="position-title"
        labelText="Position"
        placeholder="Enter position"
        value={data.positionTitle}
        onChange={onChange}
        data-key="positionTitle"
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
      <InputField
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Describe your role and achievements"
        value={data.description}
        onChange={onChange}
        data-key="description"
      />
      <FormButtons onCancel={onCancel} />
    </form>
  )
}