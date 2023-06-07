import { useEffect, useState } from 'react';
import './rightSection.css';
import { useSelector, useDispatch } from 'react-redux';
import { EditTodosAction } from '../../Redux/action/action';

export default function RightSection(props) {
    const editState = useSelector((state)=> state.EditReducers)
    const contract = useSelector((state)=> state.ContractsReducers?.contract);
    const dispatch = useDispatch();

    const [edit, setEdit] = useState({title: editState?.title, description: editState?.dec});
    

    const RightSideHandler = ()=>{
        props.onHide("0")
    }

    useEffect(()=>{
        setEdit({title: editState?.title, description: editState?.dec})
    }, [editState])

// console.log(editState)

const UpdateHandler = ()=>{
   if(!editState.title && !editState.dec){
    return alert("Select editable todos..")
   }
    props.onSubmit1(true);
    if(edit.title && edit.description){
        try {
            
            contract?.updateTodo(editState.id, editState.list, edit.title, edit.description);
            
            dispatch(EditTodosAction({id: editState.id, list: editState.list, title: edit.title, dec: edit.description}));
            } catch (error) {
                console.log(error)
                return alert("Select editable todos..")
            }
        }else{
            return alert("Fill all fields..");
        }
    }

    return (
        <div className="rt-sc-container">
            <div className="rt-sc-ct-editHeading">
                <i  onClick={RightSideHandler} className="bi bi-arrow-left  -short"></i>
                <p onClick={RightSideHandler}>Edit Todo</p>
            </div>
            <div className="rt-sc-ct-edit-input">

                <input onChange={(e)=> setEdit({title: e.target.value, description: edit.description}) }  value={edit.title} placeholder="Title" />

                <textarea onChange={(e)=> setEdit({title:edit?.title, description: e.target.value})} value={edit.description}  placeholder="Description" />
                <button onClick={UpdateHandler}>Save</button>

            </div>

        </div>
    )
}