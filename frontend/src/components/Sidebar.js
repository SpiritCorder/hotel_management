import {useDispatch, useSelector} from 'react-redux';
import {logoutAuthUser, selectAuthUser} from '../app/auth/authSlice';
import {Link} from 'react-router-dom';
import { MdDashboard, MdAccountCircle, MdOutlinePowerSettingsNew, MdSupervisedUserCircle, MdRoomPreferences, MdBedroomParent, MdBookmark } from "react-icons/md";
import {FaUsers} from 'react-icons/fa';


const Sidebar = () => {

    const dispatch = useDispatch();
    const {role} = useSelector(selectAuthUser);

    return (
        <aside className="dash-layout-sidebar">

            <button className='logout-btn' onClick={() => dispatch(logoutAuthUser())}>
                <MdOutlinePowerSettingsNew />
                Logout
            </button>

            <div className='sidebar-logo'>
                <img src='/img/logo.png' alt='logo' />
            </div>

            <nav className='sidebar-nav'>
                <ul>
                    <li>
                        <Link to='/dash'>
                            <MdDashboard />
                            Dashboard
                        </Link>
                    </li>

                    {role === 'Customer' && (
                        <>
                            <li>
                                <Link to='/dash/rooms'>
                                    <MdBedroomParent />
                                    Rooms
                                </Link>
                            </li>
                        </>
                    )}

                    <li>
                        <Link to='/dash/my-bookings'>
                            <MdBookmark />
                            My Bookings
                        </Link>
                    </li>
                    

                    {(role === 'Employee' || role === 'Admin') && (
                        <>
                            <li>
                                <Link to='/dash/employee/customer-management'>
                                    <FaUsers />
                                    Customer Management
                                </Link>
                            </li>
                            <li>
                                <Link to='/dash/rooms'>
                                    <MdRoomPreferences />
                                    Room Management
                                </Link>
                            </li>
                        </>
                    )}

                    {/* Admin Specific Navigations */}
                    {role === 'Admin' && (
                        <>
                            <li>
                                <Link to='/dash/admin/employee-management'>
                                    <MdSupervisedUserCircle />
                                    Employee Management
                                </Link>
                            </li>
                        </>
                    )}

                    
                    <li>
                        <Link to='/dash/profile'>
                            <MdAccountCircle />
                            My Profile
                        </Link>
                    </li>
                </ul>
            </nav>

        </aside>
    );
}

export default Sidebar;