
import './App.css';
import Content from "./components/Content"
import Sidebar from "./components/Sidebar"

function App() {
  return (
  <div className="main">
      <Sidebar className="side" />
      <Content className="Content"/>
  </div>
  )

}

export default App; 
