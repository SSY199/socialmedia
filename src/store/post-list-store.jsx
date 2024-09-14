import { createContext, useReducer } from "react";
 
export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

  const postListReducer = (currentPostList, action) => {
     let newPostList = currentPostList;
    if (action.type === "DeletePost"){
      newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if(action.type === "AddPost"){
      newPostList = [action.payload,...currentPostList ]
    }
    return newPostList
  }
  

const PostListProvider = ({children}) =>{
  const [postList, dispatchPostList] = useReducer(postListReducer, defaultPostList)

  const addPost = ( post ) => {
    dispatchPostList ({
      type: 'AddPost',
      payload: post,
    })
  }

  const deletePost = (postId) => {
     dispatchPostList({
      type: 'DeletePost',
      payload: {
        postId,
      },
     })
  }

  return (
    <PostListData.Provider value={
      {postList: postList,
      addPost: addPost,
      deletePost: deletePost}
    }>
      {children}
      </PostListData.Provider>
  )
};

const defaultPostList = [{
  id: '1',
  title: 'Going To NYC',
  body: 'Thats how NYC looks like huh.',
  reactions: 25,
  userId: 'user-9',
  tags: ['Dream', 'Enjoying']
},
{
  id: '2',
  title: 'Placed at big tech company',
  body: 'Feels Incredible!!!!!.',
  reactions: 15,
  userId: 'user-8',
  tags: ['Unbelievable', 'Feels good']
},
{
  id: '3',
  title: 'Going To LONDON',
  body: 'It feels so good.',
  reactions: 10,
  userId: 'user-9',
  tags: ['Dream', 'Enjoying']
}]

export default PostListProvider