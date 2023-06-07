import { useEffect, useState } from 'react';
import './midSection.css';
import InputTodo from './inputTodo';
import TodosData from './todosData';
import { useSelector} from 'react-redux';



export default function MidSection(props) {

    const [todoListsB, setTodolistsB] = useState();
    const [todolist, setTodolist] = useState("");
    const [todolistsArr, setTodolistsArr] = useState([]);

    const todoListStateB = useSelector((state) => state.ContractsReducers?.contract);
   
    const [AccNumber] = useSelector((state) => state.AccountReducers);
   

    useEffect(() => {
        todoListStateB?.getTodos(AccNumber).then((res) => { setTodolistsArr(res)});
        setTodolistsB(todoListStateB);
    }, [todoListStateB, todoListsB, AccNumber]);

    const AddTodoListHandler = async () => {
        if (!todolist) {
            return alert("Please write something...")
        }
        await todoListsB?.addList(todolist);
        setTodolistsArr(todolistsArr)
        setTodolist("")
    }

    const sideHandler1 = () => {
        props.onSubmit('0')
    }
    // pass the props
    const sideHandler = (prop) => {
        sideHandler1();
    }

    return (
        <div className="md-sc-container">
            {todolistsArr.map((list, i) => {
                return (
                    <div key={list} className='md-sc-ct-todolist1'>
                        <div className='md-sc-ct-todolist2'>
                            <div className='md-sc-ct-tl-box1'>
                                <p>{"List : " + list.id}</p>
                            </div>
                        </div>

                        <div style={{ width: "94.5%" }}>
                            <InputTodo  props={{ list, todoListsB }} />
                            {
                                list?.todos.map((todo) => <TodosData key={i} onSubmit={(props) => sideHandler(props)} todosData={{list, todo}} />)
                            }
                        </div>
                    </div>
                )
            })}

            <div className='md-sc-ct-todolist0 md-sc-ct-todolist'>
                <div style={{ display: 'flex' }} className='md-sc-ct-tl-box'>
                    <input value={todolist} onChange={(e) => setTodolist(e.target.value)} placeholder='Add Todo-List' />
                    <i onClick={AddTodoListHandler} className="bi bi-plus"></i>
                </div>
            </div>
        </div>
    )
}