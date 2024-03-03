import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

const ProposalTable = ({ proposals }) => {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => {
          return <ProposalRow proposal={proposal} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default ProposalTable;
