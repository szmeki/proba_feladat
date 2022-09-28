import { Children } from "../../types/Children"

export function Hello({ children }: { children: Children }) {
  return (
    <div id="hello" className="page__hello h5">
      {children}
    </div>
  )
}
