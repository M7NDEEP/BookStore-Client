import React from 'react'
import { Outlet , Link} from "react-router-dom";
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Dashboard