import { defineEndpoint } from "../../types/directus";

export default defineEndpoint({
  id: 'hello',
  handler(router) {
    router.get('/', (req, res) => {
      res.send('Hello, world!')
    })
  }
})