import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjectGroups() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);

  // Filter members based on search query
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = users.filter(
      (user) =>
        user.researchTitle.toLowerCase().includes(query.toLowerCase()) ||
        user.leaderName.toLowerCase().includes(query.toLowerCase()) ||
        user.groupNumber.toLowerCase().includes(query.toLowerCase()) ||
        user.leaderRegNumber.toLowerCase().includes(query.toLowerCase()) ||
        user.member1RegNumber.toLowerCase().includes(query.toLowerCase()) ||
        user.member2RegNumber.toLowerCase().includes(query.toLowerCase()) ||
        user.member3RegNumber.toLowerCase().includes(query.toLowerCase()) ||
        user.journalName.toLowerCase().includes(query.toLowerCase()) ||
        user.issnNumber.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMembers(filtered);
  };

  // Display all members or filtered members based on search query
  const displayedMembers = searchQuery ? filteredMembers : users;

  useEffect(() => {
    axios
      .get("http://localhost:3000/projectgroups")
      .then((result) => {
        if (Array.isArray(result.data)) {
          setUsers(result.data);
        } else {
          console.error("Data fetched is not an array:", result.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="py-1 bg-blueGray-50">
      <div class="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-auto mt-20">
        <div className="font-roboto font-bold text-[40px]">Project Groups</div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className=" my-4 px-3 py-2 placeholder-gray-300 text-gray-600 bg-white rounded-md text-sm border border-[#081A51] focus:outline-none focus:ring focus:border-blue-500"
        />

        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Research Title
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Group Number
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Leader Name
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Leader Register Number
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Member1 RegNumber
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Member2 RegNumber
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Member3 RegNumber
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Journal Name
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Issn Number
                  </th>
                </tr>
              </thead>

              <tbody>
                {displayedMembers.map((user, index) => (
                  <tr key={index}>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                      {user.researchTitle}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.groupNumber}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.leaderName}
                    </td>

                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.leaderRegNumber}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.member1RegNumber}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.member2RegNumber}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.member3RegNumber}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.journalName}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.issnNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
