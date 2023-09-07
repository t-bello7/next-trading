import { useEffect, useState } from "react";
import { io, Manager } from "socket.io-client";
import DashBoardLayout from "@/components/Layout";
import type { ReactElement } from 'react'


const manager = new Manager("localhost:5000", {
  transports: ["websocket"],
  reconnectionDelayMax: 10000,
});

const socket = manager.socket("/",{});

const Profile = () => {

  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    socket.emit("message", {data: 'dddd'}, () => {
      setIsLoading(false);
    })

  }
    useEffect(() => {
      socket.on('connect', function() {
        console.log('connected')
    });
    }, [])
    console.log(isLoading)
    return (
            <h1>
               <form onSubmit={ onSubmit }>
      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit">Submit</button>
    </form>
              Hello profile 



            </h1>
    )
}

Profile.getLayout = function getLayout(page: ReactElement) {
    return (
      <DashBoardLayout>
        {page}
      </DashBoardLayout>
    )
}
  
export default Profile;