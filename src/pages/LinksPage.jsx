import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

function LinksPage() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    loadLinks();
  }, []);

  async function loadLinks() {
    const { data, error } = await supabase
      .from("multilinks")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) {
      setData(data);
    }
  }

  if (!data) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Loading...
      </h1>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "350px" }}>
        <h1 style={{ textAlign: "center" }}>{data.title}</h1>

        <a href={data.website} target="_blank">
          <button style={{ width: "100%", marginTop: "20px" }}>
            🌐 Website
          </button>
        </a>

        <a href={data.linkedin} target="_blank">
          <button style={{ width: "100%", marginTop: "20px" }}>
            💼 LinkedIn
          </button>
        </a>

        <a href={data.github} target="_blank">
          <button style={{ width: "100%", marginTop: "20px" }}>
            💻 GitHub
          </button>
        </a>

        <a href={data.instagram} target="_blank">
          <button style={{ width: "100%", marginTop: "20px" }}>
            📷 Instagram
          </button>
        </a>
      </div>
    </div>
  );
}

export default LinksPage;