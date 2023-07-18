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

    if (!user){
        return (
            <main> 
                <h1> Register </h1>
                <form className="flex flex-col" onSubmit={handleFormSubmit}>
                    <label> Username </label>
                    <input name="username" value={userData.username} onChange={handleChange} className="text-black"/>
                    <label> Password </label>
                    <input name="password" value={userData.password} onChange={handleChange} className="text-black"/>
                    <label> Confirm Password </label>
                    <input name="confirm_password" value={userData.confirm_password} onChange={handleChange} className="text-black"/>
                    { err && <p> {err} </p>}
                    <button type="submit"> Submit </button>
                </form>
                <p>  Already have an account ? <Link href="/login">  Log In </Link> </p>
             </main>)
    }
    return;
}

export default Register;