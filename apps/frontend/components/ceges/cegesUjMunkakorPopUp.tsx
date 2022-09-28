import React from "react"
import { SidebarItem } from "../ui/SidebarItem"

export default function CegesUMunkakorPopUp(props) {
  return (props.trigger) ? (
  <div>
    <SidebarItem
    testid="Új munkakör"
    text="Új munkakör"
    icon="profile"
    href=""
    />
    
    <div className="popup" onClick={() => props.setTrigger(true)}>
      <div onClick={() => props.setTrigger(false)}>
        {props.children}
      </div>
    </div>
  </div>
  ) : 
  <div onClick={() => props.setTrigger(true)}>
    <SidebarItem
    testid="Új munkakör"
    text="Új munkakör"
    icon="profile"
    href=""
    />
  </div>;
}

