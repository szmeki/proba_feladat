import Image, { StaticImageData } from "next/image"

export function ListItemImgTwoText({
  img,
  title,
  caption,
  width,
  heigth,
}: {
  img: StaticImageData
  title: string
  caption: string
  width?: number
  heigth?: number
}) {
  return (
    <a className="products__item" href="#">
      <div className="products__preview">
        {width && heigth && (
          <Image
            className="products__pic"
            src={img}
            alt=""
            width={width}
            height={heigth}
          />
        )}
        {(!width || !heigth) && (
          <Image
            className="products__pic"
            src={img}
            alt=""
            width={60}
            height={60}
          />
        )}
      </div>
      <div className="products__details">
        <div className="products__title title">{title}</div>
        <div className="products__info caption color-gray">{caption}</div>
      </div>
    </a>
  )
}
