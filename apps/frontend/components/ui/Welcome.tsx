import { Children } from "../../types/Children"

export function Welcome({ children }: { children: Children }) {
  return (
    <div id="welcome" className="page__welcome h2">
      {children}
    </div>
  )
}
