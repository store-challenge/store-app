import s from './Authentication.module.css';
// import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Authentication = () => {
  const { error, isLoading, isAuthenticated, user, loginWithRedirect, logout, getAccessTokenSilently} = useAuth0();

  // const getToken = async () => {
  //   const token = await getAccessTokenSilently();
  //   console.log(token)
  // }

  // useEffect(() => {
  //   if (user) {
  //     getToken();
  //   }
  //  }, [user]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user)

   return (
     <>
       {!isAuthenticated ? (
         <div className={s.user}>
           <button className={s.icon} onClick={() => loginWithRedirect()}>LOGIN
            {/* <svg width="16" height="16">
              <use href={`${sprite}#icon-login`}></use>
            </svg> */}
           </button>
         </div>
       ) : (
         <div className={s.user}>
            {/* <img src={user.picture} alt={user.name} /> */}
            <button className={s.icon} onClick={() => logout({ returnTo: window.location.origin })}>
              LOGOUT
            </button>
         </div>
          )
        }
     </>
   )
}

export default Authentication;
