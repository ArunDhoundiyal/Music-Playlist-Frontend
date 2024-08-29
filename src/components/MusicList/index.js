import './index.css'

const MusicList = ({eachMusic, passIdForDelete}) => {
  const {id, imageUrl, name, genre, duration} = eachMusic
  const onClickDelete = () => {
    passIdForDelete(id)
  }
  return (
    <li className="list-item-container">
      <div className="img-card-container">
        <img className="songs-img" src={imageUrl} alt={name} />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-button-duration-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={onClickDelete}
        >
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1724947531/delete-removebg-preview-removebg-preview_vh7uge.png"
            alt="track"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default MusicList
