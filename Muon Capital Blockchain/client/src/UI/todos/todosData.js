import './inputTodo.css';
import { useDispatch, useSelector } from 'react-redux';
import {EditTodosAction} from '../../Redux/action/action'
import { useRef } from 'react';


export default function TodosData(props) {
    const styleRef = useRef(null);

    const dispatch = useDispatch();
    const deleteContract = useSelector((state)=> state.ContractsReducers?.contract)
    
    const PencilHandler = ()=>{
        props.onSubmit('l');
        dispatch(EditTodosAction({id:props.todosData.todo.id, list: props.todosData.list[0], title: props.todosData.todo.title, dec: props.todosData.todo.description}));
        [...document.querySelectorAll('.ts-in-container')].map((ele)=>{
            ele.classList.remove('styleBorder');
            return ele;
        })
        styleRef?.current.classList.add('styleBorder');
    }

    const DeleteHandler = ()=>{
        if(props.todosData.todo.id && props.todosData.list[0]){
            if(window.confirm(`Are you want to Delete  "${props.todosData.todo.title}"  Todo`)){
                deleteContract.deleteTodo(props.todosData.todo.id, props.todosData.list[0]);

            }
        }else{
            return alert("Something Wrong!");
        }

    }



    return (
        <div ref={styleRef} className='ts-in-container'>
            <div className='ts-in-ct-part1'>
                <i onClick={DeleteHandler} className="bi bi-bag-fill"></i>
                <p>{props.todosData.todo.title}</p>
                <i onClick={PencilHandler} className="bi bi-pencil"></i>
            </div>

            <div className='ts-in-ct-part2'>
                <p>{props.todosData.todo.description}</p>
            </div>
        </div>
    )
}
