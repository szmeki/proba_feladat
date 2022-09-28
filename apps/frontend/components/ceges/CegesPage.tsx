import { Children } from "../../types/Children"
import { CegesSidebar } from "./CegesSidebar"
import { Page } from "../ui/Page"
import { PageContent } from "../ui/PageContent"
import { Hello } from "../ui/Hello"
import { Welcome } from "../ui/Welcome"

export function CegesPage({
  children,
  welcome,
  hello,
}: {
  children: Children
  welcome?: string
  hello?: string
}) {
  return (
    <Page>
      <CegesSidebar />
      <PageContent>
        {hello != null && <Hello>{hello}</Hello>}
        {welcome != null && <Welcome>{welcome}</Welcome>}
        {children}
      </PageContent>
    </Page>
  )
}
