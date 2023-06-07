
const initializer = [];
export const Reducers = (state = initializer, action)=>{
    switch(action.type){
        case "Todos" : {
            return 
        }
        case "TodoLists" : {
            return [...state, action.value]
        }

        default : return state;
    }
}

const editInitializer = {};
export const EditReducers = (state = editInitializer, action)=>{
    switch(action.type){
        case "EditTodos" : {
            return action.value;
        }
        default : return state;
    }
}

const ContractsInitializer = {};
export const ContractsReducers = (state = ContractsInitializer, action)=>{
    switch(action.type){
        case "Contracts" : {
            return action.value;
        }
        default : return state;
    }
}

const AccountInitializer = '';
export const AccountReducers = (state = AccountInitializer, action)=>{
    switch(action.type){
        case "Account" : {
            return action.value;
        }
        default : return state;
    }
}


