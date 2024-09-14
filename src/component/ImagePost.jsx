import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";

const ImagePost = ({post}) => {

  const {deletePost} = useContext(PostListData)

   return (
  <div className="card post-card" style={{width: "30rem"}}>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
           
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
        <MdDelete />
          <span className="visually-hidden">unread messages</span>
        </span>
       

      <p className="card-text">{post.body}</p>
      {post.tags.map(tags=>
      <button key={tags} type="button" className="btn btn-primary hashtag">{tags}</button>)}
          <div className="alert alert-primary reactions" role="alert">
     This post has been reacted by {post.reactions} people
    </div>
    </div>
  </div>
  )
  }

  export default ImagePost