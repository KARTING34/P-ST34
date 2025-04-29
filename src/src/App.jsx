import React, { useState, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function App() {
  const [name, setName] = useState("");
  const [barcodeValue, setBarcodeValue] = useState("");
  const barcodeRef = useRef();

  const handlePrint = () => {
    setBarcodeValue(name || "KARTING34");
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const generateBarcode = (value) => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: true,
      });
    }
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-4">Karting Barkod Sistemi</h1>
      <input
        type="text"
        placeholder="İsim girin"
        className="border p-2 mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          generateBarcode(name);
          handlePrint();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Barkod Yazdır
      </button>

      <div className="hidden mt-6">
        <svg ref={barcodeRef}></svg>
      </div>
    </div>
  );
}
