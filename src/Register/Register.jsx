import { useContext, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../Hook/AuthProvider';
import { toast } from "react-hot-toast"

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false);

    const handleRegistration = (e) => {


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.img.value;

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
        createUser(email, password)
            .then(result => { console.log(result.user) })
            .catch(error => { console.log(error) })



    }
    return (
        <div>
            <form onSubmit={handleRegistration} className="mx-auto md:w-1/2 p-5 flex flex-col gap-1 ">
                <input

                    placeholder='name'
                    className="input input-bordered input-primary w-full " type="text" name="name" required /><br />
                <input

                    placeholder="photo" className="input input-bordered input-primary w-full " type="text" name="img" required /><br />

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