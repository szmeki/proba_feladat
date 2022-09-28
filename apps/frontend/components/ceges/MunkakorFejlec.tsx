import { ListHeadItem } from "../ui/listview/ListHeadItem"
import { ListHeadRow } from "../ui/listview/ListHeadRow"
import { ListTable } from "../ui/listview/ListTable"
import { ListRow } from "../ui/listview/ListRow"
import { ListItem } from "../ui/listview/ListItem"

import { ListItemImgTwoText } from "../ui/listview/ListItemImgTwoText"
import { ListItemSimpleText } from "../ui/listview/ListItemSimpleText"

import Logo from "../../public/unity/img/logo.png"
import { ListItemColor } from "../ui/listview/ListItemColor"
import { ListItemHighlightedText } from "../ui/listview/ListItemHighlightedText"
import { ListItemRating } from "../ui/listview/ListItemRating"

export function MunkakorFejlec() {
  return (
    <ListTable>
      <ListHeadRow>
        <ListHeadItem>Product</ListHeadItem>
        <ListHeadItem>Amount</ListHeadItem>
        <ListHeadItem>Color</ListHeadItem>
        <ListHeadItem>Price</ListHeadItem>
        <ListHeadItem>Rating</ListHeadItem>
      </ListHeadRow>
      <ListRow>
        <ListItem>
          <ListItemImgTwoText title="Alma" caption="körte" img={Logo} />
        </ListItem>
        <ListItem>
          <ListItemSimpleText str="banán" />
        </ListItem>
        <ListItem>
          <ListItemColor colorCode="#2ae" colorName="kék" />
        </ListItem>
        <ListItem>
          <ListItemHighlightedText str="yep" strHigh="Yeeet" comment="???" />
        </ListItem>
        <ListItem>
          <ListItemRating rating="5.0" voteCount="32" />
        </ListItem>
      </ListRow>
    </ListTable>
  )
}
