import {Link} from 'react-router-dom';
import { PresentationChartLineIcon, UserIcon, PlusCircleIcon, CalendarDaysIcon, HomeIcon } from '@heroicons/react/24/solid';

import './Header.css';
function Header(props) {
  if(props.auth){
    return (
      <div className="header-box">
          <div>
            <Link to='/' className='navlink'>
              <HomeIcon></HomeIcon>
            </Link>
          </div>
          <div>
            <Link to='/profile' className='navlink'>
              <UserIcon></UserIcon>
            </Link>
          </div>
          <div>
            <Link to='/addnew' className='navlink'>
             <PlusCircleIcon></PlusCircleIcon>
            </Link>
          </div>
          <div>
            <Link to='/Calendar' className='navlink'>
              <CalendarDaysIcon></CalendarDaysIcon>           
            </Link>
          </div>
          <div>
            <Link to='/' className='navlink'>
              <PresentationChartLineIcon></PresentationChartLineIcon>  
            </Link>
          </div>
         
      </div>
    );
  }else{
    return (
      <div className="header-box">
          <div>
            <Link to='/' className='navlink'>
              <HomeIcon></HomeIcon>
            </Link>
          </div>
          <div>
            <Link to='/auth' className='navlink'>
              <UserIcon></UserIcon>
            </Link>
          </div>
      </div>
    );
  }
  }

export default Header;