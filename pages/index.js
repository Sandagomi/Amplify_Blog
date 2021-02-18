import {useState,useEffect} from 'react';
import Link from "next/link";
import { API } from 'aws-amplify';
import { listPosts } from '../graphql/queries';


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetchPosts()
  }, [])
  const fetchPosts = async () => {
    const postData = await API.graphql({
      query: listPosts
    })
    setPosts(postData.data.listPosts.items)
    console.log(postData)
  }
  console.log(posts)
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">posts</h1>
      {
        posts.map((post,index)=>(
          <Link key={index} href={`/posts/${post.id}`}>
            <div className="cursor-pointer border-b border-gray-300 mt-8 pb-4">
              <h2 className="text-x1 font-bold">{post.title}</h2>
              <p className="text-x1 font-bold">{post.content}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home;