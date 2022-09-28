import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { login } from "../api/user"

type LoginData = {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()

  return (
    <>
      <Formik<LoginData>
        initialValues={{ email: "", password: "" }}
        onSubmit={async (data) => {
          await login(data)
          await router.push("/")
        }}
      >
        <Form>
          <Field name="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Jelszó" />
          <button type="submit">Bejelentkezés</button>
        </Form>
      </Formik>
    </>
  )
}
