import Image from "next/image"
import Icon from "../../../public/unity/img/chat-black.svg"

export function ListItemHighlightedText({
  str,
  strHigh,
  comment,
}: {
  str: string
  strHigh: string
  comment: string
}) {
  return (
    <div className="products__cost">
      <div className="products__money">{str}</div>
      <div className="products__tooltip">
        <div className="products__sale">
          <div className="products__icon bg-red">
            <Image
              className="products__pic"
              src={Icon}
              alt=""
              width={8}
              height={8.88}
            />
          </div>
          <div className="products__caption caption-sm">{comment}</div>
        </div>
        <div className="products__price h3">{strHigh}</div>
        <div className="products__progress">
          <span style={{ width: "68%" }}></span>
        </div>
      </div>
    </div>
  )
}
