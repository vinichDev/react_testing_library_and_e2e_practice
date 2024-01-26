import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import AboutPage from '../AboutPage';
import UsersDetailsPage from '../UsersDetailsPage';
import ErrorPage from '../ErrorPage';
import UsersPage from '../UsersPage/UsersPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/users/:id'} element={<UsersDetailsPage/>}/>
            <Route path={'/*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;