import style from "./profile.module.css";
import imagen from "./default.png";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <div>
      <header className={style.header}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Profile</h1>
        </div>
        <div className={style.containerButton}>
          <Link to="/edit">
            <button className={style.edit}>Edit</button>
          </Link>
        </div>
      </header>

      <div className={style.profile}>
        <div className={style.profile_info}>
          <h2 className={style.profile_name}>John Doe</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>PostgresSQL</li>
          </ul>
          <p className={style.profile_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            euismod arcu at bibendum.
          </p>
        </div>
        <div className={style.profile_picture}>
          <img src={imagen} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
