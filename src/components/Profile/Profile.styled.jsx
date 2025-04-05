import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 400px;
  background-color: #cce5e2;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-bottom: 20px;
`;

export const UserImg = styled.img`
  width: 150px;
`;

export const NameText = styled.p`
  font-weight: 500;
  margin: 10px 0;
`;
export const Text = styled.p`
  margin: 0;
  margin-top: 10px;
  color: #4e4c4c;
  font-size: 30px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  /* margin-bottom: 15px; */
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 33.3%;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: #b4b2b2 solid 1px;
  &:not(:last-child) {
    border-right: #b4b2b2 solid 1px;
  }
`;

export const StatsText = styled.span`
  font-size: 22px;
  color: #4e4c4c;
`;
export const StatsNum = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: black;
`;
