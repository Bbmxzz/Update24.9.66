import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import './Layout.css';

const Layout = ({children}) => {
    return(
        <div >
            
            <div style={{display: "flex"}}>
                <div >
                    <Sidebar/>
                </div>
                <div >
                    <Navbar/>    
                    <div className="pl-80 pr-4">
                        {children}
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Layout