import React, { useState } from 'react'
import SearchChatBox from '../../components/uiComponents/searchChatBox';
const Mainsection = () => {

    const [message, setMessage] = useState("");
    const handleSend = () => {
        if (message.trim() === "") return;
        console.log("Message Sent:", message);
        setMessage(""); // clear after send
    };

    // ✅ Kochi Metro Rail (KMRL) related questions
    const questions = [
        { label: "Security", text: "How does KMRL ensure passenger safety?" },
        { label: "Operations", text: "What are the operating hours of Kochi Metro?" },
        { label: "Ticketing", text: "How to purchase Kochi1 card for metro rides?" },
        { label: "Expansion", text: "What are the upcoming metro extensions in Kochi?" },
        { label: "Sustainability", text: "How does KMRL promote eco-friendly transport?" },
        { label: "Smart Systems", text: "How does Kochi Metro use AI & IoT in operations?" },
        { label: "Facilities", text: "What facilities are available at Kochi Metro stations?" },
        { label: "Integration", text: "How is Kochi Metro integrated with buses and ferries?" },
        { label: "Women Empowerment", text: "Why does KMRL employ women in majority roles?" },
        { label: "Future Plans", text: "What is Kochi Metro’s long-term vision?" },
    ];

    const answers = [
        {
            label: "Security",
            text: "KMRL ensures passenger safety through CCTV surveillance, trained security staff, emergency response systems, and strict adherence to safety protocols across all stations and trains."
        },
        {
            label: "Operations",
            text: "Kochi Metro operates generally from 6:00 AM to 10:00 PM, with trains available at regular intervals during peak and non-peak hours."
        },
        {
            label: "Ticketing",
            text: "You can purchase a Kochi1 card from metro stations, online portals, or partner outlets. The card can be recharged digitally or at station counters."
        },
        {
            label: "Expansion",
            text: "Upcoming extensions include the Kakkanad line (Phase II) and further planned routes towards Tripunithura and the InfoPark region."
        },
        {
            label: "Sustainability",
            text: "KMRL promotes eco-friendly transport by using solar power, rainwater harvesting, energy-efficient trains, and promoting non-motorized transport like cycling."
        },
        {
            label: "Smart Systems",
            text: "Kochi Metro uses AI and IoT for automated fare collection, predictive maintenance, crowd management, and real-time monitoring of operations."
        },
        {
            label: "Facilities",
            text: "Facilities at metro stations include elevators, escalators, restrooms, retail shops, Wi-Fi, parking, and accessibility support for differently-abled passengers."
        },
        {
            label: "Integration",
            text: "Kochi Metro is integrated with feeder buses, autorickshaws, and Kochi Water Metro ferries, ensuring seamless last-mile connectivity."
        },
        {
            label: "Women Empowerment",
            text: "KMRL is known for employing women in majority roles such as train operators, station controllers, and maintenance staff, promoting inclusivity and empowerment."
        },
        {
            label: "Future Plans",
            text: "Kochi Metro’s long-term vision is to build a fully integrated urban transport system combining metro, water metro, buses, and non-motorized transport for sustainable city growth."
        }
    ];


    // Mapping question to answer 
    // Merge questions and answers using label====
    const qaPairs = questions.map(q => {
        const matchedAnswer = answers.find(a => a.label === q.label);
        return {
            label: q.label,
            question: q.text,
            answer: matchedAnswer ? matchedAnswer.text : "No answer available"
        };
    });

    // console.log(qaPairs);









    return (
        <div className="flex  h-screen bg-gray-900/90">
            {/* Top Section */}
            <div className=" p-4 text-center">
                Select the Model
            </div>

            {/* Middle Section */}
            <div className="flex flex-1 flex-col ">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
                    {/* -----------User Message ---------*/}
                    {/* ------------Model Message------------ */}
                    {qaPairs.map((items, index) => {
                        return (
                            <>
                                <div key={index} className='flex justify-end'>
                                    <div className="bg-blue-100 p-3 rounded-xl max-w-md self-center">
                                        <div className="user-message">{items.question}</div>
                                    </div>
                                </div>


                                <div className="bg-green-100 p-3 rounded-xl max-w-md self-end">
                                    <div className="model-message">{items.answer}</div>
                                </div>
                            </>

                        )

                    })}
                </div>

                {/* Input Section */}
                <div className="flex  w-full p-4">
                    <div className="w-full  ">

                        <SearchChatBox
                            placeholder="Ask me Anything"
                            className="w-full"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onUploadClick={() => setMessage("")} // 👈 clear karne ke liye callback
                            onSend={handleSend}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section (Optional) */}
            <div className=" p-2 text-center">
                Footer / Extra Info
            </div>
        </div>
    )
}

export default Mainsection