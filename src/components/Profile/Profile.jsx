import {
  ProfileBox,
  DescriptionBox,
  UserImg,
  NameText,
  Text,
  StatsList,
  StatsItem,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar: imgUrl, username, tag, location }) => {
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
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </StatsItem>
        <StatsItem>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </StatsItem>
        <StatsItem>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};
