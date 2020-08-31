import { ADD_USER, UPDATE_USER, EDIT_USER, REMOVE_USER } from './type/RegisterType'

const stateDefault = {
    // user:{
    //     userLogin: '',
    //     userName: '',
    //     passWord: '',
    //     email: '',
    //     phoneNumber: '',
    //     userRole: ''
    // },
    userInfo: [{
        id: '1',
        userLogin: 'admin',
        userName: 'admin',
        passWord: '123',
        email: 'admin@gmail.com',
        phoneNumber: '0352804743',
        userRole: 'Admin'
    },
    {
        id: '2',
        userLogin: 'admin',
        userName: 'admin',
        passWord: '123',
        email: 'admin@gmail.com',
        phoneNumber: '0352804743',
        userRole: 'Admin'
    }
    ]
}

const RegistationFormReducer = (state = stateDefault, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_USER: {
            let index = state.userInfo.findIndex(user => user.userLogin === action.newUser.userLogin);
            if (index !== -1) {
                alert('User is existing!');
                return state;
            }
            return { ...state, userInfo: [...state.userInfo, action.newUser] }
        }
        default:
            return state;
    }

}


export default RegistationFormReducer;