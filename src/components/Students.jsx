import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Students() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((result) => {
        if (Array.isArray(result.data)) {
          // Check if result.data is an array
          setUsers(result.data); // Set users to the fetched array
        } else {
          console.error("Data fetched is not an array:", result.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="py-1 bg-blueGray-50">
      <div class="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-auto mt-20">
        <div className="font-roboto font-bold text-[40px]">Student Marks</div>
        <div class="relative py-4 flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Student RegNumber
                  </th>
                  <th className=" hover:bg-Gray px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    <Link to="/addDocument1Marks" type="button">
                      Status Document1 +
                    </Link>
                  </th>
                  <th className=" hover:bg-Gray px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    <Link to="/addDocument2Marks" type="button">
                      Status Document2 +
                    </Link>
                  </th>
                  <th className=" hover:bg-Gray px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    <Link to="/addLogBookMarks" type="button">
                      Log book +
                    </Link>
                  </th>
                  <th className=" hover:bg-Gray px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    <Link to="/addProposalMarks" type="button">
                      Proposal +
                    </Link>
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                      {user.regNumber}
                    </td>

                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.doc1Marks}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.doc2Marks}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.logBookMarks}
                    </td>

                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {user.propsalMarks}
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
