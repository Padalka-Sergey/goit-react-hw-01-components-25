import PropTypes from 'prop-types';
import {
  FriendItem,
  PhotoFriend,
  FriendName,
  ImgStatus,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isonline }) => {
  return (
    <FriendItem>
      <ImgStatus isonline={isonline}></ImgStatus>
      <PhotoFriend src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isonline: PropTypes.number.isRequired,
};
