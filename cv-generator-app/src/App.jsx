import Sidebar from "./components/Sidebar";
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar />
      </div>
      <h1>Your CV</h1>
    </div>
  )
}

export default App
