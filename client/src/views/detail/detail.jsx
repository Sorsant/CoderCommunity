import style from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostId, getUserId } from "../../components/Redux/Actions/Get/action-get";
import { useDispatch } from "react-redux";

const PostDetail = () => {

  const dispatch = useDispatch()

  const [user, setUser] = useState({})
  const [post, setPost] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(getUserId(id)).then(response => {
  //     setUser(response.payload)
  //   }).catch(error => {
  //     window.alert("User not found")
  //   })
  // }, [dispatch])

  useEffect(() => {
    dispatch(getPostId(id)).then(response => {
      setPost(response.payload)
    }).catch(error => {
      window.alert("Proyect not found")
    })
    dispatch(getUserId(id)).then(response => {
      setUser(response.payload)
    }).catch(error => {
      window.alert("User not found")
    })
  }, [dispatch, id]);

  return (
    <div className={style.postDetailContainer}>
      <h1>User: {user.first_name} {user.last_name} </h1>
      <h1>Email: {user.email}</h1>
      <h1 className={style.title}>Title: {post.title}</h1>
      <img src={post.image} alt={post.image} className={style.image} />
      <h3 className={style.description}>{post.description}</h3>
    </div>
  );
};

export default PostDetail;