import userimg from '../assets/assets/images/userimage.jpg';
import ProfilesideBar from '../Components/ProfilesideBar';
import Maincardlogin from '../Components/Maincardlogin';

import { useAuth } from '../Context/AuthContext';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc);

function ProfilePage() {


  const { user } = useAuth();
  console.log(user);


  return (
    <>
      <div className='flex max-h-[800px] justify-between bg-Darkred shadow-inner hover:shadow-lg shadow-black hover:shadow-black p-5 mt-10 rounded-md'>
        <ProfilesideBar />

        <div>
          {/* <Link to="/tasks"> <h2> Ver o subir tus problemas </h2> </Link> */}
          <strong className='px-1 text-[10px] font-abc sm:text-[30px] leading-none text-Grayishblue'> Bienvenido {user.username}</strong>
          <img className='py-5 h-[350px] m-[1px]' src={userimg} alt="imagen de perfil" />
          <span className='text-1xl text-Grayishblue font-abc'>Se unio el: {dayjs(user.createAt).utc().format('DD/MM/YYYY')}</span>

        </div>
        <div className='space-y-2'>
          <Maincardlogin />
          <Maincardlogin />

        </div>

      </div>

    </>
  );
};

export default ProfilePage;