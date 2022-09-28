import { Children } from "../../../types/Children"

export function ListHeadRow({ children }: { children?: Children }) {
  return (
    <div className="products__row products__row_head">
      <div className="products__cell">
        <label className="checkbox">
          <input className="checkbox__input" type="checkbox" />
          <span className="checkbox__in">
            <span className="checkbox__tick"></span>
          </span>
        </label>
      </div>
      {children}
    </div>
  )
}
