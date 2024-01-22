import ExpandSection from "./ExpandSection";

export default function Section({
  /* eslint-disable react/prop-types */
  isOpen,
  setOpen,
  sectionName,
  iconName,
}) {
  return (
    <div>
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName={sectionName}
        iconName={iconName}
      />
    </div>
  )
}