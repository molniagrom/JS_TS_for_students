import './App.css'
import {student} from "./02/02.js";

function App() {

  return (
    <>
      name: {student.name}
      age: {student.age}
      favoriteFoot: {student.favoriteFoot}
      isActive: {student.isActive}
    </>
  )
}

export default App
