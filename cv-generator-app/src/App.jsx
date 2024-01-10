import Sidebar from "./components/Sidebar";
import PersonalDetails from "./components/PersonalDetails";
import EducationForm from "./components/EducationForm";
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar />
        <div className="form-container">
          <PersonalDetails />
          <EducationForm />
        </div>
      </div>
      <h1>Your CV</h1>
    </div>
  )
}

export default App
