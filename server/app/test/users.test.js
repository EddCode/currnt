import supertest from 'supertest'
import { server, App } from '../index'

const api = supertest(App)

afterAll(() => {
  server.colse()
})

describe('Call users endpoint', () => {
  describe('Get All Users', () => {
    test('Wrong call', () => {
      expect(400).toBe(400)
    })
  })
})
