import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Button.css";

export default function FormButtons({
  /* eslint-disable react/prop-types */
  hideDeleteButton = false
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
        <button>
          Cancel
        </button>
        <button>
          Save
        </button>
      </div>
    </div>
  )
}