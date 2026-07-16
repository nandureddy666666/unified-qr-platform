import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function MyQR() {
  const [qrs, setQrs] = useState([]);

  useEffect(() => {
    fetchQRs();
  }, []);

  async function fetchQRs() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("qrcodes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    setQrs(data || []);
  }

  async function deleteQR(id) {
  const { error } = await supabase
    .from("qrcodes")
    .delete()
    .eq("id", id);

  if (error) {
    alert("Delete failed: " + error.message);
    return;
  }

  alert("QR Deleted Successfully!");
  fetchQRs();
}

  return (
    <div style={{ padding: "30px" }}>
      <h1>My QR Codes</h1>

      {qrs.length === 0 ? (
        <p>No QR Codes Found</p>
      ) : (
        qrs.map((qr) => (
          <div
            key={qr.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{qr.qr_text}</h3>
            <p>{new Date(qr.created_at).toLocaleString()}</p>

            <button
              onClick={() => deleteQR(qr.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyQR;