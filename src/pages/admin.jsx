import { useState } from 'react';
import { signOut, signIn, useSession } from 'next-auth/react';
import WebSocketClient from '../components/WebSocketClient';

const AdminPage = () => {
    const [data, setData] = useState([]);

    const handleDataReceived = (newData) => {
      setData((prevData) => [...prevData, newData]);
    };
    const { data: sessionData, status } = useSession();
    console.log(sessionData);
    // console.log(session)
    // if (session?.user.role !== 'Admin') {
    //     throw new Error('You need to be an admin')
    // }
    return (<div> 
        <button onClick={() => signIn()}>Sign In</button>
        {data.map((item, index) => (
           <div key={index}>{item}</div>
         ))}
        <WebSocketClient onDataReceived={handleDataReceived} />
        Admin only page 
        <button onClick={() => signOut()}>Sign Out</button>
    
    </div>)
}


export default AdminPage;