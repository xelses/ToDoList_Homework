import React,{useState} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import "./App.css";
import MainFooter from './Components/MainFooter';

function App() {

const [formText,setFormText]= useState(""); //formdaki güncel yazı ve değişimi
const [formData,setFormData]= useState([
  "Learn JavaScript","Learn React", "Have a life!"
]);//formdaki verilerin tümü ve değişimi
const [completed, setCompleted] = useState(Array(formData.length).fill(false)); // Tamamlama durumu için dizi
const [filteredTodos, setFilteredTodos] = useState(formData);

const handleToggleAllCompleted = () => {
  const allCompleted = completed.every(value => value === true); // Check if all are completed
  const updatedCompleted = completed.map((value, index) => !allCompleted || !value); // Toggle all
  setCompleted(updatedCompleted);
};
const clearAll = () => {
  setFormData([]);
  setFilteredTodos([]);
};

const filterTodos = (filter) => {
  if (filter === "all") {
    setFilteredTodos(formData);
  } else if (filter === "active") {
    const activeTodos = formData.filter((todo) => todo.isActive);
    setFilteredTodos(activeTodos);
  } else if (filter === "completed") {
    const completedTodos = formData.filter((todo) => !todo.isActive);
    setFilteredTodos(completedTodos);
  } else {
    setFilteredTodos(formData);
  }
};

const itemCount = formData.length;


  return (
    <div>
      <header>
       <Header formText={formText} formData={formData} setFormData={setFormData} setFormText={setFormText}
       completed={completed} setCompleted={setCompleted} />
       <Main formData={formData} setFormData={setFormData} completed={completed} setCompleted={setCompleted} 
       handleToggleAllCompleted={handleToggleAllCompleted} />
       <MainFooter filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} clearAll={clearAll}
       filterTodos={filterTodos}/>
       <Footer itemCount={itemCount}/>
      </header>
    </div>
  );
}

export default App;
