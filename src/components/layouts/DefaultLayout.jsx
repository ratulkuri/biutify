import { Outlet } from 'react-router-dom';
import Header from './partials/Header';

const DefaultLayout = () => {
  return (
    <>
        <div className="default-layout">
            <Header />
            <Outlet />
        </div>
    </>
  )
}

export default DefaultLayout;