import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
const Register  = () => {
    const router = useRouter()
    const [user, setUser] = useState<{userName: string} | null>(null);
    const [err, setErr] = useState<string>();
    const [userData, setUserData] = useState<{username: string, password: string, confirm_password: string}> ({
        username: '',
        password: '',
        confirm_password:''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            username : e.target.name === 'username' ? e.target.value : userData['username'] ,
            password: e.target.name === 'password' ? e.target.value : userData['password'],
            confirm_password: e.target.name === 'confirm_password' ? e.target.value : userData['confirm_password'],

        })
    };
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userData['password'] !== userData['confirm_password']){
            setErr("Password do not match");
            return;
        }
        if (typeof window !== 'undefined' && window.localStorage){
            localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('user', JSON.stringify({username: userData['username']}))
            router.push('/');
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
    }, [router])

    if (!user){
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
                <h1> Register </h1>
                <form className="flex flex-col" onSubmit={handleFormSubmit}>
                    <label> Username </label>
                    <input name="username" value={userData.username} onChange={handleChange} className="text-black"/>
                    <label> Password </label>
                    <input name="password" value={userData.password} onChange={handleChange} className="text-black"/>
                    <label> Confirm Password </label>
                    <input name="confirm_password" value={userData.confirm_password} onChange={handleChange} className="text-black"/>
                    { err && <p> {err} </p>}

                    <button type="submit"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
                        Sign Up
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </button>  
                </form>
                <p>  Already have an account ? <Link href="/login">  Log In </Link> </p>
             </main>)
    }
    return;
}

export default Register;