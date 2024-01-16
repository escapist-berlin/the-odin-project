import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
  return (
    <nav>
      <button>
        <FontAwesomeIcon icon="fa-solid fa-newspaper" />
        Content
      </button>
      <button>
        <FontAwesomeIcon icon="fa-solid fa-sliders" />
        Customize
      </button>
    </nav>
  );
}