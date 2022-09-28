import { Children } from "../../types/Children"

export function Page({ children }: { children?: Children }) {
  return (
    <div className="page" id="page">
      {children}
      <script id="stripe-js" src="https://js.stripe.com/v3/" />
    </div>
  )
}
