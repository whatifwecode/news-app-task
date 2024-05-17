import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearApiKey } from './authSlice';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/UI/modal/Modal';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    const handleLogout = () => {
        setShowLogoutModal(true)
    };

    const handleLogoutConfirm = () => {
        dispatch(clearApiKey());
        navigate('/');
        setShowLogoutModal(false)
    };

    const handleCloseLogoutModal = () => {
        setShowLogoutModal(false)
    };

    return (
        <>
            <button onClick={handleLogout} className='text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md mr-4'>Logout</button>
            {showLogoutModal && (
                <Modal onClose={handleCloseLogoutModal}>
                    <div className="text-center">
                        <p className="mb-4 text-gray-700">Are you sure you want to logout?</p>
                        <button onClick={handleLogoutConfirm} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2">Yes</button>
                        <button onClick={handleCloseLogoutModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md">No</button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Logout
