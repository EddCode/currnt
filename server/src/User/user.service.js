import * as user from './user.application'

export const GetAll = async (req, res, next) => {
  try {
    const result = await user.getUsers()
    res.status(200).json({ status: '200', result: result })
  } catch (err) {
    next(err)
  }
}

export const Store = async (req, res, next) => {
  try {
    const result = await user.createUser(req.body)
    res.status(201).json({ status: 'created', result: result })
  } catch (err) {
    next(err)
  }
}

export const DeleteById = async (req, res, next) => {
  try {
    const result = await user.deleteUser(req.params.id)
    res.status(200).json({ status: '200', msg: 'User deleted successfuly', result })
  } catch (error) {
    next(error)
  }
}

export const UpdateById = async (req, res, next) => {
  try {
    const result = await user.updateUser(req.params.id, req.body)
    res.status(200).json({ status: '200', result: result, msg: 'User updated' })
  } catch (e) {
    next(e)
  }
}
