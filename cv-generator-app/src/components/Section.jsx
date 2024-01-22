import ExpandSection from "./ExpandSection";
import DisplayItems from "./DisplayItems";
import "../styles/Section.css";

export default function Section({
  /* eslint-disable react/prop-types */
  isOpen,
  setOpen,
  sectionName,
  iconName,
}) {
  return (
    <div className="expand-section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName={sectionName}
        iconName={iconName}
      />
      <DisplayItems
        sectionName={sectionName}
      />
    </div>
  )
}