import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-xl w-[400px] shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

        <p className="mb-4">
          <strong>Email:</strong>
        </p>
        <div className="bg-slate-700 p-3 rounded">
          {user?.email}
        </div>

        <p className="mt-6 mb-4">
          <strong>User ID:</strong>
        </p>
        <div className="bg-slate-700 p-3 rounded break-all">
          {user?.id}
        </div>

        <button
          onClick={logout}
          className="w-full bg-red-600 mt-8 p-3 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;