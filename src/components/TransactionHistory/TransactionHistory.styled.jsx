import styled from 'styled-components';

export const Table = styled.table`
  margin-bottom: 40px;
  width: 700px;
  font-size: 14px;
  background-color: #ffffff;
  border-collapse: collapse;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.75);
`;

export const Tbody = styled.tbody`
  text-align: center;
  font-size: 12px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  color: #3f3e3e;
`;

export const Th = styled.th`
  width: 33.3%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #52abef;
  color: white;
  text-transform: uppercase;
  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const RowBody = styled.tr`
  &:nth-child(2n) {
    background-color: #dcdcdc;
  }
`;

export const TdType = styled.td`
  border-right: 1px solid lightgrey;
  padding-top: 10px;
  padding-bottom: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TdAmount = styled.td`
  border-right: 1px solid lightgrey;
`;
