export default function Card({ imageUrl, title, date }) {
  const formattedData = new Date(date)
    .toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();

  const displayUrl = imageUrl || "https://placehold.co/600x400/orange/white?text=Suitmedia";

  return (
    <div className="card">
      <img
        loading="lazy"
        src={displayUrl}
        alt={title}
        style={{ width: 100 + "%", height: 150 + "px", objectFit: "cover" }}
      />
      <div className="container">
        <p>{formattedData}</p>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
