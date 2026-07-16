import { useState } from "react";
import { supabase } from "../services/supabase";
import QRCode from "react-qr-code";

function MultiLink() {
  const [title, setTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkId, setLinkId] = useState("");

  async function saveMultiLink() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("multilinks")
      .insert([
        {
          user_id: user.id,
          title,
          website,
          linkedin,
          github,
          instagram,
        },
      ])
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    alert("Multi-Link Saved Successfully!");

    setLinkId(data.id);

    setTitle("");
    setWebsite("");
    setLinkedin("");
    setGithub("");
    setInstagram("");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center">
      <div className="w-full max-w-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Multi-Link QR
        </h1>

        <input
          className="w-full p-3 rounded-lg mb-4 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Title (Example: My Social Links)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg mb-4 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg mb-4 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg mb-4 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg mb-6 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Instagram URL"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <button
          onClick={saveMultiLink}
          className="w-full bg-orange-600 hover:bg-orange-700 transition duration-300 p-3 rounded-lg text-lg font-semibold"
        >
          Save Multi-Link
        </button>

        {linkId && (
          <div className="mt-10 flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <QRCode
                value={`${window.location.origin}/links/${linkId}`}
                size={220}
              />
            </div>

            <p className="mt-4 text-center text-gray-300">
              Scan this QR to view all your links
            </p>

            <p className="mt-2 text-xs text-center break-all text-gray-400">
              {`${window.location.origin}/links/${linkId}`}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default MultiLink;