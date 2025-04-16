import { useState } from "react";

// Clase Stack para manejar la pila de libros
class Stack {
  constructor() {
    this.items = [];
  }

  push(book) {
    this.items.push(book);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export default function BookStack() {
  const [stack] = useState(new Stack());
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ name: "", isbn: "", author: "", editorial: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    stack.push({ ...form });
    setBooks([...stack.items]);
    setForm({ name: "", isbn: "", author: "", editorial: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pila de Libros</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} className="border p-2 w-full" />
        <input name="author" placeholder="Autor" value={form.author} onChange={handleChange} className="border p-2 w-full" />
        <input name="editorial" placeholder="Editorial" value={form.editorial} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Agregar Libro</button>
      </form>
      <div>
        <h3 className="text-xl font-semibold">Libros en la Pila</h3>
        <ul>
          {books.slice().reverse().map((book, index) => (
            <li key={index} className="border p-2 mt-2">
              <strong>{book.name}</strong> - {book.author} ({book.editorial}) - ISBN: {book.isbn}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}