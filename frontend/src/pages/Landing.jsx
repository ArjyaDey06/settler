import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose your role to get started with Settlr
            </p>
            
            {/* Role Selection */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => navigate("/tenant")}
                className="group px-8 py-6 bg-white border-2 border-gray-300 rounded-xl hover:bg-black hover:border-[#26f50c] hover:text-white hover:scale-105 transition-all duration-200"
              >
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img src="/tenants.png" alt="Tenant" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm a Tenant</h3>
                <p className="text-gray-600 text-sm group-hover:text-white">Looking for a place to stay</p>
              </button>

              <button 
                onClick={() => navigate("/owner")}
                className="group px-8 py-6 bg-white border-2 border-gray-300 rounded-xl hover:bg-black hover:border-[#26f50c] hover:text-white hover:scale-105 transition-all duration-200"
              >
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img src="/owner.png" alt="Owner" className="w-48 h-32" />
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm an Owner</h3>
                <p className="text-gray-600 text-sm group-hover:text-white">Listing my property for rent</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
