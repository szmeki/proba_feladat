import Link from "next/link"

export function ListTitle({
  title,
  createButton,
  buttonText,
  buttonID,
  buttonHref,
}: {
  title: string
  createButton: boolean
  buttonText?: string
  buttonID?: string
  buttonHref?: string
}) {
  return (
    <h1 id="ListCim">
      {title}
      {createButton && buttonHref && (
        <Link href={buttonHref}>
          <button id={buttonID} className="widget__btn btn btn_purple btn_wide">
            {buttonText}
          </button>
        </Link>
      )}
    </h1>
  )
}
