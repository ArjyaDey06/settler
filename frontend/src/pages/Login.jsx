import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

 const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // ✅ GET FIREBASE ID TOKEN
    const token = await result.user.getIdToken();

    // ✅ SEND TOKEN TO BACKEND
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    // ✅ STORE USER FROM BACKEND
    setUser(data.user);

    navigate("/landing");
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Disable email login (not used) */}
        <form className="space-y-4 opacity-50 pointer-events-none">
          <input className="w-full px-4 py-3 border rounded-lg" />
          <input className="w-full px-4 py-3 border rounded-lg" />
          <button className="w-full bg-black text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-black font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
