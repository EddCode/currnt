import * as user from '../User/user.application'
export const Home = async (req, res) => {
    const result = await user.getUsers()
    const resutlDate = result.map( (user) => {
        const userBirthday = String(user.birthday)
        const date = new Date(userBirthday)
        const day = `${date.getDay()}`.padStart(2,'0')
        const mounth = `${date.getMonth()+1}`.padStart(2,'0')
        const year = `${date.getFullYear()}`
        const birthday = `${day}-${mounth}-${year}`
        return {
            ...user,
            birthday
        }
    })
    res.render('home', {
        users: resutlDate
    });
}