import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Login  = () => {
    const router = useRouter()
    const [user, setUser] = useState<{userName: string} | null>(null);
    const [userData, setUserData] = useState<{username: string, password: string}> ({
        username: '',
        password: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            username : e.target.name === 'username' ? e.target.value : userData['username'] ,
            password: e.target.name === 'password' ? e.target.value : userData['password']
        })
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage){
            let user = localStorage.getItem('user');
        }

        setUser(user);
        if(user) {
            router.push('/')
        }
    }, [])

    if (!user){
        return (
            <main> 
                <h1> Log In</h1>
                <form className="flex flex-col">
                    <label> Username </label>
                    <input name="username" value={userData.username} onChange={handleChange} className="text-black"/>
                    <label> Password </label>
                    <input name="password" value={userData.password} onChange={handleChange} className="text-black"/>
                    <button type="submit"> Submit </button>
                </form>    
            </main>)
    }
    return;
}

export default Login;