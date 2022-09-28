import { Children } from "../../../types/Children"

export function ListItem({ children }: { children?: Children }) {
  return <div className="products__cell">{children}</div>
}
