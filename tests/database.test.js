import { randomUUID } from "node:crypto"

export class DatabaseMemory {
  #schedules = new Map()

  list(search) {
    return Array.from(this.#schedules.entries()).map((item) => {
      const id = item[0]
      const data = item[1]

      return {
        id, 
        ...data
      }
    }).filter((schedule) => {
      if (search) {
        return schedule.title.includes(search)
      }
      return true
    })
  }

  create(schedule) {
    const scheduleId = randomUUID()
    this.#schedules.set(scheduleId, schedule)
  }

  update(id, schedule) {
    this.#schedules.set(id, schedule)
  }

  delete(id) {
    this.#schedules.delete(id)
  }

}