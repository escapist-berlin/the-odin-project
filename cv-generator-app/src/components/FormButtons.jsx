import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/Button.css";

export default function FormButtons() {
  return (
    <div className="form-buttons">
      <button className="form-delete">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
        Delete
      </button>
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