import { useAuth0 } from "@auth0/auth0-react";

const Authentication = () => {
  const { error, isLoading, isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

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
         <div>
           <button onClick={() => loginWithRedirect()}>
             LOGIN
           </button>
         </div>
       ) : (
         <div>
           <button onClick={() => logout({ returnTo: window.location.origin })} >
             LOGOUT
           </button>
         </div>
       )}
     </>
   );
}

export default Authentication;
