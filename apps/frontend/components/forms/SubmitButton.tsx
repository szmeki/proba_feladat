import { useFormikContext } from "formik"

export default function SubmitButton({ text }: { text: string }) {
  const { isSubmitting } = useFormikContext()
  return (
    <button
      data-testid="Submit button"
      className="popup__btn btn btn_black"
      type="submit"
      disabled={isSubmitting}
    >
      {text}
    </button>
  )
}
