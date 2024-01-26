import './App.css';
import AppRouter from './pages/router/AppRouter';
import Navbar from './components/Navbar/Navbar';

function App() {

    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;
