import { ErrorMessage, Field as FField } from "formik"
import { MouseEventHandler } from "react"
export default function Field({
  name,
  label,
  testid,
  asd,
}: {
  name: string
  label: string
  testid: string
  asd?: (x: boolean) => MouseEventHandler<HTMLDivElement>
}) {
  return (
    <div className="popup__field field">
      <label htmlFor={name} className="field__label">
        {label}
      </label>
      <div className="field__wrap">
        <FField
          name={name}
          data-tesid={testid}
          className="field__input"
          type="text"
        />
      </div>
      <ErrorMessage data-testid={`${testid} hiba`} name={name} component="p" />
    </div>
  )
}
