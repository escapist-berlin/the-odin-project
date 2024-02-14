import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/DisplayItems.css";

export default function PersonalDetailsDisplay({
  /* eslint-disable react/prop-types */
  data,
}) {
  return (
    <div className="personal-display-container">
      <div>
        <div className="personal-display-name-title">
          <p>{data.fullName}</p>
          <p>{data.jobTitle}</p>
        </div>
        <div className="personal-display-info">
          <span><FontAwesomeIcon icon="fa-solid fa-at" /> {data.email}</span>
          <span><FontAwesomeIcon icon="fa-solid fa-phone" /> {data.phoneNumber}</span>
          <span><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {data.address}</span>
        </div>
      </div>
      <div className="edit-button">
        <button><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
      </div>
    </div>
  )
}