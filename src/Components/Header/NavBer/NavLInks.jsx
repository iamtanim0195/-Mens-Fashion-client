import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("user logged out"))
            .catch(error => console.error(error));
    }

    return (
        <div data-aos="fade-up">
            <nav>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start mx-auto">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/statistics"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                        }
                                    >
                                        Statistics
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="flex">
                            <Link to="/" className="w-11 h-11 bg-slate-500"><Logo></Logo></Link>
                            <h1 className="text-2xl font-bold relative top-4"> Mens <span className="text-fuchsia-900">Fashion</span></h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-3">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            {
                                user && <>
                                    <li>
                                        <NavLink
                                            to="/addProduct"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                            }
                                        >
                                            Add Product
                                        </NavLink>
                                    </li>
                                </>
                            }
                            {
                                user && <>
                                    <li>
                                        <NavLink
                                            to="/myCart"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                            }
                                        >
                                            My cart
                                        </NavLink>
                                    </li>
                                </>
                            }
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/registration"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                    }
                                >
                                    Registration
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? <>
                            <span>{user.email}</span>
                            <div className="avatar">
                                <div className="w-7 mr-2 rounded-full">
                                    <img src={`https://i.ibb.co/GsPJN0K/image.png`} />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-sm mr-2">Sign out</button>
                        </> : <Link to={"/login"}><button className="btn btn-sm mr-2">Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;