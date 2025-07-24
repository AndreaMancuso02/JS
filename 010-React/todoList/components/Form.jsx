import { useState } from "react";

function Form({addTodo}){

    const initialState = {
        todo:"",
        data:""
    }


    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();

        const ToDo = {
            id: Math.ceil(Math.random()),
            todo: formData.todo,
            data: formData.data
        }

        addTodo(ToDo);
        setFormData(initialState);
    }

     const handleInputChange = (event)=> {
        const{name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text"
                placeholder="Inserisci cosa fare"
                name="todo"
                value={formData.todo}
                onChange={handleInputChange} />
            </div>
            <div>
                <input type="date"
                placeholder="Inserisci la data"
                name="data"
                value={formData.data}
                onChange={handleInputChange} />
            </div>
            <div><input type="submit" value="Aggiungi" /> </div>
        </form>
        </>
    )
}

export default Form