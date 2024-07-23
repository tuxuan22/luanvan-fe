import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Contact, Promotion, Homepage, Flight, Passenger } from './containers/Public'
import { AdminLayout, ManageFlight, CreateFlight, ManageUser, ManageBooking, Dashboard, Test } from './containers/Admin'
import { MemberLayout, Personal, MyBooking } from './containers/Member'
import { path } from './utils/constant'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<Home />} >
          <Route path='*' element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.PROMOTION} element={<Promotion />} />
          <Route path={path.FLIGHT} element={<Flight />} />
          <Route path={path.PASSENGER} element={<Passenger />} />
        </Route>
        <Route path={path.ADMIN} element={<AdminLayout />}>
          <Route path={path.DASHBOARD} element={<Dashboard />} />
          <Route path={path.MANAGE_FLIGHT} element={<ManageFlight />} />
          <Route path={path.CREATE_FLIGHT} element={<CreateFlight />} />
          <Route path={path.MANAGE_USER} element={<ManageUser />} />
          <Route path={path.MANAGE_BOOKING} element={<ManageBooking />} />
          <Route path={path.TEST} element={<Test />} />
        </Route>
        <Route path={path.MEMBER} element={<MemberLayout />} >
          <Route path={path.PERSONAL} element={<Personal />} />
          <Route path={path.MYBOOKING} element={<MyBooking />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
