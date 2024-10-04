"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  HandThumbUpIcon,
  CheckCircleIcon,
  PlayIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface Question {
  id: string;
  text: string;
  votes: number;
  isAnswered: boolean;
  answer?: string;
}

interface Session {
  id: string;
  title: string;
  coverImage: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      text: "What's the future of print media?",
      votes: 5,
      isAnswered: true,
      answer:
        "While digital media continues to grow, print media is evolving to offer unique, tactile experiences. Many predict a hybrid future where print and digital coexist, each serving different purposes and audiences."
    },
    {
      id: "2",
      text: "How can we combat fake news effectively?",
      votes: 3,
      isAnswered: true,
      answer:
        "Combating fake news requires a multi-faceted approach: improving media literacy, fact-checking tools, responsible reporting, and platform policies. Encouraging critical thinking and source verification is crucial."
    },
    {
      id: "3",
      text: "What skills should modern journalists focus on?",
      votes: 2,
      isAnswered: false
    }
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const recentSessions: Session[] = [
    {
      id: "1",
      title: "Digital Journalism Trends",
      coverImage: "/images/about1.jpg"
    },
    {
      id: "2",
      title: "Investigative Reporting",
      coverImage: "/images/about1.jpg"
    },
    {
      id: "3",
      title: "Data Visualization in News",
      coverImage: "/images/about1.jpg"
    },
    {
      id: "4",
      title: "Ethical Challenges in Modern Media",
      coverImage: "/images/about1.jpg"
    },
    {
      id: "5",
      title: "Social Media and Journalism",
      coverImage: "/images/about1.jpg"
    }
  ];

  const handleVote = (questionId: string) => {
    setQuestions(
      questions
        .map((q) => (q.id === questionId ? { ...q, votes: q.votes + 1 } : q))
        .sort((a, b) => b.votes - a.votes)
    );
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions(
        [
          ...questions,
          {
            id: Date.now().toString(),
            text: newQuestion,
            votes: 0,
            isAnswered: false
          }
        ].sort((a, b) => b.votes - a.votes)
      );
      setNewQuestion("");
    }
  };

  const toggleAnswer = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="container mx-auto px-4 pt-8">
      <section className="bg-white dark:bg-gray-900 mb-8">
        <div className="py-16 sm:px-4 px-0 mx-auto max-w-screen-xl lg:py-16 grid">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Q&A</h2>
          <form onSubmit={handleSubmitQuestion} className="mb-4">
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Ask a question..."
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="mt-2 bg-orange-500 text-white px-4 py-2 rounded w-full sm:w-auto"
            >
              Submit Question
            </button>
          </form>
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="p-4 bg-gray-100 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-semibold">{q.text}</p>
                    {q.isAnswered && (
                      <span className="text-green-500 flex items-center mt-2">
                        <CheckCircleIcon className="w-5 h-5 mr-1" /> Answered
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    {!q.isAnswered && (
                      <button
                        onClick={() => handleVote(q.id)}
                        className="flex items-center bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      >
                        <HandThumbUpIcon className="w-4 h-4 mr-1" /> VOTE (
                        {q.votes})
                      </button>
                    )}
                    {q.isAnswered && (
                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className="flex items-center bg-green-500 text-white px-3 py-1 rounded"
                      >
                        {expandedQuestion === q.id ? (
                          <ChevronUpIcon className="w-4 h-4 mr-1" />
                        ) : (
                          <ChevronDownIcon className="w-4 h-4 mr-1" />
                        )}
                        {expandedQuestion === q.id
                          ? "Hide Answer"
                          : "View Answer"}
                      </button>
                    )}
                  </div>
                </div>
                {expandedQuestion === q.id && q.answer && (
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p>{q.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="my-16 py-4">
          <h2 className="text-2xl font-semibold mb-4">Recent Sessions</h2>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4
              }
            }}
            className="mySwiper"
          >
            {recentSessions.map((session) => (
              <SwiperSlide key={session.id}>
                <div className="relative">
                  <Image
                    width={300}
                    height={300}
                    src={session.coverImage}
                    alt={session.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg">
                    <h3 className="text-white font-bold mb-2">
                      {session.title}
                    </h3>
                    <button className="bg-orange-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <PlayIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
