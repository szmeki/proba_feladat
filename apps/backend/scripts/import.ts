import { Directus, Item, ManyItems, RoleItem } from "@directus/sdk"
import { exec, ChildProcess } from "child_process"
import { readFileSync } from "fs"
;(async () => {
  function items<T extends Item>(x: ManyItems<T>): T[] {
    if (!x.data) return []
    return x.data.filter((x): x is T => !!x)
  }

  const directus = new Directus("http://localhost:8055")

  while (true) {
    try {
      await directus.server.ping()

      await directus.auth.login({
        email: "admin@qdiak.hu",
        password: "test123456789",
      })

      const roles: RoleItem[] = JSON.parse(
        readFileSync(__dirname + "/../roles.json").toString()
      )
      await Promise.all(
        roles.map(async (role) => {
          try {
            await directus.roles.createOne(role)
          } catch {
            await directus.roles.updateOne(role.id, role)
          }
        })
      )
      console.log("Imported roles")
      return
    } catch {
      console.log("Waiting to connect to backend for importing")
      await new Promise((r) => setTimeout(r, 3000))
    }
  }
})()
