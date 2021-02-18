import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {Auth} from 'aws-amplify';
import {useState,useEffect} from 'react';


const Profile = () => {

  const [user,setUser] = useState(null)
  useEffect(()=> {
    checkUser()
  },[])
  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user)
  }
  if (!user) return null
  return (
    <div>
      <h1>Profile</h1>
      <h3>username: {user.username}</h3>
      <p>Email:{user.attributes.email}</p>
      <AmplifySignOut/>
    </div>
  )
}
export default withAuthenticator(Profile)