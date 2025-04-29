import React, { useState, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", birthday: "", note: "" });
  const barcodeRef = useRef();

  const addCustomer = () => {
    const id = Date.now();
    const newCustomer = {
      ...form,
      id,
      visits: 1,
      lastVisit: new Date().toLocaleDateString(),
    };
    setCustomers([...customers, newCustomer]);
    setForm({ name: "", phone: "", birthday: "", note: "" });
    generateBarcode(id);
  };

  const generateBarcode = (id) => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, id.toString(), {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: true,
      });
      setTimeout(() => window.print(), 500);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Karting Müşteri Girişi</h1>
      <input
        className="border p-2 mr-2"
        placeholder="İsim"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 mr-2"
        placeholder="Telefon"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        className="border p-2 mr-2"
        placeholder="Doğum Günü (isteğe bağlı)"
        value={form.birthday}
        onChange={(e) => setForm({ ...form, birthday: e.target.value })}
      />
      <input
        className="border p-2 mr-2"
        placeholder="Not"
        value={form.note}
        onChange={(e) => setForm({ ...form, note: e.target.value })}
      />
      <button onClick={addCustomer} className="bg-blue-600 text-white px-4 py-2 rounded">
        Kaydet ve Barkod Yazdır
      </button>

      <div className="mt-6">
        <h2 className="text-lg">Kayıtlı Müşteriler</h2>
        {customers.map((c) => (
          <div key={c.id} className="border p-2 mt-2">
            <strong>{c.name}</strong> - {c.phone} - {c.visits} kez geldi - Son: {c.lastVisit}
            <br />
            <em>{c.note}</em>
          </div>
        ))}
      </div>

      <div className="hidden">
        <svg ref={barcodeRef}></svg>
      </div>
    </div>
  );
}
