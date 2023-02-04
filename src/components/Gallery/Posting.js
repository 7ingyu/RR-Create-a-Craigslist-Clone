export default function Posting ({ title, description, price, imageURL }) {
  return (
    <div className="card">
      <img src={imageURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle fw-bold">{price}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}