import { useEffect } from "react"

export function SidebarBottom() {
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "on") {
      document.body.classList.add("dark")
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".js-switch-theme input").checked = true
      })
    }
  }, [])
  ;(function () {
    var switchTheme = $(".js-switch-theme"),
      body = $("body")

    switchTheme.on("change", function () {
      if (!body.hasClass("dark")) {
        body.addClass("dark")
        localStorage.setItem("darkMode", "on")
      } else {
        body.removeClass("dark")
        localStorage.setItem("darkMode", "off")
      }
    })
  })

  let bodyElement: Node
  function switchTheme() {
    if (process.browser) {
      if (!bodyElement) bodyElement = document.getElementsByTagName("body")[0]
      if (bodyElement) {
        if (bodyElement.classList.contains("dark")) {
          bodyElement.classList.remove("dark")
          localStorage.setItem("darkMode", "off")
        } else {
          bodyElement.classList.add("dark")
          localStorage.setItem("darkMode", "on")
        }
      }
    }
  }

  return (
    <div className="sidebar__bottom">
      <label className="switch switch_theme js-switch-theme">
        <input
          className="switch__input"
          type="checkbox"
          onChange={switchTheme}
        />
        <span className="switch__in">
          <span className="switch__box"></span>
          <span className="switch__icon">
            <svg className="icon icon-moon">
              <use xlinkHref={`/unity/img/sprite.svg#icon-${"moon"}`}></use>
            </svg>
            <svg className="icon icon-sun">
              <use xlinkHref={`/unity/img/sprite.svg#icon-${"sun"}`}></use>
            </svg>
          </span>
        </span>
      </label>
    </div>
  )
}
