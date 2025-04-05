import PropTypes from 'prop-types';
import {
  ProfileBox,
  DescriptionBox,
  UserImg,
  NameText,
  Text,
  StatsList,
  StatsItem,
  StatsText,
  StatsNum,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar: imgUrl, username, tag, location, stats }) => {
  return (
    <ProfileBox>
      <DescriptionBox>
        <UserImg src={imgUrl} alt={username} />
        <NameText>{username}</NameText>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </DescriptionBox>

      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsNum>{stats.followers}</StatsNum>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsNum>{stats.views}</StatsNum>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsNum>{stats.likes}</StatsNum>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
