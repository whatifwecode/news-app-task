import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectApiKey } from '../features/auth/authSlice';
import Logout from '../features/auth/Logout';

const Navbar = () => {
    const apiKey = useAppSelector(selectApiKey) ?? sessionStorage.getItem('apiKey');

    return (
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex">
                    <Link
                        to={apiKey ? "/news" : "#"}
                        className={`text-white ${!apiKey && 'opacity-50 pointer-events-none'}`}
                    >
                        Top News
                    </Link>
                    <Link
                        to={apiKey ? "/global-news" : "#"}
                        className={`ml-4 text-white ${!apiKey && 'opacity-50 pointer-events-none'}`}
                    >
                        Global News
                    </Link>
                </div>
                <div>
                    {apiKey ? (
                        <Logout />
                    ) : (
                        <Link to="/" className="text-white">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
