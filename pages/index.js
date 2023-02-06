import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

const Index =()=> {
  const { error, isLoading, user } = useUser()

  if (error) {
    return <p>Error</p>
  }
    
  if (isLoading) {
    return <p>Cargando...</p>
  }
    


 return(
  <>
  <h1>HOME</h1>  
 
{
user 
?
<a href="/api/auth/logout">Logout</a>
:
<a href="/api/auth/login">Login</a>
}
  

   </>
 )
    
}
// export default withPageAuthRequired(Index)
export default Index

