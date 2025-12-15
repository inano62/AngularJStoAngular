import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import CreateUserPage from './components/CreateUser';
import HomePage from './components/Home';
import FaceReaderPage from './components/FaceReader';

const Home = () => <HomePage />;
const CreateUser = () => <CreateUserPage/>;
const FaceReader = () => <FaceReaderPage/>;
const NotFound = () => <h2>Page Not Found</h2>;

function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/FaceReader">FaceReader</a></li>
            <li><a href="#/CreateUser">CreateUser</a></li>
            <li><a href="#/notfound">Not Found</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FaceReader" element={<FaceReader />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/notfound" element={<NotFound />} />

          {/* /old-page へのアクセスは /about にリダイレクト */}
          <Route path="/old-page" element={<Navigate to="/about" />} />

          {/* 存在しないページへのアクセスは /notfound にリダイレクト */}
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
//   <Route path="/" element={<Home />} />
//<Route path="/api/users/create" element={<CreateUser/>}/>