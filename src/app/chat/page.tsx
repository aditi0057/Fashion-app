'use client';
import { useState } from 'react';
import Head from 'next/head';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

const HelpPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: 'How to track my order?', answer: 'You can track your order by going to the "My Orders" section in your account.', isOpen: false },
    { id: 2, question: 'How can I return a product?', answer: 'To return a product, go to "My Orders" and select the item you want to return. Follow the instructions provided.', isOpen: false },
    { id: 3, question: 'What payment methods are accepted?', answer: 'We accept various payment methods including credit/debit cards, net banking, and UPI.', isOpen: false },
    { id: 4, question: 'How to apply a discount code?', answer: 'You can apply a discount code at the checkout page before making the payment.', isOpen: false },
    { id: 5, question: 'What is the delivery time?', answer: 'Delivery time varies by location but typically takes 3-7 business days.', isOpen: false },
    { id: 6, question: 'How do I contact customer service?', answer: 'You can contact customer service via the "Contact Us" section on our website.', isOpen: false },
    { id: 7, question: 'Can I change my delivery address?', answer: 'Yes, you can change your delivery address from the "My Account" section before the order is shipped.', isOpen: false },
    { id: 8, question: 'What is the refund policy?', answer: 'Our refund policy allows returns within 30 days of delivery for a full refund.', isOpen: false },
    { id: 9, question: 'How do I know if an item is in stock?', answer: 'The availability of an item is displayed on the product page.', isOpen: false },
    { id: 10, question: 'How to update my profile information?', answer: 'You can update your profile information in the "My Account" section.', isOpen: false },
  ]);

  const toggleAnswer = (id) => {
    setQuestions(questions.map(question =>
      question.id === id ? { ...question, isOpen: !question.isOpen } : question
    ));
  };

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, { id: questions.length + 1, question: newQuestion, answer: 'The answer will be provided by our assistance.', isOpen: false }]);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center">
      <Head>
        <title>Help Page - Fashion App</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" />
      </Head>
      <header className="bg-white py-8 px-12 border-b border-gray-200 w-full flex justify-center">
        <div className="flex items-center">
          <QuestionMarkCircleIcon className="h-10 w-10 text-pink-500" />
          <h1 className="ml-4 text-4xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>Everything you need to know about</h1>
        </div>
      </header>
      <div className="flex-1 p-8 w-full max-w-5xl space-y-14 gap-28">
        {questions.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 border-2 border-transparent hover:border-gradient-to-r hover:from-pink-500 hover:via-pink-300 hover:to-pink-500 cursor-pointer"
            onClick={() => toggleAnswer(item.id)}
          >
            <h2 className="text-2xl text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.question}</h2>
            {item.isOpen && <p className="text-xl text-gray-700 mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.answer}</p>}
          </div>
        ))}
      </div>
      <div className="p-8 bg-white border-t border-gray-200 w-full max-w-5xl">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Type your question..."
            className="flex-1 py-4 px-6 outline-none rounded-l-lg border border-gray-300 focus:border-pink-500 text-xl"
            id="questionInput"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-r-lg ml-2 transition duration-300 text-xl font-bold"
            onClick={() => {
              const questionInput = document.getElementById('questionInput');
              addQuestion(questionInput.value);
              questionInput.value = '';
            }}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
