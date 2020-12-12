import * as user from '../User/user.application'
export const Home = async (req, res) => {
    const result = await user.getUsers()
    res.render('home', {
        users: result
    });
}