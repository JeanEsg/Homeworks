import { useState } from "react";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  next() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }
}

function SongPlayer() {
  const [playlist] = useState(() => {
    const list = new LinkedList();
    list.append("Song 1");
    list.append("Song 2");
    list.append("Song 3");
    return list;
  });

  const [currentSong, setCurrentSong] = useState(playlist.current?.value);

  const nextSong = () => {
    playlist.next();
    setCurrentSong(playlist.current?.value);
  };

  return (
    <div className="p-4 border rounded-lg text-center">
      <h2 className="text-xl font-bold">Reproductor de Canciones</h2>
      <p className="text-lg">Reproduciendo: {currentSong}</p>
      <button onClick={nextSong} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Siguiente canción
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SongPlayer />
    </div>
  );
}
