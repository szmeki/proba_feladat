import { useRouter } from "next/router"
import { useEffect } from "react"
import { directus } from "../api/apiConfig"
import { Loader } from "../components/ui/Loader"

export default function LogoutPage() {
  const router = useRouter()
  useEffect(() => {
    void directus.auth.logout().then(() => router.replace("/"))
  })
  return <Loader />
}
