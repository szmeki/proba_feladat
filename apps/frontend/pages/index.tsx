import Link from "next/link"
import { useRouter } from "next/router"
import { useUser } from "../api/user"
import { Loader } from "../components/ui/Loader"

export default function IndexPage() {
  const router = useRouter()

  const { data: user, error } = useUser()
  if (error) return <>Hiba történt</>
  if (user === undefined) return <Loader />
  if (user === null) {
    void router.replace("/login")
    return <></>
  }

  return (
    <>
      <Link href="/c">
        <a>Céges</a>
      </Link>{" "}
      <Link href="/d">
        <a>Dolgozó</a>
      </Link>{" "}
      <Link href="/logout">
        <a>Logout</a>
      </Link>{" "}
    </>
  )
}
