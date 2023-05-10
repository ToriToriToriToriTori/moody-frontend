import {Link} from 'react-router-dom';
import { PresentationChartLineIcon, UserIcon, PlusCircleIcon, CalendarDaysIcon, HomeIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../context/auth-context';
import './Header.css';
import { useContext } from 'react';

function Header(props) {
  const { AuthStatus, userId } = useContext(AuthContext);

  return (
    <div className="header-box">
      <div>
        <Link to='/' className='navlink'>
          <HomeIcon></HomeIcon>
        </Link>
      </div>
      {!AuthStatus.AuthStatus && (
        <div>
          <Link to='/auth' className='navlink'>
            <UserIcon></UserIcon>
          </Link>
        </div>
      )}
      {AuthStatus.AuthStatus && (
        <div>
          <Link to='/profile' className='navlink'>
            <UserIcon></UserIcon>
          </Link>
        </div>
      )}
      {AuthStatus.AuthStatus && (
        <div>
          <Link to='/addnew' className='navlink'>
            <PlusCircleIcon></PlusCircleIcon>
          </Link>
        </div>
      )}
      {AuthStatus.AuthStatus && (
        <div>
          <Link to='/calendar' className='navlink'>
            <CalendarDaysIcon></CalendarDaysIcon>           
          </Link>
        </div>
      )}
      {AuthStatus.AuthStatus && (
        <div>
          <Link to='/statistic' className='navlink'>
            <PresentationChartLineIcon></PresentationChartLineIcon>  
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;