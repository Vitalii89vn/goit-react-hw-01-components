import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList"
import user from 'user.json';
import data from 'data.json';
import friendslist from 'friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
   />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friendslist} />
    </div>
  );
};
console.log(friendslist)