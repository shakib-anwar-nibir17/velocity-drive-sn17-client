import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, signInWithGoogle, handleUpdateProfile, logOut } =
    useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(name, email, password, photo);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must have one capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError("Password must have one special character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        //update profile
        handleUpdateProfile(name, photo).then(() => {
          logOut()
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
          Swal.fire({
            icon: "success",
            title: "Congratulation!! Please Login to Proceed",
            text: "You have successfully Registered",
          });
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Congratulation",
          text: "You have successfully Registered",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="hero min-h-screen bg-[#EAF6F6]">
        <div className="lg:w-[40%] flex-col py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl text-center font-bold">Please Register</h1>
          </div>
          <div className="w-full shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="w-1/2 mx-auto form-control mt-6">
                <button className="btn bg-[#687EFF] text-white">
                  Register
                </button>
              </div>
            </form>
            <div className="w-full flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn border-sky-400 border-2"
              >
                Sign in with Google
              </button>
            </div>
            {registerError && (
              <p className="text-red-400 text-center mb-6">{registerError}</p>
            )}
            <p className="p-6 text-center font-bold">
              Already have an Account Please{" "}
              <Link className="text-blue-400" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
