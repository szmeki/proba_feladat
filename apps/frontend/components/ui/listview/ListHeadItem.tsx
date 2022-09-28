import { Children } from "../../../types/Children"

export function ListHeadItem({ children }: { children?: Children }) {
  return <div className="products__cell">{children}</div>
}
