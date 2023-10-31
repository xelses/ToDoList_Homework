import React from "react";



function Main({formData,setFormData,completed,setCompleted,handleToggleAllCompleted}){
    

    const handleToggleCompleted = (index) => {
        const updatedCompleted = [...completed];
        updatedCompleted[index] = !completed[index];
        setCompleted(updatedCompleted);
      };

      const handleDeleteText = (index) => {
        const updatedList = [...formData];
        updatedList.splice(index, 1);
        setFormData(updatedList);
        const updatedCompleted = [...completed];
        updatedCompleted.splice(index, 1);
        setCompleted(updatedCompleted);
      };


    return(
        <section className="todoapp">
        <section className="main">
            <div>
                <input className="toggle-all" type="checkbox" onClick={handleToggleAllCompleted} />
		        <label for="toggle-all">
			        Mark all as complete
		        </label>

                <ul className="todo-list">
                    {formData.map((text, index) => (
                        <li key={index} className="completed">
                            <div className="view">
                                <input className="toggle"
                                type="checkbox"
                                checked={completed[index]}
                                onChange={() => handleToggleCompleted(index)}
                                />
                                <span style={{ textDecoration: completed[index] ? 'line-through' : 'none' }}>{text}</span>
                                <button className="destroy" onClick={() => handleDeleteText(index)}></button>
                            </div>
                        </li>
                    ))}

		        </ul>
            </div>
            </section>
            </section>
    )
}
export default Main;