
type ParamsProps = {
    username: string
}



const Profile = ({params} : {params: ParamsProps}) => {

 const username = params.username
 
  return (
    <div>Hi {username}</div>
  )
}

export default Profile