import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
  import Dashboard from './components/Dashboard/Dashboard.jsx';
import Holiday from './components/Holidays/Holiday.jsx';
import Leave from './components/Leaves/Leave.jsx';
import Expenses from './components/Expenses/expenses.jsx'; 
 import Setting from './components/Setting/setting.jsx';
 import Project from './components/Project/project.jsx';
 import Ticket from './components/Ticket/Ticket.jsx';
 import Alert from './components/Alert/alert.jsx';
 import Event from './components/Event/event.jsx';


//Admin Section
//import Adashboard from './components/Admin/Dashboard/Adashboard.jsx';
//import Aholiday from './components/Admin/Aholidays/Aholiday.jsx';
// import Anotice from './components/Admin/Anotice/Anotice.jsx';
//mport Add from './components/Admin/AddEmp/Add.jsx';
// import Asetting from './components/Admin/Asetting/Asettings.jsx';
//import Aleave from './components/Admin/ALleaves/Aleave.jsx';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    
    <Router>
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <div className='content'> */}
      <Header OpenSidebar={OpenSidebar}/>





      
      <Routes>
         <Route path="/" element={<Dashboard />} />
          <Route path="/event" element={<Event />} />
          <Route path="/alert" element={<Alert />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/Holiday" element={<Holiday/>} />
          {/* <Route path="/Notice" elemessnt={<Notice/>} /> */}
          <Route path="/Leave" element={<Leave/>} />
          {/* <Route path="/apply" element={<Apply/>} /> */}
          <Route path="/expenses" element={<Expenses/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/ticket" element={<Ticket/>} />







            {/* Define other routes */}
          </Routes>
        </div>
        {/* </div> */}
    </Router>
         
  
  )
}

export default App



