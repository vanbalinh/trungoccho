import { UPDATE_USER, ADD_USER, EDIT_USER, REMOVE_USER } from '../type/RegisterType';

export const addUserAction = (newUser) => {
    return {
        type: ADD_USER,
        newUser
    }
}

export const updateUserAction = (userLogin) => {
    return {
        type: UPDATE_USER,
        userLogin
    }
}

export const editUserAction = (userID) => {
    return {
        type: EDIT_USER,
        userID
    }
}

export const removeUserAction = (userID) => {
    return {
        type: REMOVE_USER,
        userID
    }
}