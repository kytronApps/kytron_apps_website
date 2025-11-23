import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { tattooDB } from "../lib/firebaseTattoo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TattooBookerForm = () => {
  const [form, setForm] = useState({
    clientName: "",
    email: "",
    phone: "",
    serviceType: "",
    date: null,
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: any) => {
    setForm({ ...form, date });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(tattooDB, "appointments"), {
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
    } catch (err: any) {
      alert("❌ Error guardando la cita: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary min-h-screen flex items-center">
      <div className="max-w-lg mx-auto bg-card border border-border p-10 rounded-xl shadow-[0_10px_40px_hsl(var(--foreground)/0.06)] animate-fade-in">
        
        <h2 className="font-serif text-4xl font-bold text-center mb-3 text-foreground">
          TattooBooker
        </h2>
        <p className="font-sans text-center text-muted-foreground mb-10">
          Reserva tu cita y luego gestiona tus tatuajes fácilmente
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <input
              name="clientName"
              placeholder="Nombre completo"
              value={form.clientName}
              onChange={handleChange}
              required
              className="w-full bg-retro-light/40 border border-border px-4 py-3 rounded-md font-sans text-sm focus:border-primary outline-none"
            />
          </div>

          <div>
            <input
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-retro-light/40 border border-border px-4 py-3 rounded-md font-sans text-sm focus:border-primary outline-none"
            />
          </div>

          <div className="flex gap-4">
            <input
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
              className="w-1/2 bg-retro-light/40 border border-border px-4 py-3 rounded-md font-sans text-sm focus:border-primary outline-none"
            />

            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
              className="w-1/2 bg-retro-light/40 border border-border px-3 py-3 rounded-md font-sans text-sm focus:border-primary outline-none"
            >
              <option value="" disabled>Tipo de servicio</option>
              <option value="cover">Cover</option>
              <option value="repaso">Repaso</option>
              <option value="cita inicial">Cita inicial</option>
            </select>
          </div>

          <div className="flex gap-4">
            <DatePicker
              selected={form.date}
              onChange={handleDateChange}
              placeholderText="Selecciona una fecha"
              required
              className="w-1/2 bg-retro-light/40 border border-border px-4 py-3 rounded-md font-sans text-sm focus:border-primary outline-none"
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-1/2 bg-retro-light/40 border border-border px-4 py-3 rounded-md font-sans text-sm focus:border-primary outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-md font-serif text-lg hover:bg-primary/90 transition-all"
          >
            {loading ? "Guardando..." : "Reservar cita"}
          </button>

          {success && (
            <p className="text-center text-green-600 font-sans animate-fade-in mt-2">
              ✅ ¡Tu cita ha sido registrada!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default TattooBookerForm;