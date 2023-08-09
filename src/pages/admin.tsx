import { signOut, signIn, useSession } from 'next-auth/react';

const AdminPage = () => {
    const { data, status } = useSession();
    console.log(data);
    // console.log(session)
    // if (session?.user.role !== 'Admin') {
    //     throw new Error('You need to be an admin')
    // }
    return (<div> 
        <button onClick={() => signIn()}>Sign In</button>
        
        Admin only page 
        <button onClick={() => signOut()}>Sign Out</button>
    
    </div>)
}


export default AdminPage;