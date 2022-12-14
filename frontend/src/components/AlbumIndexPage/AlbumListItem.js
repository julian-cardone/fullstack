import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";

function AlbumListItem({ album }) {
  // const history = useHistory(); 

  const { albumName, artistId, year } = album;
  
  const [artistName, setArtistName] = useState("");

    useEffect(() => {
        csrfFetch(`/api/artists/${artistId}`)
        .then(res => res.json())
        .then(data => setArtistName(data.artistName))
      },[artistId])

  return (
    <div className="album-container">
      <div className="gradient-div"></div>
          <div className="album-outer">
            <div className="album-cover">
              <div className="album-cover-inner">
                <img className="album-image"src="photo"alt="album-cover"></img>
              </div>
            </div>
            <div className="song-info">
              <a className="album-title-link"href="/">
                <div className="title-album-index">{albumName}</div>
              </a>
            <div className="artist-name-index-page">{artistName}</div>
            </div>
          </div>
        </div>
  )

  // return (
  //   <div
  //     className={"bench-list-item" + (isHighlighted ? " highlighted" : "")}
  //     onClick={() => history.push(`/benches/${bench.id}`)}
  //     onMouseEnter={() => setHighlightedBench(bench.id)}
  //     onMouseLeave={() => setHighlightedBench(null)}
  //   >
  //     <div className="list-item-info">
  //       <h2>{title}</h2>
  //       <div className="list-item-fields">
  //         <div className="info-field">
  //           <span className="list-item-category">Average Rating:</span>
  //           <span className="list-item-copy">
  //             {averageRating || 'No reviews yet'}
  //           </span>
  //         </div>
  //         <div className="info-field">
  //           <span className="list-item-category">Price:</span>
  //           <span className="list-item-copy">${price}</span>
  //         </div>
  //       </div>
  //     </div>
  //     {photoUrl && <img src={photoUrl} alt='Bench'/>}
  //   </div>
  // );
}

export default AlbumListItem;