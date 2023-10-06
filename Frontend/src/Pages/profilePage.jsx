import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

function ProfilePage() {


    const {user, isAuthenticated} = useAuth();
    console.log(user);


    return(
      <>
        <div>
          <Link to="/tasks"> <h2> Ver o subir tus problemas </h2> </Link>
          
          <strong> Perfil Usuario </strong>
        </div>
      </>
    );
};

export default ProfilePage;