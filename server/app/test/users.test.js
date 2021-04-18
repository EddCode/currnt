import supertest from 'supertest'
import { server, App } from '../index'
import db from '../database'

const api = supertest(App)

afterAll(() => {
  server.colse()
  db.sequilize.colse()
})

beforeEach(() => {
  db.sequelize.sync({ sync: true })
})

describe('Call users endpoint', () => {
  describe('Get All Users', () => {
    test('Wrong call', () => {
      expect(400).toBe(400)
    })
  })
})
