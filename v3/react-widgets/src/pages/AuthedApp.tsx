import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import { logout } from '../auth.ts';

export default function AuthedApp({ onLogout }: { onLogout: () => void }) {
  const doLogout = async () => {
    await logout();
    onLogout();
  };

  return (
    <MemoryRouter initialEntries={['/page1']}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <button onClick={doLogout}>Logout</button>
      </div>

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </MemoryRouter>
  );
}
