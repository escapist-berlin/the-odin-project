import InputField from "../components/InputField";
import FormButtons from "./../components/FormButtons";
import "../styles/Section.css";

export default function PersonalDetailsForm({
  /* eslint-disable react/prop-types */
  data,
  onChange,
}) {
  return (
    <form className="section-form">
      <InputField
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="First and last name"
        value={data.fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <InputField
        type="text"
        id="job-title"
        labelText="Job title"
        placeholder="Enter job title"
        value={data.jobTitle}
        onChange={onChange}
        data-key="jobTitle"
      />
      <InputField
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter email"
        value={data.email}
        onChange={onChange}
        data-key="email"
      />
      <InputField
        type="tel"
        id="phone-number"
        labelText="Phone"
        placeholder="Enter phone"
        value={data.phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
      />
      <InputField
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, country"
        value={data.address}
        onChange={onChange}
        data-key="address"
      />
      <FormButtons hideDeleteButton={true} />
    </form>
  )
}