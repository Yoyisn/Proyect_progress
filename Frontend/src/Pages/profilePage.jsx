import userimg2 from '../assets/assets/images/imageuserxbox.png';
import ProfilesideBar from '../Components/ProfilesideBar';
import Maincardlogin from '../Components/Maincardlogin';

import { useAuth } from '../Context/AuthContext';
import TimeAgo from '../Components/TimeAgo';
import utc from 'dayjs/plugin/utc';

import { useTasks } from '../Context/TasksContext';
import { useEffect } from 'react';
import dayjs from 'dayjs';

dayjs.extend(utc);

function ProfilePage() {

  const { getTasks } = useTasks();
  const { user } = useAuth();

  useEffect(() => {
    getTasks()
  }, []);

  return (
    <>
      <div className='flex h-[700px] justify-between bg-Darkred shadow-inner hover:shadow-lg shadow-black hover:shadow-black p-5 mt-10 rounded-md'>
        <ProfilesideBar />
        <div className='flex flex-col justify-evenly'>
          {/*<Link to="/tasks"> <h2> Ver o subir tus problemas </h2> </Link>*/}
          <strong className='px-1 text-4xl font-abc leading-none text-Grayishblue'> Bienvenido {user.username}</strong>
          <img className='py-5 h-[350px] m-[1px] rounded-full' src={userimg2} alt="imagen de perfil" />
          <span className='text-2xl text-Grayishblue font-abc'>Se unio el: {dayjs(user.createAt).utc().format('DD/MM/YYYY')} <br/> Hace: <TimeAgo date={user.createAt}/></span>

        </div>
        <div className='grid grid-rows-3 gap-2 overflow-y-auto scrollbar scrollbar-thumb-Grayishblue scrollbar-track-Darkgrayishblue'>
          <Maincardlogin />
        </div>

      </div>

    </>
  );
};

export default ProfilePage;