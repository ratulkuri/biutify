import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import DefaultLayout from './components/layouts/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/errors/PageNotFound';
import AuthLayout from './components/layouts/AuthLayout';
import Login from './pages/auth/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path='/' element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
