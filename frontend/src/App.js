import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';

// utilities
import RequireAuth from './utils/RequireAuth';
import PersistAuth from './utils/PersistAuth';

// pages
import Public from './components/Public';
import Login from './components/Login';
import Register from './features/auth/Register';

// protected pages
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';

// employee, admin specific pages
import CustomerList from './features/customers/CustomerList';
import RoomList from './features/rooms/RoomList';
import RoomAdd from './features/rooms/RoomAdd';

// admin specific pages
import EmployeeList from './features/employees/EmployeeList';
import EmployeeAdd from './features/employees/EmployeeAdd';

// profile page
import Profile from './features/profile/Profile';

// customer, employee, admin specific
import RoomView from './features/rooms/RoomView';
import MyBookings from './features/bookings/MyBookings';
import SingleBookingView from './features/bookings/SingleBookingView';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        <Route element={<PersistAuth />}>

          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route index element={<Welcome />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='rooms/:id' element={<RoomView />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='rooms' element={<RoomList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='my-bookings' element={<MyBookings />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='bookings/:bookingId' element={<SingleBookingView />} />
            </Route>
          </Route>

          {/* Employee & Admin Specific Routes */}

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='employee/customer-management' element={<CustomerList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='employee/room-management/add' element={<RoomAdd />} />
            </Route>
          </Route>

          {/* Admin Specific Routes */}

          <Route element={<RequireAuth allowedRoles={['Admin']} />}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='admin/employee-management' element={<EmployeeList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Admin']} />}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='admin/employee-management/add' element={<EmployeeAdd />} />
            </Route>
          </Route>

          {/* Profile Route */}
          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']} />}>
            <Route path='dash' element={<DashLayout />}>
              <Route path='profile' element={<Profile />} />
            </Route>
          </Route>

        </Route>

      </Route>
    </Routes>
  );
}


export default App;
