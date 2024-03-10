import useProposalList from "./useProposalList";
import ProposalRow from "./ProposalRow";
import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";

const ProposalTable = () => {
  const { isLoading, proposals } = useProposalList();
  if (isLoading) return <Loading />;
  console.log(proposals);
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => {
          return (
            <ProposalRow proposal={proposal} index={index} key={proposal._id} />
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default ProposalTable;
