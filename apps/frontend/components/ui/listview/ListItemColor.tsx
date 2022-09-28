export function ListItemColor({
  colorCode,
  colorName,
}: {
  colorCode: string
  colorName: string
}) {
  return (
    <div className="products__color">
      <div
        className="products__bg"
        style={{ backgroundColor: colorCode }}
      ></div>
      <div className="products__text">{colorName}</div>
    </div>
  )
}
