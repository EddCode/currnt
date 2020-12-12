import { User } from '../../app/database'

export const getAll = async () => {
    const data = await User.findAll({})
    return data.map( user => user.dataValues)
} 

export const create = async(data) => {
    return await User.create({
        first_name: data.firstName,
        last_name: data.lastName,
        birthday: data.birthday,
        password: data.password,
        gender_id: data.genderId
    })
}

export const update = async(data, userId) => {
    return await User.update({
        first_name: data.firstName,
        last_name: data.lastName,
        birthday: data.birthday,
        password: data.password,
        gender_id: data.genderId
    }, { where: {user_id: userId} })
}

export const remove = async(id) => {
    await User.destroy({
        where: {user_id: id}
    })
}