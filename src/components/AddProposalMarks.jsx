import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProposalMarks() {
  const [regNumber, setregNumber] = useState();
  const [rubik01, setRubik01] = useState();
  const [rubik02, setRubik02] = useState();
  const [rubik03, setRubik03] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate sum of digits for each rubik score
    const sumRubik01 = Array.from(String(rubik01), Number).reduce(
      (a, b) => a + b,
      0
    );
    const sumRubik02 = Array.from(String(rubik02), Number).reduce(
      (a, b) => a + b,
      0
    );
    const sumRubik03 = Array.from(String(rubik03), Number).reduce(
      (a, b) => a + b,
      0
    );
    // Calculate total marks by summing individual digit sums
    const propsalMarks = sumRubik01 + sumRubik02 + sumRubik03;
    const studentData = {
      rubik01,
      rubik02,
      rubik03,
    };
    axios
      .put(`http://localhost:3000/addProposalMarks/${regNumber}`, studentData)
      .then((result) => {
        console.log(result);
        navigate("/students");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <div class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-20">
          <div className="font-roboto font-bold text-[40px]">
            Add Proposal Marks
          </div>
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ">
            <form
              onSubmit={handleSubmit}
              className=" gap-4  font-roboto text-[16px]  m-10 "
            >
              <div className=" gap-4">
                <div className="mb-8 flex gap-12 items-center justify-center">
                  <label htmlFor="name1" className="mr-10 ">
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Student Name"
                    className="form-control p-3 rounded-lg w-[250px] bg-Gray"
                    value={regNumber}
                    onChange={(e) => setregNumber(e.target.value)}
                  />
                </div>
                <div className="mb-8 flex gap-[86px] items-center justify-center">
                  <label htmlFor="name1" className="mr-10 ">
                    Rubik 01
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Rubik01 mark"
                    className="form-control p-3 rounded-lg w-[250px] bg-Gray"
                    value={rubik01}
                    onChange={(e) => setRubik01(e.target.value)}
                  />
                </div>
                <div className="mb-8 flex gap-[86px] items-center justify-center">
                  <label htmlFor="name1" className="mr-10 ">
                    Rubik 02
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Rubik02 mark"
                    className="form-control p-3 rounded-lg w-[250px] bg-Gray"
                    value={rubik02}
                    onChange={(e) => setRubik02(e.target.value)}
                  />
                </div>
                <div className="mb-8 flex gap-[86px] items-center justify-center">
                  <label htmlFor="name1" className="mr-10 ">
                    Rubik 03
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Rubik03 mark"
                    className="form-control p-3 rounded-lg w-[250px] bg-Gray"
                    value={rubik03}
                    onChange={(e) => setRubik03(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="  bg-light text-white active:bg-dark text-xs font-roboto font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
