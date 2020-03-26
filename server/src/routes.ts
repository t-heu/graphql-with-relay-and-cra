import { Router } from 'express'

//import { MyContext } from './MyContext'

const routes = Router()

routes.get('/users', (request, response) => {
  return response.json({ hello: "word" })
});

export default routes
