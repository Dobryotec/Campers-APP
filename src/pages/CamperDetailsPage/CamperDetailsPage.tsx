import { Link, Outlet } from 'react-router-dom';

const CamperDetailsPage: React.FC = () => {
  return (
    <div>
      <Link to="reviews">Reviews</Link>
      <Link to="features">Features</Link>
      <Outlet />
    </div>
  );
};

export default CamperDetailsPage;
