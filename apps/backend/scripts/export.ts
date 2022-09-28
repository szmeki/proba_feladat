import { Directus, Item, ManyItems } from "@directus/sdk"
import { writeFileSync } from "fs"

function dump(x: any) {
  return JSON.stringify(x, undefined, 2)
}

;(async () => {
  function items<T extends Item>(x: ManyItems<T>): T[] {
    if (!x.data) return []
    return x.data.filter((x): x is T => !!x)
  }

  const directus = new Directus("http://localhost:8055")
  await directus.auth.login({
    email: "admin@qdiak.hu",
    password: "test123456789",
  })
  const roles = items(await directus.roles.readByQuery()).filter(
    (role) => role.name !== "Administrator"
  )
  for (const role of roles) {
    delete role.users
  }
  writeFileSync(__dirname + "/../roles.json", dump(roles))
  console.log("Exported roles")
})()
