import getConfig from "next/config"
import { Directus, Item, ManyItems } from "@directus/sdk"
import { Collections } from "@quantum/collections"

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const API = getConfig().publicRuntimeConfig.backendURL as string

export const directus = new Directus<Collections>(API)

// same as FormikErrors
export declare type FieldErrors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FieldErrors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
    ? FieldErrors<Values[K]>
    : string
}

type DirectusError = {
  errors: {
    message: string
    extensions?: {
      code?: string
      field?: string
      type?: string
    }
  }[]
}

export function isDirectusError(e: unknown): e is DirectusError {
  return e !== null && typeof e === "object" && "errors" in e
}

export function isError(e: unknown): e is { message: string } {
  return e !== null && typeof e === "object" && "message" in e
}

export function items<T extends Item>(x: ManyItems<T>): T[] {
  if (!x.data) return []
  return x.data.filter((x): x is T => !!x)
}
