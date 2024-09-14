import { useContext } from "react"
import ImagePost from "./ImagePost"
import { PostListData } from "../store/post-list-store"

const PostList = () => {
  const {postList} = useContext(PostListData)
  return (
    <>
    {postList.map((post) => <ImagePost key={post.id} post={post}/>)}
    </>
  )
}

export default PostList