import Head from 'next/head';

const ChatMessage = ({ message, sender }) => (
    <div className={`flex items-start mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs px-4 py-2 rounded-lg shadow ${sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-white text-gray-700'}`}>
            <p className="text-sm">{message}</p>
        </div>
    </div>
);

const ChatPage = () => (
    <>
        <Head>
            <title>Fashion Chat - Outfit Coordination</title>
        </Head>
        <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Fashion Chat & Outfit Coordination</h1>
                
                {/* Example chat messages */}
                <ChatMessage message="Hey, what do you think of this outfit?" sender="user" />
                <ChatMessage message="It looks great! Maybe try adding some accessories." sender="other" />
                
                {/* Example message input */}
                <div className="mt-8 flex">
                    <input type="text" placeholder="Type your message..." className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
                </div>
            </div>
        </div>
    </>
);

export default ChatPage;
