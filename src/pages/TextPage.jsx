import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";

function TextPage() {
  const { id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    loadText();
  }, []);

  async function loadText() {
    const { data, error } = await supabase
      .from("text_qr")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) {
      setText(data.qr_text);
    }
  }

  if (!text) {
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
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          width: "450px",
          textAlign: "center",
        }}
      >
        <h1>📝 Text QR</h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            wordBreak: "break-word",
          }}
        >
          {text}
        </p>

        <p style={{ marginTop: "30px", color: "#94a3b8" }}>
          Generated using Unified QR Platform
        </p>
      </div>
    </div>
  );
}

export default TextPage;