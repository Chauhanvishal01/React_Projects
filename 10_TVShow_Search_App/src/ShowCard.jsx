import React from 'react';

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      {show.image && <img src={show.image.medium} alt={show.name} />}
      <h3>{show.name}</h3>
      <p>{show.summary && show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      <p><strong>Language:</strong> {show.language}</p>
      <p><strong>Genres:</strong> {show.genres.join(", ")}</p>
      <p><strong>Type:</strong> {show.type}</p>
      {show.schedule.days.length > 0 && (
        <p><strong>Days:</strong> {show.schedule.days.join(", ")}</p>
      )}
    </div>
  );
}

export default ShowCard;
