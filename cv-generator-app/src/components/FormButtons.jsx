import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Button.css";

export default function FormButtons({
  /* eslint-disable react/prop-types */
  hideDeleteButton = false,
  onCancel,
}) {
  return (
    <div className="form-buttons">
      <div>
        {!hideDeleteButton && (
          <button className="form-delete">
            <FontAwesomeIcon icon="fa-solid fa-trash" />
            Delete
          </button>
        )}
      </div>
      <div className="main-form-buttons">
        <button className="main-form-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="main-form-save">
          Save
        </button>
      </div>
    </div>
  )
}