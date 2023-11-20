"use client"
import React, { useEffect } from 'react';

const ChatApp = () => {
  useEffect(() => {
    // Check if the chat app is already initialized
    if (typeof window !== 'undefined' && !window.chatAppInitialized) {
      // Set a flag to indicate that the chat app is initialized
      window.chatAppInitialized = true;

      // Initialize the chat app
      const gcaMain = new GetChatApp({
        // Your configuration options here
        'mobileNumber': '+201275646082',
        'titleMessage': '👋 Chat with me on WhatsApp!',
        'welcomeMessage': 'Hey there!🙌<br /> <br /> Get in touch with me by typing a message here. It will go straight to my phone! 🔥<br /> <br /> ~Your Name',
        'position': 'right',
        'platforms': {
          'whatsapp': true,
          'facebook': false,
          'email': false,
          'instagram': false,
          'telegram': false,
          'x': false,
          'tiktok': false,
          'linkedin': false,
          'phone': false,
          'customLink': false,
        },
        'facebookPageId': '',
        'facebookMessage': 'Hi there! Start chatting with us now!',
        'facebookReplyTime': 'a day',
        'gcaEmailAddress': '',
        'gcaEmailSubject': 'belall.mohameed.9@gmail.com',
        'gcaInstagramUsername': '',
        'gcaTelegramUsername': '',
        'gcaXUsername': '',
        'gcaTiktokUsername': '',
        'gcaLinkedinUsername': '',
        'gcaPhoneNumber': '',
        'gcaCustomLink': '',
        'multipleContacts': false
      });

      // Cleanup function if needed
      return () => {
        // Cleanup logic here
      };
    }
  }, []); // Run the effect only once on mount

  return <div id="gca-container"></div>; // Add a container for your chat app
};

export default ChatApp;