import { fastify } from "fastify";
import { ScheduleDAO } from "./database/schedules.sql.js";

const PORT = process.env.PORT ?? 3000

const server = fastify()

const db = new ScheduleDAO()


server.post('/schedules', async (request, reply) => {
  const { title, description, time } = request.body

  try {
    await db.create(request.body)
  } catch (err) {
    console.log(err)
  }

  return reply.status(201).send()  
})

server.get('/schedules', async (request) => {
  const search = request.query.search  
  try {
    const schedules = await db.list(search)
    return schedules
  } catch(err) {    
    console.log(err)
    throw err
  }
})

server.put('/schedules/:id', async (request, reply) => {
  const { title, description, time } = request.body

  const id = request.params.id
  await db.update(id, { title, description, time })
  
  return reply.status(204).send()
})

server.delete('/schedules/:id', async (request, reply) => {
  const id = request.params.id
  await db.delete(id)
  
  
  return reply.status(204).send()
})

server.listen({
  host: '0.0.0.0',
  port: PORT,
})