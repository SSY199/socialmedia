import "bootstrap/dist/css/bootstrap.min.css"
import Head from "./component/Head"
import Footer from "./component/Footer"
import Sidebar from "./component/Sidebar"
import Post from "./component/Post"
import PostList from "./component/PostList"
import './App.css'
import { useState } from "react"
import PostListProvider from "./store/post-list-store"

function App() {
   
  const [selectedTab, setSelectedTab ] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container"> 
       <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}></Sidebar>
       <div className="page">
       <Head></Head>
       {selectedTab === 'Home' ? 
       <PostList></PostList> : <Post></Post>}
       <Footer></Footer>
       </div>
    </div>
    </PostListProvider>
  )
}

export default App
