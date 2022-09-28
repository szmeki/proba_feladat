import { Children } from "../../../types/Children"

export function SidebarWrap({ children }: { children?: Children }) {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__inner">{children}</div>
    </div>
  )
}
