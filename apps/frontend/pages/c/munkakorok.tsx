import Link from "next/link"
import Image from "next/image"
import { useMunkakorok } from "../../api/munkakorok"
import { CegesPage } from "../../components/ceges/CegesPage"
import { MunkakorFejlec } from "../../components/ceges/MunkakorFejlec"
import { MunkakorListaElem } from "../../components/ceges/MunkakorListaElem"
import { Loader } from "../../components/ui/Loader"

import { useEffect, useState } from "react"
import { ListTable } from "../../components/ui/listview/ListTable"
import { ListHeadRow } from "../../components/ui/listview/ListHeadRow"
import { ListHeadItem } from "../../components/ui/listview/ListHeadItem"
import { ListRow } from "../../components/ui/listview/ListRow"
import { ListItem } from "../../components/ui/listview/ListItem"
import { ListItemSimpleText } from "../../components/ui/listview/ListItemSimpleText"
import { ListTitle } from "../../components/ui/listview/ListTitle"
import { start } from "repl"

import { Collections } from "@quantum/collections"
export type Munkakor = Collections["munkakorok"]

let limit = 5
let firstItem = 1
let filterStr = ""
let firstTime = true
let oldalSzam = ""
let matchingItems: Array<Munkakor> = []

export default function SzerzodesekPage() {
  const { data: munkakorok, error } = useMunkakorok()
  const [printedItems, setPrintedItems] = useState(Array<Munkakor>)

  function munkakorFilter(value: Munkakor) {
    return (
      filterStr.length == 0 ||
      value.nev?.includes(filterStr) ||
      value.oraber?.toString().includes(filterStr) ||
      value.status?.toString().includes(filterStr)
    )
  }

  function updateOldalSzam(x: Array<Munkakor>) {
    if (x && matchingItems) {
      x.length > 0
        ? x.length > 1
          ? (oldalSzam =
              firstItem.toString() +
              "-" +
              Math.min(firstItem + limit - 1, matchingItems?.length).toString())
          : (oldalSzam = firstItem.toString())
        : (oldalSzam = "-/-")
      console.log(oldalSzam)
    } else {
      oldalSzam = "-/-"
    }
  }

  function updateList() {
    if (munkakorok) {
      matchingItems = munkakorok.filter(munkakorFilter)
      const temp = matchingItems.slice(firstItem - 1, firstItem + limit - 1)
      if (temp.length > 0 || printedItems.length > 0) {
        updateOldalSzam(temp)
        setPrintedItems(temp)
      }
    }
  }

  function oldalClick(irany: string) {
    if (process.browser) {
      console.log(firstItem)
      setTimeout(() => {
        document.getElementById(irany)?.click()
      }, 60)
      if (munkakorok) {
        if (irany == "jobbra") {
          if (matchingItems.length >= firstItem + limit) {
            console.log(firstItem)
            firstItem = firstItem + limit
            console.log(firstItem)
          }
        } else {
          firstItem = Math.max(firstItem - limit, 1)
        }
        updateList()
      }
    }
    return undefined
  }

  function filterChanged(event) {
    firstItem = 1
    filterStr = event.target.value
    console.log(filterStr)
    updateList()
  }

  useEffect(() => {
    if (printedItems.length == 0) firstTime = true
    if (firstTime) {
      if (munkakorok) {
        updateList()
        firstTime = false
      }
    }
    console.log(munkakorok)
    console.log(matchingItems)
    console.log(printedItems)
  })

  function limitButtonClick(x: number) {
    if (process.browser) {
      document
        .getElementById("BT" + limit.toString())
        ?.classList.remove("limitActive")
      document.getElementById("BT" + x.toString())?.classList.add("limitActive")
    }
    limit = x
    console.log(limit)
    updateList()
  }

  return (
    <CegesPage>
      <div className="page__content">
        <div className="page__stat page__stat_pt32">
          <ListTitle
            title="Munkakörök"
            createButton={true}
            buttonHref="/c/munkakorok/uj"
            buttonID="UjMunkakorButton"
            buttonText="Új munkakör"
          />
          <div className="lapozoBar">
            <div className="buttonokOldal">
              <input id="balra" type="checkbox" className="buttonH button5H" />
              <label
                htmlFor="balra"
                onClick={() => oldalClick("balra")}
                className="buttonHapci buttonH button4H buttonLepteto noselect"
              >
                ◄
              </label>
              <button
                className="buttonHapci buttonH button3H buttonOldalak oldalSzamFont"
                id="oldalSzam"
              >
                {oldalSzam}
              </button>
              <input id="jobbra" type="checkbox" className="buttonH button5H" />
              <label
                htmlFor="jobbra"
                onClick={() => oldalClick("jobbra")}
                className="buttonHapci buttonH button4H buttonLepteto noselect"
              >
                ►
              </label>
            </div>

            <input
              id="filterSearch"
              onChange={filterChanged}
              value={filterStr}
              type="text"
              className="search pageSearch"
            />

            <div className="buttonokLimit row">
              <button
                id="BT5"
                onClick={() => limitButtonClick(5)}
                className="buttonHapci buttonH button2H limitActive"
              >
                5
              </button>
              <button
                id="BT10"
                onClick={() => limitButtonClick(10)}
                className="buttonHapci buttonH button2H"
              >
                10
              </button>
              <button
                id="BT25"
                onClick={() => limitButtonClick(25)}
                className="buttonHapci buttonH button2H"
              >
                25
              </button>
            </div>
          </div>
          {!!error && <>Hiba történt</>}
          {printedItems === undefined && <Loader />}
          <ListTable>
            {!!printedItems && printedItems.length != 0 && (
              <ListHeadRow>
                <ListHeadItem>Munkakör</ListHeadItem>
                <ListHeadItem>Órabér</ListHeadItem>
                <ListHeadItem>Státusz</ListHeadItem>
              </ListHeadRow>
            )}
            {!!printedItems &&
              printedItems.length != 0 &&
              printedItems.map((m) => (
                <ListRow key={m.id}>
                  <ListItem>
                    <ListItemSimpleText str={m.nev ?? undefined} />
                  </ListItem>
                  <ListItem>
                    <ListItemSimpleText
                      str={
                        m.oraber?.toString() ? m.oraber?.toString() + " Ft" : ""
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemSimpleText
                      str={m.status?.toString() ?? undefined}
                    />
                  </ListItem>
                </ListRow>
              ))}
          </ListTable>
        </div>
      </div>
    </CegesPage>
  )
}
