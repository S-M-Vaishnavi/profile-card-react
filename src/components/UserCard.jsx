import { UserData } from '../data/UserData';
import User from './User';


const UserCard = () => {
  return (
    <div>
      {
        UserData.map((user,index)=>(
          <User key={index}
            profile={user.img}
            username={user.username}
            city={user.city}
            description={user.description}
            skills={user.skills}
            online={user.online}
          />
        ))
      }
    </div>
  )
}

export default UserCard;

