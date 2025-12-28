import { useNavigate } from "react-router-dom";

function OwnerLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome, Property Owner!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              List your property and find the perfect tenants
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                List New Property
              </button>
              <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                View My Properties
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Your Property Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">0</div>
            <div className="text-gray-600 text-sm">Active Listings</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600 text-sm">Total Views</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
            <div className="text-gray-600 text-sm">Pending Applications</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
            <div className="text-gray-600 text-sm">Rented Properties</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Recent Activity</h2>
          <div className="text-center py-12">
            <p className="text-gray-500">No recent activity. Start by listing your first property!</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
            <h3 className="font-semibold mb-2">Property Management</h3>
            <p className="text-gray-600 text-sm">Manage your listings, applications, and tenant communications</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
            <h3 className="font-semibold mb-2">Analytics & Reports</h3>
            <p className="text-gray-600 text-sm">View performance metrics and rental income reports</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerLanding;
