import { fastify } from "fastify";
import { DatabaseMemory } from "./database.test.js"

const PORT = 3000

const server = fastify()

const db = new DatabaseMemory()


server.post('/schedules', (request, reply) => {
  const { title, description, time } = request.body

  db.create({ title, description, time })

  console.log(db.list())

  return reply.status(201).send()
  
})

server.get('/schedules', (request) => {
  const search = request.query.search  
  const schedules = db.list(search)

  return schedules
})

server.put('/schedules/:id', (request, reply) => {
  const { title, description, time } = request.body

  const id = request.params.id
  db.update(id, { title, description, time })
  
  return reply.status(204).send()
})

server.delete('/schedules/:id', (request, reply) => {
  const id = request.params.id
  db.delete(id)
  
  
  return reply.status(204).send()
})
server.listen({
  port: PORT,
})