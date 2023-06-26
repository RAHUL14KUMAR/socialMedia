export const initialState={
    user:JSON.parse(localStorage.getItem("user")),
    getInfo:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FOLLOW_USER':
            return{
                ...state,
                getInfo:{...action.item}
            }
    }
}
export default reducer;