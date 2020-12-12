import bcrypt from 'bcrypt'

const salt = 10

const encrypt = async (pwd) => await bcrypt.hash(pwd, salt)

export { 
    encrypt
}