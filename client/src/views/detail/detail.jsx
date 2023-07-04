import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostIds } from "../../components/Redux/Actions/ActionHome";
import { getUserId } from "../../components/Redux/Actions/User/actionUser";
import { resetPostData } from "../../components/Redux/Actions/User/actionUser";
import style from "./detail.module.css";
import EditPost from "../EditPost/EditPost";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.home.users);
  const post = useSelector((state) => state.home.posts);
  const [postId, setPostId] = useState({});
  const [isReady, setIsReady] = useState(false);
  const userId = useSelector((state) => state.userdb.user?.id);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(getPostIds(id));

    return () => {
      dispatch(resetPostData());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (post && post.user) {
      dispatch(getUserId(post.user));
      setPostId(post);
      setIsReady(true);
    }
  }, [dispatch, post]);

  const handleGoBack = () => {
    navigate(-2);
  };

  const isCurrentUserCreator = post.user === userId;

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  return (
    <div className={style.postDetailContainer}>
      <h1>User: {user && user.first_name} {user && user.last_name}</h1>
      <h1>Email: {user && user.email}</h1>

      <h1 className={style.title}>Title: {post && post.title}</h1>
      <img src={post && post.image} alt={post && post.image} className={style.image} />
      <h3 className={style.description}>{post && post.description}</h3>
      <button onClick={handleGoBack}>Back</button>

      {/* Botón "Edit" solo para el creador del post */}
      {isCurrentUserCreator && !showEditForm && (
        <button onClick={handleEditClick}>Edit</button>
      )}

      {showEditForm && (
        <div>
          <EditPost postId={postId} />
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
