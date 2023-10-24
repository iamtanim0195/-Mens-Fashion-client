import { useContext, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../Hook/AuthProvider';
import { toast } from "react-hot-toast"

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false);

    const handleRegistration = (e) => {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;

        //validation

        if (password.length < 6) {
            toast.error('password must be at least 6 characters')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('password must have a capital letter')
            return
        }
        else {
            toast.success('user created successfully')
        }


        //create user
        createUser(email, password, displayName, photoURL)
            .then(result => {
                console.log(result.user)
                // user send in database
                const createAt = result.user?.metaData?.creationTime;
                const user = { email, displayName, photoURL, createAt: createAt };
                fetch('https://project-10-back-55gngcex5-tanims-projects-82b1e941.vercel.app/user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/Json' },
                    body: JSON.stringify(user)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })

    }


    return (
        <div>
            <form onSubmit={handleRegistration} className="mx-auto md:w-1/2 p-5 flex flex-col gap-1 ">
                <input
                    onChange={(e) => setDisplayName(e.target.value)}
                    name="displayName"
                    placeholder='name'
                    className="input input-bordered input-primary w-full " type="text" required /><br />
                <input

                    placeholder="photo" className="input input-bordered input-primary w-full " type="text" name="photoURL" required /><br />

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" className="input input-bordered input-primary w-full " type="email" name="email" required /><br />
                <div className="flex">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="input input-bordered input-primary w-full "
                        type={showPass ? "text" : "password"}
                        name="password"
                        required />
                    <span
                        className="relative top-4 right-6 w-0"
                        onClick={() => setShowPass(!showPass)}>
                        {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                </div>
                <br />
                <div>
                    <input className="self-start bg-black" type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept our terms and condition</label>
                </div>
                <br />
                <p className='text-xl text-red-600'>{error}</p>
                <input className="btn btn-active btn-secondary" type="submit" name="submit" /><br />

            </form>
        </div>
    )
}

export default Register;