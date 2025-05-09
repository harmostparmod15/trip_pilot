import React from "react";
import { Clock, Users, Calendar, ArrowRight, Star } from "lucide-react";
import tokyoImg from "../assets/tokyo.jpg";
import planeImg from "../assets/plane.png";
import accmImg1 from "../assets/accimg1.png";
import accmImg2 from "../assets/accimg2.png";
import activityImg1 from "../assets/activity1.png";
import activityImg2 from "../assets/activity2.png";
import activityImg3 from "../assets/activity3.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
            <p className="text-gray-400">Ready for the trip?</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
            C
          </div>
        </div>

        {/* Upcoming Trip */}
        <h2 className="text-xl font-semibold mb-3">Your Upcoming Trip</h2>
        <div className="relative rounded-xl overflow-hidden mb-6">
          <img
            src={tokyoImg}
            alt="Tokyo"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/70 p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="text-3xl font-bold">TOKYO</h3>
              <svg
                className="w-6 h-6 transform rotate-45"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-200">27.01.2025 - 02.02.2025</p>
              <div className="flex flex-wrap gap-4 mt-3">
                {[
                  { icon: Clock, label: "8 Days", sub: "Duration" },
                  { icon: Users, label: "4 (2M,2F)", sub: "Group Size" },
                  { icon: Calendar, label: "14", sub: "Activities" },
                ].map(({ icon: Icon, label, sub }, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-blue-800/80 rounded-full p-1">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold">{label}</p>
                      <p className="text-xs text-gray-300">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flight Details */}
        <SectionHeader title="Flight Details" />
        <div className="bg-blue-600 rounded-xl p-4 mb-6">
          <p className="text-sm mb-1">26.01.2025, 10:50 am</p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">DEL</p>
              <p className="text-sm text-blue-200">Delhi, India</p>
            </div>
            <ArrowRight className="w-5 h-5 shrink-0" />
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">NRT</p>
              <p className="text-sm text-blue-200">Narita, Tokyo</p>
            </div>
            <img
              src={planeImg}
              alt="Airplane"
              className="w-1/2 md:w-1/4 object-contain"
            />
          </div>
        </div>

        {/* Accommodation */}
        <SectionHeader title="Accommodation" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[accmImg1, accmImg2].map((img, index) => (
            <AccommodationCard
              key={index}
              img={img}
              name={
                index === 0 ? "Shinagawa Prince Hotel" : "Mercure Tokyo Hotel"
              }
              checkIn={
                index === 0 ? "26.01.2025, 11:15 pm" : "28.01.2025, 6:00 pm"
              }
              checkOut={
                index === 0 ? "28.01.2025, 11:15 am" : "30.01.2025, 11:15 am"
              }
              nights="2 Nights"
              rating={index === 0 ? "4.0 Very Good" : "4.1 Very Good"}
              status={index === 0 ? "Confirmed" : "Pending"}
              statusColor={index === 0 ? "text-green-500" : "text-orange-500"}
              statusIcon={index === 0 ? "check" : "clock"}
            />
          ))}
        </div>

        {/* Activities */}
        <SectionHeader title="Activities" />
        <div className="bg-gray-900 rounded-xl p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
              Day Plan
            </span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
              14 Activities
            </span>
          </div>

          {/* Calendar */}
          <div className="flex overflow-x-auto gap-1 pb-2 mb-4">
            {["27", "28", "29", "30", "31", "1"].map((day, i) => (
              <div
                key={i}
                className={`flex flex-col items-center w-2/12 p-1 rounded-md ${
                  i === 0 ? "bg-green-500 text-black" : "bg-gray-800 text-white"
                }`}
              >
                <span className="text-xs">{i < 5 ? "JAN" : "FEB"}</span>
                <span className="text-sm">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT"][i]}
                </span>
                <span className="text-lg font-bold">{day}</span>
              </div>
            ))}
          </div>

          {/* Day 1 Activities */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="bg-green-500 text-black px-2 py-0.5 rounded-md text-xs font-medium mr-2">
                Day 1
              </span>
              <span className="text-sm">27.01.2025</span>
            </div>
            <div className="flex items-center text-green-500 text-sm">
              <Users className="w-4 h-4 mr-1" />3 Activities
            </div>
          </div>

          {/* Activity List */}
          <div className="space-y-4">
            {[
              {
                img: activityImg1,
                title: "Senso-ji Temple & Nakamise Shopping Street",
                timing: "8:15 am Morning",
                duration: "3 hours",
                pickup: "From Hotel",
              },
              {
                img: activityImg2,
                title: "Tokyo Sky Tree",
                timing: "1:00 pm Afternoon",
                duration: "3 hours",
                pickup: "From Nakamise Street",
              },
              {
                img: activityImg3,
                title: "Kimono Wearing",
                timing: "Anytime before 8:00pm",
                duration: "1-2 hours",
                pickup: "From Hotel",
              },
            ].map((activity, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-3">
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full sm:w-1/3 h-40 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Timing: {activity.timing}
                    <br />
                    Duration: {activity.duration}
                    <br />
                    Pick up: {activity.pickup}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-xl font-semibold">{title}</h2>
    <a href="#" className="text-sm text-blue-400">
      See all
    </a>
  </div>
);

// Accommodation Card Component
const AccommodationCard = ({
  img,
  name,
  checkIn,
  checkOut,
  nights,
  rating,
  status,
  statusColor,
}) => (
  <div className="bg-gray-900 rounded-xl overflow-hidden">
    <div className="relative">
      <img src={img} alt={name} className="w-full h-40 object-cover" />
      <div className="absolute top-2 left-2 bg-blue-600 rounded-md px-1 py-0.5 flex items-center">
        <Star className="w-3 h-3 fill-current" />
        <span className="text-xs ml-1">{rating}</span>
      </div>
    </div>
    <div className="p-2">
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-xs text-gray-400">Check in: {checkIn}</p>
      <p className="text-xs text-gray-400">Check out: {checkOut}</p>
      <div className="flex justify-between items-center mt-1">
        <p className="text-xs">{nights}</p>
        <span className={`text-xs flex items-center ${statusColor}`}>
          {status === "Confirmed" ? (
            <CheckIcon />
          ) : (
            <Clock className="w-3 h-3 mr-1" />
          )}
          {status}
        </span>
      </div>
    </div>
  </div>
);

const CheckIcon = () => (
  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Dashboard;
