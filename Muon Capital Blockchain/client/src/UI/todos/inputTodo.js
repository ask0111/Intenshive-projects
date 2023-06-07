import './inputTodo.css'
import { useState } from 'react';

export default function InputTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
   
    
    
    const SetTodoHandler = ()=>{
        if(!title && !description){
            return alert("Please fill some data")
        }
        let listName = props.props.list[0];
        props.props.todoListsB.addTodo(listName, title, description)
       
        setDescription("");
        setTitle("");
    }

    const DeleteList = ()=>{
        
        if(props.props.todoListsB && props.props.list[0]){
            if(window.confirm(`Are you want to remove "${props.props.list[0]}" Todo-List`)){
                props.props.todoListsB.removeList(props.props.list[0]);

            }else{
                return alert("Not removed");
            }
        }else{
            return alert("Something Wrong!");
        }
    }

    return (
        <div className='ts-in-container'>
            <div className='ts-in-ct-part1'>
                <i onClick={DeleteList} className="bi bi-bag-fill"></i>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Add Todo-List' />
                <i className="bi bi-plus" onClick={SetTodoHandler}></i>
            </div>

            <div className='ts-in-ct-part2'>
                <textarea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Add Todo Description'></textarea>
            </div>
        </div>
    )
}
