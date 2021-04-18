import App from './server'
import models, { Gender } from './database'

// Run server
const Init = async () => {
  const server = await App.listen(App.get('port'))
  await models.sequelize.sync()

  Gender.bulkCreate([
    { name: 'Female' },
    { name: 'Male' }
  ])

  console.log(
        `🖥  server run on localhost:${App.get('port')}`
  )

  return server
}

const server = Init()

export { server, App }
