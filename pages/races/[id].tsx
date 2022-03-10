import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Race = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Race id: {id}</h1>
    </Layout>
  );
};

export default Race;
