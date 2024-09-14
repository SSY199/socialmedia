import { useContext } from "react";
import { PostListData } from "../store/post-list-store";
 import { useRef } from "react";

const Post = () => {

  const {addPost} = useContext(PostListData)

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userIdElement = userId.current.value;
    const postTitleElement = postTitle.current.value;
    const postBodyElement = postBody.current.valu;
    const postReactionsElement = postReactions.current.value;
    const postTagsElement = postTags.current.value.split(" ");

    userId.current.value = ""
    postTitle.current.value = ""
    postBody.current.value = ""
    postReactions.current.value = ""
    postTags.current.value = ""

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
          title: postTitleElement,
          body: postBodyElement,
          reactions: postReactionsElement,
          userId: userIdElement,
          tags: postTagsElement
        
      })
    })
    .then(res => res.json())
    .then(post => addPost(post));

    
    
  };

  return (<form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">User Name</label>
    <input type="text" ref={userId} className="form-control" id="userId" placeholder="Your username"/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitle} className="form-control" id="title" placeholder="What post you gonna create today!!!!!"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBody} rows={4} className="form-control" id="body" placeholder="Tell us more about it"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No. of Reactions</label>
    <input type="text" ref={postReactions} className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" ref={postTags} className="form-control" id="tags" placeholder="Enter tags using space"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
)
}
export default Post