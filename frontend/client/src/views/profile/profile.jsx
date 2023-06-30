import style from "./profile.module.css";
import imagen from "./default.png";
import { Link } from "react-router-dom";
import { ProductDisplay } from "../../components/Payment/payment";
import { useDispatch, useSelector } from "react-redux";
import {
  Instructor,
  notInstructor,
} from "../../components/Redux/Actions/ActionHome";
import { useState, useEffect } from "react";

const Profile = () => {
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const dispatch = useDispatch();

  const [instructorChecked, setInstructorChecked] = useState(
    extra?.postulation || false
  );

  useEffect(() => {
    setInstructorChecked(extra?.postulation || false);
  }, [extra]);

  const handleCheckboxChange = () => {
    setInstructorChecked(!instructorChecked);
  };

  const handleButtonClick = () => {
    try {
      if (instructorChecked) {
        dispatch(Instructor(extra.id));
      } else {
        dispatch(notInstructor(extra.id));
      }
      console.log("Propiedad cambiada exitosamente");
      // Recargar la página para refrescar los datos
      window.location.reload();
    } catch (error) {
      console.error("Error al cambiar la propiedad:", error);
    }
  };

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
        {extra && extra.premium ? (
          <div>
            <label htmlFor="instructorCheckbox">Instructor</label>
            <input
              type="checkbox"
              id="instructorCheckbox"
              checked={instructorChecked}
              onChange={handleCheckboxChange}
            />
            <button onClick={handleButtonClick}>Guardar</button>
          </div>
        ) : (
          <ProductDisplay />
        )}
      </header>

      <div className={style.profile}>
        <div className={style.profile_info}>
          <h2 className={style.profile_name}>
            {user && user.first_name ? user.first_name : <p>loading...</p>}{" "}
            {user && user.last_name ? user.last_name : <p>loading...</p>}
          </h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>PostgresSQL</li>
          </ul>
          <p className={style.profile_description}>
            Si estas leyendo esto, sos un capo, sabelo
          </p>
        </div>
        <div className={style.profile_picture}>
          {extra && extra.user_image ? (
            <img src={extra.user_image} alt="" />
          ) : (
            <img src={imagen} alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
