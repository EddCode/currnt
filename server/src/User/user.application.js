import * as user from './user.domain'
import Boom from 'boom'

const badRequest = (message, data) => Boom.badRequest(message, data)

export const getUsers = async () =>  await user.getAll()


export const createUser = async(data) => {
    if(!data.firstName){
        return Promise.reject(badRequest('Missing First Name', 'FirstName'))
    }

    if(!data.lastName){
        return Promise.reject(badRequest('Missing Last Name', 'LastName'))
    }
    
    if(!data.birthday){
        return Promise.reject(badRequest('Missing Birthday ', 'birthday'))
    }

    if(!data.password){
        return Promise.reject(badRequest('Missing Password', 'password'))
    }

    if(!data.genderId || isNaN(data.genderId)){
        return Promise.reject(badRequest('Missing Gender', 'gender'))
    }

    const result = await user.create(data)
    return result
}


export const updateUser = async(userId, data) => {
    if(!userId){
        return Promise.reject(badRequest('Missing userr to update', 'userId'))
    }

    const [ result ] = await user.update(data, userId)

    if(!result){
        return Promise.reject(Boom.notFound('User does not exists'))
    }

    return data
}

export const deleteUser = async(userId) => {
    try {
        if(!userId){
            return Promise.reject(badRequest('Missing user to delete', 'userId'))
        }

        const result = await user.remove(userId)
        return result       
    } catch (error) {
       Promise.reject(error)
    }

}