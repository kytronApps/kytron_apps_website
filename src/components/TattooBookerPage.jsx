import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import "./BookPage.css"; // 👈 nuevo CSS

const BookPage = () => {
  const [form, setForm] = useState({
    clientName: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "appointments"), {
        ...form,
        status: "pendiente",
        createdAt: new Date().toISOString(),
      });
      setSuccess(true);
      setForm({
        clientName: "",
        email: "",
        phone: "",
        serviceType: "",
        date: "",
        time: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      alert("❌ Error guardando la cita: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-section">
      <div className="book-container">
        <h2 className="book-title">🖋️ Reserva tu cita</h2>
        <p className="book-subtitle">
          Rellena el formulario para agendar tu próxima sesión.
        </p>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              name="clientName"
              placeholder="Nombre completo"
              value={form.clientName}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              name="serviceType"
              placeholder="Tipo de servicio"
              value={form.serviceType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="book-btn">
            {loading ? "Guardando..." : "Reservar cita"}
          </button>

          {success && (
            <p className="success-msg">✅ ¡Tu cita ha sido registrada!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookPage;