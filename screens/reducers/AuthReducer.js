const initialState = {
    email: 'admi@admin.com',
    senha: '123'
};
const AuthReducer = (state = [], action) => {
   if (state.length == 0) {
    return initialState;
   }
   
    return state;
};

export default AuthReducer;

//Redux Toolkit
