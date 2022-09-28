import { SidebarItem } from "../ui/sidebar/SidebarItem"
import { SidebarTop } from "../ui/sidebar/SidebarTop"
import { SidebarWrap } from "../ui/sidebar/SidebarWrap"
import { SidebarBottom } from "../ui/sidebar/SidebarBottom"

export function DolgozoSidebar() {
  return (
    <nav className="sidebar" id="sidebar">
      <SidebarTop />
      <SidebarWrap>
        <SidebarItem
          testid="Áttekintés"
          text="Áttekintés"
          icon="overview"
          href="/d"
        />
        <SidebarItem
          testid="Szerződések"
          text="Szerződések"
          icon="profile"
          href="/d/szerzodesek"
        />
        <SidebarItem
          testid="Jelenléti ívek"
          text="Jelenléti ívek"
          icon="document"
          href="/d/jelenlet"
        />
        <SidebarItem
          testid="Fizetések"
          text="Fizetések"
          icon="bell"
          href="/d/fizetes"
        />
        <SidebarItem
          testid="Aktuális havi jelenlét"
          text="Aktuális havi jelenlét"
          icon="wallet"
          href="/d/fizetes"
        />
      </SidebarWrap>
      <SidebarBottom />
    </nav>
  )
}
