import PropTypes from 'prop-types';
import { FriendItems } from 'components/FriendList/FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendItems>
      {friends.map(({ avatar, name, isonline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isonline={+isonline}
          key={id}
        />
      ))}
    </FriendItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      // PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isonline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
