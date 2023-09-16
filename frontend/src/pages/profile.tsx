import { useEffect, useState } from "react";
import { xtb_socket } from "../utils/socket"
import DashBoardLayout from "@/components/Layout";
import type { ReactElement } from 'react'


const Profile = () => {

  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState();
  const onSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    // xtb_socket.emit('streamBalance')
  }

  // useEffect(() => {

  //   socket.emit('streamTrades')

  // },[])

  useEffect(() => {
   if(data === undefined) {
    xtb_socket.emit('getAllSymbols')
   }

  },[data])

  useEffect(() => {
      xtb_socket.on('symbols', function(data: any) {
        console.log(data)
        setData(data)
    });
    return () => {
      xtb_socket.off('symbols', function(data) {
        setData(data)
      })
    }
    }, [data])
    console.log(data)
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