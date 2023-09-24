import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
          CIRCUITS <br/>
          AND ELECTRONICS
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Lesson" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Lesson</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Homework" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Homework</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Game" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="gamepad">Game and Quiz</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Score" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Score</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Attendance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="check">Attendance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;