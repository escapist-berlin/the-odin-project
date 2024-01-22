import InputField from "../components/InputField";
import "../styles/Section.css";

export default function PersonalDetails({
  /* eslint-disable react/prop-types */
  fullName,
  jobTitle,
  email,
  phoneNumber,
  address,
  onChange,
}) {
  return (
    <form className="section-form">
      <InputField
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="First and last name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <InputField
        type="text"
        id="job-title"
        labelText="Job title"
        placeholder="Enter job title"
        value={jobTitle}
        onChange={onChange}
        data-key="jobTitle"
      />
      <InputField
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter email"
        value={email}
        onChange={onChange}
        data-key="email"
      />
      <InputField
        type="tel"
        id="phone-number"
        labelText="Phone"
        placeholder="Enter phone"
        value={phoneNumber}
        onChange={onChange}
        data-key="email"
      />
      <InputField
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, country"
        value={address}
        onChange={onChange}
        data-key="address"
      />
    </form>
  )
}