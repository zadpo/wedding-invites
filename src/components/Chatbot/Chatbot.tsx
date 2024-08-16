import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userMessage = input.trim();
    if (userMessage) {
      // Add user message to chat
      setMessages([...messages, { from: "user", text: userMessage }]);

      try {
        // Fetch response from the API route
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        const botMessage = data.response || "Sorry, I don't understand that question.";

        // Add bot message to chat
        setMessages((prevMessages) => [...prevMessages, { from: "bot", text: botMessage }]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: "bot", text: "Sorry, something went wrong." },
        ]);
      }

      setInput("");
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block p-2 rounded-lg ${
                msg.from === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Type a message..."
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
