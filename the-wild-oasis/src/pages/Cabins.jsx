import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';

const Cabins = () => {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
