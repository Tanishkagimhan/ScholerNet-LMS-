// import React from "react";
// import { BsPeopleFill, BsFillBellFill } from "react-icons/bs";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";
// import { Link } from "react-router-dom";
// import { PiStudentBold } from "react-icons/pi";
// import { MdOutlineGroups2 } from "react-icons/md";

// export default function Dashbord() {
//   const data = [
//     {
//       name: "Assignment 1",
//       Assignment_Progress: 4000,
//       Project_Progress: 2400,
//       amt: 2400,
//     },
//     {
//       name: "Assignment 2",
//       Assignment_Progress: 3000,
//       Project_Progress: 1398,
//       amt: 2210,
//     },
//     {
//       name: "Assignment 3",
//       Assignment_Progress: 2000,
//       Project_Progress: 9800,
//       amt: 2290,
//     },
//     {
//       name: "Assignment 4",
//       Assignment_Progress: 2780,
//       Project_Progress: 3908,
//       amt: 2000,
//     },
//     {
//       name: "Assignment 5",
//       Assignment_Progress: 1890,
//       Project_Progress: 4800,
//       amt: 2181,
//     },
//   ];

//   return (
//     <div>
//       <main className="main-container">
//         <div className="main-title">
//           <h1>DASHBOARD</h1>
//         </div>

//         <div className="main-cards">
//           <div className="card">
//             <div className="card-inner">
//               <h3>STUDENTS</h3>
//               <PiStudentBold className="card_icon" />
//             </div>
//             <Link
//               to="/StudentDetails"
//               className=" to-blue text-white active:bg-dark text-xs font-roboto font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//               type="button"
//             >
//               Student Details
//             </Link>
//           </div>
//           <div className="card">
//             <div className="card-inner">
//               <h3>GROUPS</h3>
//               <MdOutlineGroups2 className="card_icon" />
//             </div>
//             <Link
//               to="/ProjectGroups"
//               className=" to-blue text-white active:bg-dark text-xs font-roboto font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//               type="button"
//             >
//               Student Group
//             </Link>
//           </div>
//           <div className="card">
//             <div className="card-inner">
//               <h3>CUSTOMERS</h3>
//               <BsPeopleFill className="card_icon" />
//             </div>
//             <h1>33</h1>
//           </div>
//           <div className="card">
//             <div className="card-inner">
//               <h3>ALERTS</h3>
//               <BsFillBellFill className="card_icon" />
//             </div>
//             <h1>42</h1>
//           </div>
//         </div>

//         <div className="charts">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               width={500}
//               height={300}
//               data={data}
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="Project_Progress" fill="#8884d8" />
//               <Bar dataKey="Assignment_Progress" fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>

//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               width={500}
//               height={300}
//               data={data}
//               margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="Project_Progress"
//                 stroke="#8884d8"
//                 activeDot={{ r: 8 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Assignment_Progress"
//                 stroke="#82ca9d"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </main>
//     </div>
//   );
// }
