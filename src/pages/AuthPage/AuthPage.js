import { useAuth0 } from "@auth0/auth0-react";

const AuthPage = () => {
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
          <h2>Authentication</h2>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
      ) :
        <div>
          Hello
          {/* Hello {user.name}{' '} */}
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </div>
        }
    </>
  )
}

export default AuthPage;
