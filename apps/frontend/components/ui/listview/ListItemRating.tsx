export function ListItemRating({
  rating,
  voteCount,
}: {
  rating: string
  voteCount: string
}) {
  return (
    <div className="products__rating">
      <span className="color-green">{rating}</span> ({voteCount} votes)
    </div>
  )
}
