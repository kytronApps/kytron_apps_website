import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import DatePicker from "react-datepicker"; // Importa el componente DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importa los estilos de DatePicker
import "./BookPage.css"; // 👈 nuevo CSS

const BookPage = () => {
  const [form, setForm] = useState({
    clientName: "",
    email: "",
    phone: "",
    serviceType: "",
    date: null, // Cambia a null para manejar la fecha
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setForm({ ...form, date }); // Actualiza la fecha seleccionada
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
        date: null,
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
          </div>

          <div className="form-row">
            <input
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
            />
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Tipo de servicio
              </option>
              <option value="cover">Cover</option>
              <option value="repaso">Repaso</option>
              <option value="cita inicial">Cita inicial</option>
            </select>
          </div>

          <div className="form-row">
            <DatePicker
              selected={form.date}
              onChange={handleDateChange}
              placeholderText="Selecciona una fecha"
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