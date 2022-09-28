import Image from "next/image"
import { useRouter } from "next/router"
import { prependOnceListener } from "process"

import Logo from "../../../public/unity/img/logo.png"
import LogoWhite from "../../../public/unity/img/logo-sm.png"
import { MouseEventHandler, useEffect, useState } from "react"
import { ADDRGETNETWORKPARAMS } from "dns"

export function SidebarTop() {
  const [burgerToggle, setBurgerToggle] = useState("sidebar")
  const [pageToggle, setPageToggle] = useState("page")

  function burgerClick() {
    burgerToggle == "sidebar active"
      ? setBurgerToggle("sidebar")
      : setBurgerToggle("sidebar active")
  }

  function pageToggleClick() {
    pageToggle == "page toggle"
      ? setPageToggle("page ")
      : setPageToggle("page toggle")
  }

  function sidebarClick() {
    burgerClick()
    pageToggleClick()
  }

  useEffect(() => {
    document.getElementById("sidebar").className = burgerToggle
    document.getElementById("page").className = pageToggle
  })

  return (
    <div className="sidebar__top">
      <button className="sidebar__close" onClick={sidebarClick}>
        <svg className="icon icon-close">
          <use xlinkHref={`/unity/img/sprite.svg#icon-close`}></use>
        </svg>
      </button>
      <a className="sidebar__logo" href="index.html">
        <Image
          className="sidebar__pic sidebar__pic_black"
          src={Logo}
          alt=""
          width={80}
          height={80}
        />
      </a>
      <button className="sidebar__burger" onClick={sidebarClick}></button>
    </div>
  )
}
