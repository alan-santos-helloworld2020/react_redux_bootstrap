const SALVAR = "SALVAR";

const initialState = {
    clientes:[]
}

const salvarReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case SALVAR:
            return{
                ...state,
                clientes:payload
            }
            break;
    
        default:
            return state
    }

}


export default salvarReducer;