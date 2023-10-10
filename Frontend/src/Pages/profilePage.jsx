import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

function ProfilePage() {


    const {user} = useAuth();
    console.log(user);


    return(
      <>
        <div>
          <Link to="/tasks"> <h2> Ver o subir tus problemas </h2> </Link>
          
          <strong> Bienvenido { user.username }</strong>
        </div>
      </>
    );
};

export default ProfilePage;