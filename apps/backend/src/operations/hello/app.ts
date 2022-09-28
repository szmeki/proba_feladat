import { defineOperationApp } from "../../types/directus"

export default defineOperationApp({
  id: "hello",
  name: "Hello",
  icon: "face",
  options: {},
  description: "Outputs a hello to the console yey!",
  overview: ({ flow }) => [{ label: "aa", text: "aaa" }],
})
