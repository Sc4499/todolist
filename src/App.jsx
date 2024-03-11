
import React, { useState } from "react"
import "./App.css"
function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((ele) => ele.id === editId)
      const updateTodos = todos.map((item) => item.id === editTodo.id ? (item = { id: item.id, todo }) : { id: item.id, todo: item.todo });
      setTodos(updateTodos)
      setTodo("")
      setEditId(0)
      return
    }
    if (todo !== '') {
      setTodos([{ id: Math.random(), todo }, ...todos])
      setTodo("")
    }
  }


  const hendleDelete = (id) => {
    const deleteData = todos.filter((k) => k.id !== id);
    console.log(setTodos([...deleteData]))
  }

  const handleEdit = (kid) => {
    const editData = todos.find((item) => item.id === kid);
    setTodo(editData.todo)
    setEditId(kid);
  }

  console.log(todos)

  return (
    <div className="mainWrapper">
      <div className='outerWrapper'>
        <h1>Todo List App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
          <button className='searchBtn' type='submit'>{editId ? "Edit" : "GO"}</button>
        </form>

        {todos.map((item) => {
          return (
            <div key={item.id} className='mainBox' >
              <span>{item.todo}</span>
              <div className='actionBox'>
                <button className='editBtn' onClick={() => handleEdit(item.id)} >Edit</button>
                <button className='deleteBtn' onClick={() => hendleDelete(item.id)}>Delete</button>
              </div>
            </div >
          )
        })}

      </div>
    </div>

  )
}

export default App
