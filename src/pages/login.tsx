import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login  = () => {
    const router = useRouter()
    const [user, setUser] = useState<{userName: string} | null>(null);
    const [err, setErr] = useState<string>();
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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && window.localStorage){
            const userDatastr = localStorage.getItem('userData');
            if (userDatastr) {
                const savedUserData = JSON.parse(userDatastr);
                if (savedUserData['username'] === userData['username'] && savedUserData['password'] === userData['password']){
                    localStorage.setItem('user', JSON.stringify({username: userData['username']}))
                } else {
                    setErr('Invalid Login')
                }
            }
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage){
            let user = localStorage.getItem('user');
            if(user) {
                setUser(JSON.parse(user))
                router.push('/')
            }
    }
    }, [])
    if (user) {
        return;
    }
    return (
            <main> 
                <h1> Log In</h1>
                <form className="flex flex-col" onSubmit={handleFormSubmit}>
                    <label> Username </label>
                    <input name="username" value={userData.username} onChange={handleChange} className="text-black"/>
                    <label> Password </label>
                    <input name="password" value={userData.password} onChange={handleChange} className="text-black"/>
                    { err && <p> {err} </p>}
                    <button type="submit"> Submit </button>
                </form>
                <p> Don't have an account ? <Link href="/register">   Sign Up </Link> </p>
            </main>)
}

export default Login;