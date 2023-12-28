import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <nav>
      <button>
        <FontAwesomeIcon icon={faNewspaper} />
        Content
      </button>
      <button>
        <FontAwesomeIcon icon={faSliders} />
        Customize
      </button>
    </nav>
  );
}