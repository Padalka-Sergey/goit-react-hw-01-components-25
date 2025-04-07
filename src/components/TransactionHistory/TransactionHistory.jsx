import PropTypes from 'prop-types';
import {
  Table,
  Tbody,
  RowBody,
  TdType,
  TdAmount,
  Th,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <RowBody key={id}>
            <TdType>{type}</TdType>
            <TdAmount>{amount}</TdAmount>
            <td>{currency}</td>
          </RowBody>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
