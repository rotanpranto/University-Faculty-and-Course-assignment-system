import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useAdminAuthContext } from './hooks/useAdminAuthContext';
import Portals from './components/Portals';
import Admin from './components/Admin';
import Student from './components/Student';
import Faculty from './components/Faculty';
import AssignCourse from './components/AssignCourse';
import FacultCoursedetails from './components/FacultyCoursedetails';
import FacultyRequest from './components/FacultyRequest';
import LoginFaculty from './components/LoginFaculty';
import SignupFaculty from './components/SignupFaculty';
import LoginAdmin from './components/LoginAdmin';
import AdminRequest from './components/AdminRequest';
import AvailableFaculty from './components/AvaiilableFaculty';
import { useFacultyAuthContext } from './hooks/useFacultyAuthContext';
import CourseCurriculum from './components/CourseCurriculum';
function App() {
    const {userAdmin}= useAdminAuthContext()
    const{userFaculty}= useFacultyAuthContext()
    return ( 
    <div className = "App" >
           <BrowserRouter>
           <div className="pages">
           <Routes>
                  
                  <Route path="/" element={<Portals/>}/>
                  
                  <Route path="/Admin"element={ userAdmin ?<Admin/>:<Navigate to='/'/>}/>
                 
                  <Route path="/Student"element={<Student/>}/>
                
                 <Route path="/Faculty"element={userFaculty?<Faculty/>:<Navigate to='/'/>}/>
                 <Route path="/AssignCourse"element={userAdmin?<AssignCourse/>:<Navigate to='/'/>}/>
                 <Route path='/FacultCoursedetails' element={userFaculty?<FacultCoursedetails/>:<Navigate to='/'/>}/>
                 <Route path='/FacultyRequest' element={userFaculty?<FacultyRequest/>:<Navigate to='/'/>}/>
                 <Route path='/LoginFaculty' element={!userFaculty?<LoginFaculty/>:<Navigate to='/Faculty'/>}/>
                 <Route path='/SignupFaculty' element={<SignupFaculty/>}/>
                 <Route path='/LoginAdmin' element={ !userAdmin? <LoginAdmin/> : <Navigate to='/Admin'/>}/>
                 <Route path='/AdminRequest' element={userAdmin?<AdminRequest/>:<Navigate to='/'/>}/>
                 <Route path='/AvaiableFaculty' element={userAdmin?<AvailableFaculty/>:<Navigate to='/'/>}/>
                 <Route path='/CourseCurriculum' element={userAdmin?<CourseCurriculum/>:<Navigate to='/'/>}/>

                 
                 
            </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App;