import Link from "next/link"
import { useRouter } from "next/router"
import { prependOnceListener } from "process"

export function SidebarItem({
  testid,
  href,
  text,
  icon,
}: {
  testid: string
  href: string
  text: string
  icon: string
}) {
  const router = useRouter()
  const active = href === router.pathname

  return (
    <Link href={href}>
      <a
        data-testid={testid}
        className={`sidebar__item ${active ? "active" : ""}`}
      >
        <div className="sidebar__icon">
          <svg className="icon icon-bag">
            <use xlinkHref={`/unity/img/sprite.svg#icon-${icon}`}></use>
          </svg>
        </div>
        <div className="sidebar__text">{text}</div>
      </a>
    </Link>
  )
}
