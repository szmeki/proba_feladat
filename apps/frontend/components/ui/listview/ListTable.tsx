import { Children } from "../../../types/Children"

export function ListTable({ children }: { children?: Children }) {
  return (
    <div className="products products_main">
      <div className="products__table">{children}</div>
      <div className="products__more">
        <button className="products__btn btn btn_black">Load More</button>
      </div>
    </div>
  )
}
