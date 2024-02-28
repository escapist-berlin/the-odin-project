import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/DisplayItems.css";

export default function SectionDisplay({
  /* eslint-disable react/prop-types */
  data,
  onEdit,
}) {
  return (
    <div className="section-display-container">
      {data.map((item) => (
        <div className="section-display-item" key={item.id}>
          <p>{item.degree || item.positionTitle}, <i>{item.schoolName || item.companyName}</i></p>
          <small>{item.startDate} - {item.endDate} | {item.location}</small>
        </div>
      ))}
    </div>
  )
}