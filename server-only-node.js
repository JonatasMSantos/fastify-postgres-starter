import { createServer } from 'node:http'

const PORT = 3333

const server = createServer((req, res) => {
  console.log('Server request')


  res.write('Hello World')

  return res.end()
})

server.listen(PORT)

