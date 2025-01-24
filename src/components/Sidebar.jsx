import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-black text-white p-4 col-2" style={{ width: '250px' }}>
      <ul className="list-unstyled p-4">
        <li className="pb-2"><Link to="/" className="text-white">Home</Link></li>
        <li className="pb-2"><Link to="/radio" className="text-white">Radio</Link></li>
        <li className="pb-2"><Link to="/favorites" className="text-white">Preferiti</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

