import { OneItem } from "@directus/sdk"
import { Collections } from "@quantum/collections"
import useSWR, { SWRResponse } from "swr"
import { directus, FieldErrors, items } from "./apiConfig"

export type Munkakor = Collections["munkakorok"]

export function validateMunkakor(data: Munkakor) {
  const errors: FieldErrors<Munkakor> = {}
  if (!data.nev?.trim()) errors.nev = "Meg kell adni a munkakör nevét"
  return errors
}

export async function createMunkakor(data: Munkakor) {
  await directus.items("munkakorok").createOne(data)
}

export function useMunkakorok(): SWRResponse<Munkakor[], unknown> {
  return useSWR("munkakorok", async () => {
    return items(await directus.items("munkakorok").readByQuery())
  })
}
