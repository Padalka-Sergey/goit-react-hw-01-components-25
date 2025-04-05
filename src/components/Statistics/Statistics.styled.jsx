import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  width: 400px;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  font-size: 26px;
  color: white;
`;

export const StatName = styled.span`
  font-size: 18px;
`;

export const StatPercent = styled.span``;
