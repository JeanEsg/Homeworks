import { useState } from "react";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(person) {
    this.items.push(person);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export default function ATMQueue() {
  const [queue] = useState(new Queue());
  const [people, setPeople] = useState([]);
  const [form, setForm] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    queue.enqueue({ ...form });
    setPeople([...queue.items]);
    setForm({ name: "", amount: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cola de Cajero Automático</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="amount" placeholder="Monto a Retirar" value={form.amount} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Agregar Persona</button>
      </form>
      <div>
        <h3 className="text-xl font-semibold">Personas en la Cola</h3>
        <ul>
          {people.map((person, index) => (
            <li key={index} className="border p-2 mt-2">
              <strong>{person.name}</strong> - Retiro: ${person.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}