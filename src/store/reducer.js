import {
    ADD_AGE,
    FETCHDATA,
    MOINS_AGE
} from './actions';
const initialState = {
    age:10,
    fetchData:[],
    api: 'https://randomuser.me/api/?results=10'
};

const reducer = (state=initialState,action)=>{
    const newState = {...state};
    switch(action.type){
        case ADD_AGE:
            newState.age = newState.age + 1;
            break;
        case FETCHDATA:
        newState.fetchData = action.payload;
            break;
        case MOINS_AGE:
          newState.age = newState.age -1;
            break;
            default:
    }
    return newState;
}

export default reducer;