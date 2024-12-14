import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaCommentDots, FaPaperPlane, FaRobot } from 'react-icons/fa';

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#1d3557',
    color: '#fff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    fontSize: '24px',
    transition: 'transform 0.5s ease',
  },
  floatingButtonHover: {
    transform: 'scale(1.1)',
  },
  chatContainer: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '350px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transform: 'scale(1)',
    transition: 'all 0.3s ease',
  },
  chatHeader: {
    backgroundColor: '#457b9d',
    color: '#fff',
    padding: '10px 15px',
    fontSize: '18px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  chatMessages: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#f8f9fa',
  },
  messageRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: '10px',
  },
  botMessageRow: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '14px',
    lineHeight: '1.6',
    wordWrap: 'break-word',
  },
  userBubble: {
    backgroundColor: '#1d3557',
    color: '#fff',
    borderTopRightRadius: '0',
  },
  botBubble: {
    backgroundColor: '#e8f1fa',
    color: '#333',
    borderTopLeftRadius: '0',
  },
  typingIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#666',
  },
  questionContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px',
    gap: '10px',
    borderTop: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
    whiteSpace: 'nowrap',
  },
  questionButton: {
    whiteSpace: 'nowrap',
    padding: '10px',
    backgroundColor: '#457b9d',
    color: '#fff',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    border: 'none',
  },
  suggestionContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '5px 10px',
    backgroundColor: '#e8f1fa',
    borderRadius: '5px',
    marginBottom: '10px',
    gap: '10px',
    flexWrap: 'nowrap',
    fontSize: '14px',
  },
  suggestion: {
    color: '#457b9d',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: '1px solid #457b9d',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    padding: '10px',
    gap: '10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '20px',
  },
  sendButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#e63946',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    width: '40px',
    height: '40px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  sendButtonHover: {
    backgroundColor: '#d62828',
    transform: 'scale(1.05)',
  },
};

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [customQuestion, setCustomQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [typing, setTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const predefinedQuestions = [
    { question: 'What is Forward Collision Warning?', answer: 'Forward Collision Warning helps prevent collisions by alerting the driver of obstacles ahead.' },
    { question: 'How does the system detect objects?', answer: 'The system uses AI models like YOLO and SSD to detect objects in real-time.' },
    { question: 'Is internet required for this system?', answer: 'No, the system works offline after installation.' },
  ];

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      if (messages.length === 0) {
        setTyping(true);
        setTimeout(() => {
          setMessages([{ type: 'bot', text: 'Hello! How can I help you today?' }]);
          setTyping(false);
        }, 1000);
      }
    }
  };

  const handleSendPredefined = (qa) => {
    setMessages([...messages, { type: 'user', text: qa.question }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'bot', text: qa.answer }]);
      setTyping(false);
    }, 1000);
  };

  const handleSendCustom = () => {
    if (!email.trim()) {
      alert('Please provide your email address.');
      return;
    }

    if (customQuestion.trim()) {
      setMessages([...messages, { type: 'user', text: customQuestion }]);
      setTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: 'bot', text: "We'll reply to your query soon!" }]);
        setTyping(false);
      }, 1000);
      sendEmail(customQuestion);
      setCustomQuestion('');
      setSuggestions([]);
    }
  };

  const sendEmail = (question) => {
    emailjs
      .send(
        'service_xz8r7zj', // Your EmailJS service ID
        'template_lgq8vdq', // Your EmailJS template ID
        { message: question, user_email: email }, // Replace with dynamic user email
        'sSE_KEzwnTfP98b_1' // Your EmailJS Public API Key
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send email:', err));
  };

  useEffect(() => {
    if (customQuestion.trim()) {
      const matches = predefinedQuestions.filter((qa) =>
        qa.question.toLowerCase().includes(customQuestion.toLowerCase())
      );
      setSuggestions(matches);
    }// eslint-disable-next-line
  }, [customQuestion]);

  return (
    <div>
      <div
        style={{
          ...styles.floatingButton,
          ...(isOpen ? styles.floatingButtonHover : {}),
        }}
        onClick={toggleChat}
      >
        <FaCommentDots />
      </div>

      {isOpen && (
        <div style={styles.chatContainer}>
          <div style={styles.chatHeader}>
            <FaRobot /> Chat Support
          </div>
          <div style={styles.chatMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...styles.messageRow,
                  ...(message.type === 'bot' ? styles.botMessageRow : {}),
                }}
              >
                <div
                  style={{
                    ...styles.messageBubble,
                    ...(message.type === 'bot' ? styles.botBubble : styles.userBubble),
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {typing && (
              <div style={styles.typingIndicator}>
                <span>Typing...</span>
                <div>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
            )}
          </div>

          <div style={styles.questionContainer}>
            {suggestions.map((qa, index) => (
              <div key={index} style={styles.questionButton} onClick={() => handleSendPredefined(qa)}>
                {qa.question}
              </div>
            ))}
          </div>

          <div style={styles.inputContainer}>
          <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            <input
              type="text"
              placeholder="Type your question..."
              style={styles.input}
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendCustom();
              }}
            />
            <div
              style={{
                ...styles.sendButton,
                ...(customQuestion.trim() ? styles.sendButtonHover : {}),
              }}
              onClick={handleSendCustom}
            >
              <FaPaperPlane />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;