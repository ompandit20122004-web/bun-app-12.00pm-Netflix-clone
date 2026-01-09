import { useParams, useNavigate } from "react-router-dom";
import back_arrow_icon from "../../../assets/back_arrow_icon.png";
import "./Player.css";

const Player = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const openYoutube = () => {
    const movieTitle = decodeURIComponent(title);
    const query = encodeURIComponent(`${movieTitle} official trailer`);

    window.open(
      `https://www.youtube.com/results?search_query=${query}`,
      "_blank"
    );
  };

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="back"
        className="back-btn"
        onClick={() => navigate(-1)}
      />

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ color: "white" }}>
          Watch trailer on YouTube
        </h2>

        <button
          onClick={openYoutube}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Open YouTube
        </button>
      </div>
    </div>
  );
};

export default Player;
