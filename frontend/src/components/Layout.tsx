import { ReactNode, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Sidebar from "./Sidebar";
import { Layout } from "antd";

const DashBoardLayout = ({children}: any) => {
  const { status } = useSession();
  const router = useRouter()
  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.push('/api/auth/signin')
  //   }
  // }, [router, status])

  if (status != 'authenticated') {
    return(
    <Layout className='bg-lightGray dark:bg-darkBlack min-h-screen overflow-auto'>
        <Sidebar />
        <Layout className='bg-white dark:bg-lightBlack p-8 rounded-lg min-h-[95vh] my-6 mx-4'>
            {children}
        </Layout>
    </Layout>
    )
  }
  return;
}

export default DashBoardLayout;