import './Card.css';

function Card({link, poster, title}) {
  return (
    <a href={link} className='card'>
      <div className="poster">
        <img src={poster} alt={title} />
      </div>
      <span>{title}</span>
    </a>
  );
}

export default Card;
