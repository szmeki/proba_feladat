import { Children } from "../../types/Children"
import { DolgozoSidebar } from "./DolgozoSidebar"
import { Page } from "../ui/Page"
import { PageContent } from "../ui/PageContent"

export function DolgozoPage({ children }: { children: Children }) {
  return (
    <Page>
      <DolgozoSidebar />
      <PageContent>{children}</PageContent>
    </Page>
  )
}
