import { defineOperationApi } from "../../types/directus"

export default defineOperationApi({
  id: "hello",
  handler: () => {
    console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  },
})
