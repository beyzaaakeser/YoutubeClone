import SideBar from '../components/SideBar.jsx';
import { useSearchParams } from 'react-router-dom';

const Results = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('search_query');
  console.log(query);

  return (
    <div className="flex gap-3">
      <SideBar />
      <div>sonuclar</div>
    </div>
  );
};

export default Results;
