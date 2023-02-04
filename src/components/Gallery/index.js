import Posting from './Posting';

function Gallery ({ postings }) {
  return (
    <div className="row">
      {postings.map((data, i) => (
        <div key={i} className="col-12 col-md-6 col-lg-4">
          <Posting {...data} />
        </div>
      ))}
    </div>
  )
}

export default Gallery;