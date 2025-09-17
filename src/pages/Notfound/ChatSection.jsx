import React, { useState, useEffect, useRef } from "react";
import SearchChatBox from "../../components/uiComponents/searchChatBox";
import { Bot, User } from "lucide-react";
// Mock questions and answers for the demo
const dummyQA = [
    {
        q: "Hi, what can you do?",
        a: "Hello! I'm an AI assistant for Kochi Metro. I can help you with passenger complaints, HR documents, engineering drawings, and much more. How can I assist you today?",
    },
    {
        q: "Show me complaints from Aluva to Petta yesterday.",
        a: "I found 12 complaints from yesterday on that route. The top issue was ticket machine malfunctions, with 5 reports. Other issues included crowd management and cleanliness.",
    },
    {
        q: "Do we have the latest HR leave policy?",
        a: "Yes, the 'Leave Policy – Aug 2025' was uploaded by the HR department on September 10, 2025. I can provide you with a link to the document.",
    },
    {
        q: "Find the electrical drawing for Petta station.",
        a: "I've located the document: 'Petta_Station_Electrical_Drawing.pdf', which was uploaded on September 3, 2025, by the Engineering team.",
    },
];

const ChatSection = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    // Function to simulate typing effect
    const typeMessage = (text, sender) => {
        return new Promise((resolve) => {
            let i = 0;
            const speed = 20; // Typing speed in milliseconds
            const message = { sender, text: "", id: Date.now() };
            setMessages((prev) => [...prev, message]);

            const interval = setInterval(() => {
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === message.id ? { ...m, text: text.substring(0, i) } : m
                    )
                );
                i++;
                if (i > text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, speed);
        });
    };

    // Initial welcome message
    useEffect(() => {
        const welcome = async () => {
            await typeMessage(dummyQA[0].a, "ai");
        };
        welcome();
    }, []);

    // Scroll to the bottom of the chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() === "") return;

        const userMessage = { sender: "user", text: input, id: Date.now() };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Find a matching dummy answer
        const matchedQA = dummyQA.find((qa) =>
            qa.q.toLowerCase().includes(input.toLowerCase())
        );
        const aiResponse = matchedQA
            ? matchedQA.a
            : "I'm sorry, I don't have information on that right now. I am still learning!";

        // Simulate AI "thinking" then typing
        setTimeout(async () => {
            await typeMessage(aiResponse, "ai");
        }, 500);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-gray-900 text-white">
            {/* Header */}
            <div className="p-4 text-center border-b border-gray-700">
                <h1 className="text-xl font-semibold">AI Assistant</h1>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-start gap-3 ${msg.sender === "ai" ? "justify-start" : "justify-end"
                            }`}
                    >
                        {msg.sender === "ai" && (
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Bot className="w-5 h-5" />
                            </div>
                        )}
                        <div
                            className={`p-3 rounded-lg max-w-lg ${msg.sender === "ai"
                                    ? "bg-gray-800"
                                    : "bg-blue-600"
                                }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                        </div>
                        {msg.sender === "user" && (
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5" />
                            </div>
                        )}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700">
                <SearchChatBox
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onSend={handleSend}
                    onUploadClick={() => { }} // Placeholder for upload functionality
                />
            </div>
        </div>
    );
};

export default ChatSection;
