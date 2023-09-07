import DashBoardLayout from "@/components/Layout";
import type { ReactElement } from 'react'

const Profile = () => {
    return (
            <h1> Hello profile </h1>
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