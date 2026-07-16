import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

function Dashboard() {
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center">
        Unified QR Platform
      </h1>

      <p className="text-center text-gray-300 mt-2">
        Generate • Save • Download • Manage QR Codes
      </p>

      <div className="grid grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">

        <button
          onClick={() => navigate("/create")}
          className="bg-blue-600 p-8 rounded-xl text-xl hover:bg-blue-700"
        >
          📱 Create QR
        </button>

        <button
          onClick={() => navigate("/myqr")}
          className="bg-green-600 p-8 rounded-xl text-xl hover:bg-green-700"
        >
          📂 My QR Codes
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="bg-purple-600 p-8 rounded-xl text-xl hover:bg-purple-700"
        >
          👤 Profile
        </button>

        <button
          onClick={logout}
          className="bg-red-600 p-8 rounded-xl text-xl hover:bg-red-700"
        >
          🚪 Logout
        </button>
        <button
  onClick={() => navigate("/multilink")}
  className="bg-orange-600 p-8 rounded-xl text-xl hover:bg-orange-700"
>
  🔗 Multi-Link QR
</button>

      </div>
    </div>
  );
}

export default Dashboard;