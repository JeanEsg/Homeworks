import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../store/slices/sendMessageThunk";
import { listenMessagesThunk } from "../store/slices/listenMessageThunk";


const MessageScreen = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.firebase.messages);
    const [text, setText] = useState("");
    const [user] = useState(() => "User_" + Math.floor(Math.random() * 1000));
    const bottomRef = useRef(null);

    // ⬇️ Este useEffect monta el listener al cargar el componente
    useEffect(() => {
        dispatch(listenMessagesThunk());
    }, [dispatch]);

    useEffect(() => {
        // Scroll al último mensaje
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (text.trim()) {
            dispatch(sendMessageThunk({ text, user }));
            setText("");
        }
    };

    return (
        <div className="message-container">
            <h2 className="message-title">Chat en Tiempo Real</h2>

            <div className="message-list">
                {messages.map((msg) => (
                    <div key={msg.id} className="message-item">
                        <strong>{msg.user}</strong>: {msg.text}
                    </div>
                ))}
                <div ref={bottomRef}></div>
            </div>

            <div className="message-input-group">
                <input
                    className="message-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Escribe tu mensaje"
                />
                <button className="message-button" onClick={handleSend}>Enviar</button>
            </div>
        </div>
    );
};

export default MessageScreen;