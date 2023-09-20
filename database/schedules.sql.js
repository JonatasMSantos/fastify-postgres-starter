import sql from "./db.js"

export class ScheduleDAO { 

  async list(search) {
    return await sql`
    select
      *
    from Schedule ${
      search
        ? sql`where title iLike ${ '%' + search + '%' }`
        : sql``
    }
  `  
    // return await sql` SELECT * FROM Schedule `   
  }

  async create(schedule) {
    await sql` INSERT INTO Schedule ${sql(schedule)} `
  }

  async update(id, schedule) {
   await sql` UPDATE Schedule set ${sql(schedule)} WHERE id = ${id} `
  }

  async delete(id) {
    await sql` DELETE from Schedule WHERE id = ${id} `
  }

}