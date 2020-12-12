import Server from './server'
import models from './database'
import { Gender } from './database'

// Run server
const Init = async () => { 
    await Server.listen(Server.get('port'))
    await models.sequelize.sync()
    Gender.bulkCreate([
        {name: 'Female'},
        {name: 'Male'}
    ])
    console.log(
        `🖥  server run on localhost:${Server.get('port')}`
    )
}

Init()
