import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

function LinksPage() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadLinks();
  }, [id]);

  async function loadLinks() {
    const { data, error } = await supabase
      .from("multilinks")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log("Supabase error:", error);
      setError(error.message);
      return;
    }

    setData(data);
  }

  // Add https:// if user didn't enter it
  function makeUrl(url) {
    if (!url) return "#";

    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    return `https://${url}`;
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "red",
        }}
      >
        <h2>Unable to load links</h2>
        <p>{error}</p>
      </div>
    );
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
        <h1 style={{ textAlign: "center" }}>
          {data.title}
        </h1>

        {data.website && (
          <a
            href={makeUrl(data.website)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "12px",
              }}
            >
              🌐 Website
            </button>
          </a>
        )}

        {data.linkedin && (
          <a
            href={makeUrl(data.linkedin)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "12px",
              }}
            >
              💼 LinkedIn
            </button>
          </a>
        )}

        {data.github && (
          <a
            href={makeUrl(data.github)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "12px",
              }}
            >
              💻 GitHub
            </button>
          </a>
        )}

        {data.instagram && (
          <a
            href={makeUrl(data.instagram)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "12px",
              }}
            >
              📷 Instagram
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default LinksPage;