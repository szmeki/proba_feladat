import { SidebarItem } from "../ui/sidebar/SidebarItem"
import MunkakorPopUp from "./cegesUjMunkakorPopUp"
import MunkakorForm from "./UjMunkakorForm"
import React, { useEffect, useState } from "react"

import { SidebarTop } from "../ui/sidebar/SidebarTop"
import { SidebarWrap } from "../ui/sidebar/SidebarWrap"
import { SidebarBottom } from "../ui/sidebar/SidebarBottom"

export function CegesSidebar() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <nav className="sidebar" id="sidebar">
      <SidebarTop />
      <SidebarWrap>
        <SidebarItem
          testid="Áttekintés"
          text="Áttekintés"
          icon="overview"
          href="/c"
        />
        <SidebarItem
          testid="Diákok"
          text="Diákok"
          icon="profile"
          href="/c/diakok"
        />
        <SidebarItem
          testid="Munkakörök"
          text="Munkakörök"
          icon="profile"
          href="/c/munkakorok"
        />
        <SidebarItem
          testid="Munkaidők"
          text="Munkaidők"
          icon="bell"
          href="/c/munkaidok"
        />
        <SidebarItem
          testid="Teljesítések"
          text="Teljesítések"
          icon="wallet"
          href="/c/teljesitesek"
        />
        <SidebarItem
          testid="Jelentkezők"
          text="Jelentkezők"
          icon="profile"
          href="/c/jelentkezok"
        />
        <SidebarItem
          testid="Kapcsolat"
          text="Kapcsolat"
          icon="message"
          href="#"
        />
        <SidebarItem
          testid="Kilépés"
          text="Kilépés"
          icon="logout"
          href="/logout"
        />
      </SidebarWrap>
      <SidebarBottom />
    </nav>
  )
}
