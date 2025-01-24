import "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/store/favoritesSlice";
import { playTrack } from "../redux/store/playerSlice"; 

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex flex-column bg-black text-white"
      style={{ minHeight: "100vh" }}
    >
      <nav className="navbar navbar-dark bg-black p-3"></nav>

      <div className="d-flex flex-grow-1">
        <div className="flex-grow-1 p-4 w-100">
          <h2 className="text-center">Brani Preferiti</h2>
          <ul className="list-group">
            {favorites.length > 0 ? (
              favorites.map((track) => (
                <li
                  key={track.id}
                  className="list-group-item d-flex justify-content-between align-items-center bg-black text-white border-secondary"
                >
                  <span>
                    {track.title} - {track.artist.name}
                  </span>
                  <div>
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => dispatch(playTrack(track))} 
                    >
                      Play
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(removeFavorite(track))} 
                    >
                      Rimuovi
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center mt-3">
                Nessun brano aggiunto ai preferiti.
              </p>
            )}
          </ul>
        </div>
      </div>
      <div className="player bg-black text-white p-3 fixed-bottom">
        Nessun brano in riproduzione
      </div>
    </div>
  );
};

export default Favorites;

