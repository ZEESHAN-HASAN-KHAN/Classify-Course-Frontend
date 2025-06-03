import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import AddCourse from './pages/AddCourse';
import CourseDetail from './pages/CourseDetails';
import MyCourses from './pages/MyCourses';
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <>
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/courses/:id" element={<CourseDetail />} />
<Route path="/my-courses" element={<MyCourses />} />

          <Route path="/admin/add-course" element={<AddCourse />} />
          <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
