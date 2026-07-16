import { supabase } from "../services/supabase";
import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

function CreateQR() {
  const [text, setText] = useState("");
  const qrRef = useRef();

  const downloadQR = () => {
    if (!text) {
      alert("Please enter some text first!");
      return;
    }

    toPng(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "QRCode.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const saveQR = async () => {
  if (!text) {
    alert("Enter some text first");
    return;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("qrcodes").insert([
    {
      user_id: user.id,
      qr_text: text,
    },
  ]);

  if (error) {
    alert(error.message);
  } else {
    alert("QR Saved Successfully!");
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Create QR Code</h1>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "320px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          marginTop: "20px",
        }}
      />

      <br />

      {text && (
        <>
          <div
            ref={qrRef}
            style={{
              background: "white",
              padding: "20px",
              marginTop: "30px",
            }}
          >
            <QRCode value={text} size={250} />
          </div>

          <button
            onClick={downloadQR}
            style={{
              marginTop: "25px",
              padding: "12px 25px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Download QR
          </button>
          <button
  onClick={saveQR}
  style={{
    marginTop: "15px",
    padding: "12px 25px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  Save QR
</button>
        </>
      )}
    </div>
  );
}

export default CreateQR;