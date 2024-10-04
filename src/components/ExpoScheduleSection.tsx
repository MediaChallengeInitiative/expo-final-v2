import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import scheduleData from "../../schedule.json";

interface Event {
  id: string;
  time: string;
  title: string;
  description: string;
  details: string;
}

interface DaySchedule {
  day: string;
  date: string;
  title: string;
  description: string;
  events: Event[];
}

interface ExpoSchedule {
  theme: string;
  date: string;
  venue: string;
  days: DaySchedule[];
}

interface TabButtonProps {
  day: string;
  date: string;
  isActive: boolean;
  onClick: () => void;
}

interface EventCardProps {
  event: Event;
  index: number;
}

const TabButton: React.FC<TabButtonProps> = ({
  day,
  date,
  isActive,
  onClick
}) => (
  <motion.button
    className={`flex-1 px-4 py-2 font-semibold text-sm sm:text-base ${
      isActive ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-800"
    }`}
    onClick={onClick}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    <div>{day}</div>
    <div className="text-xs sm:text-sm font-normal">{date}</div>
  </motion.button>
);

const EventCard: React.FC<EventCardProps> = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-4 rounded-lg shadow-sm mb-4"
  >
    <p className="text-orange-500 font-semibold">{event.time}</p>
    <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
    <p className="text-gray-600 mb-2">{event.description}</p>
    <p className="text-sm text-gray-500 mb-4">{event.details}</p>
    <Link href={`/events/${event.id}`}>
      <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
        Learn More
      </span>
    </Link>
  </motion.div>
);

const ExpoScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(0);
  const expoData: ExpoSchedule = scheduleData;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {expoData.theme}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Date: {expoData.date} | Venue: {expoData.venue}
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap mb-6">
            {expoData.days.map((day: DaySchedule, index: number) => (
              <TabButton
                key={index}
                day={`Day ${index + 1}`}
                date={day.date}
                isActive={activeDay === index}
                onClick={() => setActiveDay(index)}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {expoData.days[activeDay].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {expoData.days[activeDay].description}
              </p>
              {expoData.days[activeDay].events.map(
                (event: Event, index: number) => (
                  <EventCard key={event.id} event={event} index={index} />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExpoScheduleSection;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// interface DaySchedule {
//   day: string;
//   date: string;
//   events: Event[];
// }

// interface Event {
//   id: string;
//   time: string;
//   title: string;
//   description: string;
// }

// interface DaySchedule {
//   day: string;
//   date: string;
//   events: Event[];
// }

// interface TabButtonProps {
//   day: string;
//   date: string;
//   isActive: boolean;
//   onClick: () => void;
// }

// interface EventCardProps {
//   event: Event;
//   index: number;
// }

// const scheduleData: DaySchedule[] = [
//   {
//     day: "Day 1",
//     date: "Sept 1",
//     events: [
//       {
//         id: "1",
//         time: "09:00 AM",
//         title: "Opening Ceremony",
//         description: "Welcome address and keynote speech"
//       },
//       {
//         id: "2",
//         time: "11:00 AM",
//         title: "Panel Discussion",
//         description: "The Future of Journalism in the Digital Age"
//       },
//       {
//         id: "3",
//         time: "02:00 PM",
//         title: "Workshop",
//         description: "Investigative Reporting Techniques"
//       },
//       {
//         id: "4",
//         time: "04:30 PM",
//         title: "Networking Session",
//         description: "Meet and greet with industry professionals"
//       }
//     ]
//   },
//   {
//     day: "Day 2",
//     date: "Sept 2",
//     events: [
//       {
//         id: "5",
//         time: "10:00 AM",
//         title: "Keynote Speech",
//         description: "Ethical Challenges in Modern Journalism"
//       },
//       {
//         id: "6",
//         time: "01:00 PM",
//         title: "Interactive Session",
//         description: "Data Journalism: Tools and Techniques"
//       },
//       {
//         id: "7",
//         time: "03:30 PM",
//         title: "Panel Discussion",
//         description: "Diversity and Inclusion in Newsrooms"
//       }
//     ]
//   },
//   {
//     day: "Day 3",
//     date: "Sept 3",
//     events: [
//       {
//         id: "8",
//         time: "09:30 AM",
//         title: "Workshop",
//         description: "Mobile Journalism Masterclass"
//       },
//       {
//         id: "9",
//         time: "11:30 AM",
//         title: "Panel Discussion",
//         description: "The Role of AI in News Production"
//       },
//       {
//         id: "10",
//         time: "02:30 PM",
//         title: "Interactive Session",
//         description: "Building Your Personal Brand as a Journalist"
//       },
//       {
//         id: "11",
//         time: "05:00 PM",
//         title: "Networking Event",
//         description: "Young Journalists Meetup"
//       }
//     ]
//   },
//   {
//     day: "Day 4",
//     date: "Sept 4",
//     events: [
//       {
//         id: "12",
//         time: "10:00 AM",
//         title: "Closing Keynote",
//         description: "The Future of Global Journalism"
//       },
//       {
//         id: "13",
//         time: "12:00 PM",
//         title: "Awards Ceremony",
//         description: "Recognizing Outstanding Contributions"
//       },
//       {
//         id: "14",
//         time: "02:30 PM",
//         title: "Panel Discussion",
//         description: "Sustainable Models for Quality Journalism"
//       },
//       {
//         id: "15",
//         time: "04:30 PM",
//         title: "Closing Ceremony",
//         description: "Reflections and Looking Ahead"
//       }
//     ]
//   }
// ];

// const TabButton: React.FC<TabButtonProps> = ({
//   day,
//   date,
//   isActive,
//   onClick
// }) => (
//   <motion.button
//     className={`flex-1 px-4 py-2 font-semibold ${
//       isActive ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-800"
//     }`}
//     onClick={onClick}
//     whileHover={{ y: -2 }}
//     whileTap={{ y: 0 }}
//   >
//     <div>{day}</div>
//     <div className="text-sm font-normal">{date}</div>
//   </motion.button>
// );

// const EventCard: React.FC<EventCardProps> = ({ event, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.1 }}
//     className="bg-white p-4 rounded-lg shadow-sm mb-4"
//   >
//     <p className="text-orange-500 font-semibold">{event.time}</p>
//     <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
//     <p className="text-gray-600 mb-2">{event.description}</p>
//     <Link href={`/events/${event.id}`}>
//       <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
//         Attend
//       </span>
//     </Link>
//   </motion.div>
// );

// const ExpoScheduleSection: React.FC = () => {
//   const [activeDay, setActiveDay] = useState<number>(0);

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-orange-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//           Expo Schedule
//         </h2>
//         <div className="max-w-4xl mx-auto">
//           <div className="flex mb-6">
//             {scheduleData.map((day, index) => (
//               <TabButton
//                 key={index}
//                 day={day.day}
//                 date={day.date}
//                 isActive={activeDay === index}
//                 onClick={() => setActiveDay(index)}
//               />
//             ))}
//           </div>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeDay}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               {scheduleData[activeDay].events.map((event, index) => (
//                 <EventCard key={index} event={event} index={index} />
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpoScheduleSection;
