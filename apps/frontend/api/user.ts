import { components } from "@quantum/collections"
import { directus } from "./apiConfig"
import useSWR, { SWRResponse } from "swr"

export type User = components["schemas"]["Users"]

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  await directus.auth.login({ email, password })
}

export const ROLE_DOLGOZO = "dolgozo"
export const ROLE_ADMIN = "admin"
export const ROLE_CEGES = "ceges"

/**
 * @returns `data`: a bejelentkezett felhasználó, vagy null, ha nincs bejelentkezve
 */
export function useUser(): SWRResponse<User | null, unknown> {
  return useSWR("user", async () => {
    if (!(await directus.auth.token)) return null
    return directus.users.me.read()
  })
}
