import styled from 'styled-components';

export const FriendItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 5px 2px rgba(150, 150, 150, 1);
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const setColorCircle = props => {
  switch (Boolean(props.isonline)) {
    case true:
      return 'green';

    case false:
      return 'red';

    default:
      return 'black';
  }
};

export const ImgStatus = styled.span`
  width: 26px;
  height: 26px;
  margin: 0 30px;
  border-radius: 50%;
  background-color: ${setColorCircle};
`;

export const PhotoFriend = styled.img`
  width: 80px;
  height: 80px;
`;

export const FriendName = styled.p`
  margin-left: 40px;
  font-size: 30px;
`;
