import FriendListItem from "components/FriendListItem/FriendListItem";
import PropTypes, {arrayOf} from "prop-types";

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
            ))}
        </ul>
    );
};
FriendList.propTypes = {
    friends: arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
  })).isRequired
}
export default FriendList;