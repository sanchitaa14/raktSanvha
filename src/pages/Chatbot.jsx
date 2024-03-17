import React, { useEffect } from 'react';

const ChatbotComponent = () => {
    useEffect(() => {

        // try{
            const script = document.createElement('script');
            script.src = "https://www.chatbase.co/embed.min.js";
            script.defer = true;
            script.setAttribute("chatbotId", "7Ky-NP9CslSkoeS8u3Dkk");
            script.setAttribute("domain", "www.chatbase.co");

            script.onerror = () => console.error('Failed to load chatbot script');
            document.body.appendChild(script);
        
            return () => {
                document.body.removeChild(script);
            };
        // }catch(err) {
        //     console.log(err);
        // }
    }, []); 

    return (    
        <div id="chatbase-chatbot"></div>
    );
};

export default ChatbotComponent;