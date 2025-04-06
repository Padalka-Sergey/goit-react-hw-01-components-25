// import PropTypes from 'prop-types';
import {
  FriendItem,
  PhotoFriend,
  FriendName,
  ImgStatus,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <ImgStatus isOnline={isOnline}></ImgStatus>
      <PhotoFriend src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
