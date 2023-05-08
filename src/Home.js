import React, { useState } from 'react'

const Home = () => {
    const [newItem, setNewItem] = useState("")
    const [todos,setTodos] = useState([])
    function handleSubmit (e){
        e.preventDefault()


        setTodos( currentTodos =>{
            return [...currentTodos,{id: crypto.randomUUID(), title: newItem, completed:false},]
        } )

        setNewItem("")
    }

    function toggleTodo (id, completed){
        setTodos(
            currentTodos =>{
                return currentTodos.map( todo =>{
                    if(todo.id === id){
                        todo.completed = completed
                        return {...todo,completed}
                    }
                    return todo
                })
            }
        )

    }

    function deleteTodo (id){
        setTodos( currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }
    return (
        <>
            <div className='container mx-auto mt-5'>

                <div className="row justify-content-center align-items-center g-2">

                    <form onSubmit={handleSubmit}>
                        <div className=" col-lg-6 mx-auto">
                            <div className="input-group2 mb-3">
                                <input type="text" className="form-control text-center p-3" placeholder="Add Task" value={newItem} onChange={ e => setNewItem(e.target.value)} /> <br/>
                                <button className="btn btn-outline-primary p-3" type="button"  onClick={handleSubmit}><i className="ri-add-line"></i></button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <h1 className='display-3 my-5'>Task List</h1>
            <div className='container mx-auto'>
                <div className="row justify-content-center align-items-center g-2">
                    <div className='col-lg-6 mx-auto'>
                        <ul className='list'>
                            <b className='display-6 text-danger'>  {todos.length == 0 && "No Task"}</b>
                          
                            {todos.map(todo =>{
                                return (
                            <li className='d-flex justify-content-between my-4 align-content-start' key={todo.id}>
                                    <input type='checkbox' checked={todo.completed} onChange={ e => toggleTodo(todo.id, e.target.checked)}></input>
                                <label className='p-2'>{todo.title} </label>
                                <button className='btn btn-outline-danger' onClick={() => deleteTodo(todo.id)}><i className="ri-delete-bin-7-line"></i></button>
                            </li>

                                )
                            })}
           

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
