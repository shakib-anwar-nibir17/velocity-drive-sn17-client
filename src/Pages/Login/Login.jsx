import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { userSignIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    userSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Invalid Login Credential",
          text: "Check if you have typed the correct password or email",
        });
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
        });
      });
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="hero min-h-screen bg-[#EAF6F6]">
        <div className="lg:w-[40%] flex-col py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
          </div>
          <div className="w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="w-1/2 mx-auto form-control mt-6">
                <button className="btn bg-[#687EFF] text-white ">Login</button>
              </div>
            </form>
            <div className="w-full flex justify-center">
              <button
                onClick={handleLoginWithGoogle}
                className="btn border-orange-400 border-2"
              >
                Login with Google
              </button>
            </div>
            <p className="p-6 text-center font-bold">
              Do not have a Account Please{" "}
              <Link className="text-blue-400" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
