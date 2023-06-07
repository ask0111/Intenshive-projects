

export const TodoListsAction = (props)=>{
    return {
        type: "TodoLists",
        value: props
    }
}
export const TodosAction = (props)=>{
    return {
        type: "Todos",
        value: props
    }
}

export const EditTodosAction = (props)=>{
    return {
        type: "EditTodos",
        value: props
    }
}

export const ContractHandler = (props)=>{
    return {
        type: "Contracts",
        value: props
    }
}
export const AccountHandler = (props)=>{
    return {
        type: "Account",
        value: props
    }
}
