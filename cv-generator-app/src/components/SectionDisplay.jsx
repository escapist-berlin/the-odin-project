import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/DisplayItems.css";

export default function SectionDisplay({
  /* eslint-disable react/prop-types */
  data,
  onEdit,
}) {
  return (
    <div className="section-display-container">
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.degree || item.positionTitle}, {item.schoolName || item.companyName}</p>
            <p>{item.startDate} - {item.endDate} | {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}