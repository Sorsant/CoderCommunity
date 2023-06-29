import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const PostCard = ({ id }) => {
  const loggin = useSelector((state) => state.loggin);
  const users = useSelector((state) => state.home.users);
  const post = useSelector((state) => state.home.posts.find((post) => post.id === id));
  const userExtra = useSelector((state) => state.home.userExtra)

  if (!post) {
    // No se encontró la publicación correspondiente al ID proporcionado
    return null;
  }

  const user = users.find((user) => user.id === post.user);
  const userE = userExtra.find((user) => user.id === post.user);

  if (!user) {
    // No se encontró el usuario correspondiente a la publicación
    return null;
  }

  const handleMoreInfo = () => {
    if (loggin) {
      // Si el usuario está logueado, redirige a `/detail/${id}`
      window.location.href = `/detail/${id}`;
    } else {
      // Si el usuario no está logueado, muestra el componente de login
      window.location.href = `/login`;
    }
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.cardContainer} key={post.id}>
        <div className={styles.userContainer}>
          <img src={userE.user_image} alt={userE.name} />
          <h2>{user.first_name} {user.last_name}</h2>
          {userE.premium && userE.postulation && (
            <p>
              <Link to={`/instructor/${userE.id}`}>
                <button> Puedes pagarle a este instructor</button>
              </Link>
            </p>
          )}
        </div>

        <div className={styles.postContainer}>
          <h2>{post.title}</h2>
          <h2>{post.description}</h2>
          <img src={post.image} alt={post.title} />

          <Link to={`/detail/${id}`} onClick={handleMoreInfo} className={styles.linkDetail}>
            <h2 className={styles.text4}>More Info</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;