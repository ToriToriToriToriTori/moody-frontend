import './ProfilePage.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth-context';

const ProfilePage = () =>{
    const { AuthStatus } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
          const response = await fetch(
            "http://localhost:5000/api/users/" + AuthStatus.userId
          );
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          }
        }
    
        if (AuthStatus.AuthStatus) {
          fetchUserData();
        }
      }, [AuthStatus]);
      if (userData == null) {
        return <div>користувача не знайдено</div>
        ;
      }

    return <div className='page'>
                <h1>Вітаємо, {userData.user.name} )</h1>
                <h2>Ваша електронна адреса: {userData.user.email}</h2>
        </div>;
}

export default ProfilePage;