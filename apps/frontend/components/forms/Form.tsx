import { Formik, Form as FForm, FormikErrors, FormikValues } from "formik"
import { useState } from "react"
import { isDirectusError, isError } from "../../api/apiConfig"
import { Children } from "../../types/Children"

export default function Form<T extends FormikValues>({
  children,
  initialValues,
  validate,
  onSubmit,
}: {
  children: Children
  validate?: (data: T) => FormikErrors<T> | Promise<FormikErrors<T>>
  onSubmit: (data: T) => Promise<void>
  initialValues: T
}) {
  const [generalError, setGeneralError] = useState<string | null>(null)
  return (
    <Formik<T>
      initialValues={initialValues}
      validate={validate}
      onSubmit={async (data, { setFieldError }) => {
        setGeneralError(null)
        try {
          await onSubmit(data)
        } catch (e) {
          if (isDirectusError(e)) {
            e.errors.forEach((error) => {
              if (error.extensions?.field)
                setFieldError(error.extensions?.field, error.message)
            })
          } else if (isError(e)) {
            setGeneralError(e.message)
          }
        }
      }}
    >
      <FForm>
        {generalError && <p>{generalError}</p>}
        {children}
      </FForm>
    </Formik>
  )
}
