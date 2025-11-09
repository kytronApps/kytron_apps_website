import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

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
    const selectedDate = new Date(form.date);
    const dayOfWeek = selectedDate.toLocaleDateString("es-ES", {
      weekday: "long",
    });
    const dateFormatted = selectedDate.toISOString().split("T")[0];

    await addDoc(collection(db, "appointments"), {
      clientName: form.clientName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      serviceType: form.serviceType.trim(),
      date: dateFormatted,
      dayOfWeek: dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1),
      timeSlot: form.time,
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
  } catch (err) {
    alert("❌ Error guardando la cita: " + err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="book-form-container" style={{ padding: "2rem", maxWidth: 500, margin: "auto" }}>
      <h1>Reserva tu cita</h1>
      <form onSubmit={handleSubmit}>
        <input name="clientName" placeholder="Tu nombre" value={form.clientName} onChange={handleChange} required />
        <input name="email" placeholder="Correo electrónico" type="email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} />
        <input name="serviceType" placeholder="Tipo de servicio" value={form.serviceType} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="time" type="time" value={form.time} onChange={handleChange} required />

        <button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Reservar"}
        </button>
      </form>

      {success && <p style={{ color: "green" }}>✅ ¡Tu cita ha sido registrada!</p>}
    </div>
  );
};

export default BookPage;