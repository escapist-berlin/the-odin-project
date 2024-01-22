import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Section.css";

export default function ExpandSection({
  /* eslint-disable react/prop-types */
  isOpen,
  setOpen,
  sectionName,
  iconName,
}) {
  return (
    <button
      className="expand-button"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
      >
      <h2 className="expand-button-header">
        <FontAwesomeIcon icon={iconName} />
        {sectionName}
      </h2>
      <FontAwesomeIcon
        icon="fa-solid fa-chevron-up"
        className={isOpen ? "rotate-up" : "rotate-down"}
      />
    </button>
  )
}