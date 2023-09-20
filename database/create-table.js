import sql from './db.js'

sql`
  CREATE TABLE Schedule (
    id          SERIAL PRIMARY KEY,
    title       TEXT,
    description TEXT,
    time        TIMESTAMP 
  )
`.then(() => {
  console.log('Table created!')
})