import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FeedbackCarousel.css';
import Varinder from './varinder.jpg';
import Justin from './justin.jpg';

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalDuration = 5000;

  const feedbacks = [
    {
      name: 'Varinder Singh',
      role: 'Senior Full Stack Developer',
      text: `Gunvansh Singh is an exceptional full-stack engineer whose innovative solutions and unwavering dedication have consistently driven our projects to success. His outstanding problem-solving skills and proactive approach make him an invaluable team asset. Gunvansh's mentorship and collaborative spirit foster a positive and productive work environment. His expertise and commitment to excellence set a benchmark for our team.`,
      avatar: Varinder,
    },
    {
      name: 'Justin Alm',
      role: 'Staff UI/UX Designer at Article.com',
      text: 'Gunvansh Siingh has consistently demonstrated strong technical expertise in both front-end and back-end technologies, particularly excelling with tech like React, Node.js and CSS. His problem-solving skills are exceptional, delivering efficient solutions that have significantly improved project timelines, as seen in the Notify Me project. Beyond his technical contributions, Gunvansh is a valuable mentor, providing guidance to junior developers and fostering a positive, collaborative team environment. He takes full ownership of his work, ensuring timely, high-quality deliverables, and his dedication has been evident throughout his recent projects.',
      avatar: Justin,
    },
    {
      name: 'Justin Alm1',
      role: 'Staff UI/UX Designer at Article.com',
      text: 'Gunvansh Siingh has consistently demonstrated strong technical expertise in both front-end and back-end technologies, particularly excelling with tech like React, Node.js and CSS. His problem-solving skills are exceptional, delivering efficient solutions that have significantly improved project timelines, as seen in the Notify Me project. Beyond his technical contributions, Gunvansh is a valuable mentor, providing guidance to junior developers and fostering a positive, collaborative team environment. He takes full ownership of his work, ensuring timely, high-quality deliverables, and his dedication has been evident throughout his recent projects.',
      avatar: Justin,
    },
    {
      name: 'Justin Alm2',
      role: 'Staff UI/UX Designer at Article.com',
      text: 'Gunvansh Siingh has consistently demonstrated strong technical expertise in both front-end and back-end technologies, particularly excelling with tech like React, Node.js and CSS. His problem-solving skills are exceptional, delivering efficient solutions that have significantly improved project timelines, as seen in the Notify Me project. Beyond his technical contributions, Gunvansh is a valuable mentor, providing guidance to junior developers and fostering a positive, collaborative team environment. He takes full ownership of his work, ensuring timely, high-quality deliverables, and his dedication has been evident throughout his recent projects.',
      avatar: Justin,
    },
    // ... add more feedback objects
  ];

  const nextFeedback = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  }, [feedbacks.length]);

  const prevFeedback = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  }, [feedbacks.length]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  useEffect(() => {
    let intervalId: number | null = null;
    if (isAutoPlaying) {
      intervalId = window.setInterval(nextFeedback, intervalDuration);
    }
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextFeedback, intervalDuration]);

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Your Feedback Matters!</h2>
      <div
        className="carousel-container"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="feedback-card"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-content">
              <img className="avatar" src={feedbacks[currentIndex].avatar} alt={feedbacks[currentIndex].name} />
              <div className="text-content">
                <h3 className="name">{feedbacks[currentIndex].name}</h3>
                <p className="role">{feedbacks[currentIndex].role}</p>
                <p className="text">{feedbacks[currentIndex].text}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="nav-buttons">
          <button className="nav-button prev" onClick={() => { prevFeedback(); pauseAutoPlay(); }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="nav-button next" onClick={() => { nextFeedback(); pauseAutoPlay(); }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;