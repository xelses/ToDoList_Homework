import React from "react";

function Header({formText,setFormText,formData,setFormData,completed,setCompleted}){
    
    const handleInputChange = (e) => {
        setFormText(e.target.value); // Metin girişini güncelle
      };

      const handleAddText = (e) => {
        e.preventDefault(); // Formun gönderme işlemini engelle
        if (formText) {
          setFormData([...formData, formText]); // Metni listeye ekleyin
          setCompleted([...completed, false]); // Yeni öğenin tamamlama durumunu başlangıçta false olarak ayarlayın
          setFormText(''); // Metin girişini sıfırlayın
        }
      };

    return(
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={handleAddText}>
                    <input 
                    className="new-todo" placeholder="What needs to be done?" autoFocus 
                    type="text" value={formText} onChange={handleInputChange}
                    />
                </form>

            </header>

        </section>
    )
}

export default Header;