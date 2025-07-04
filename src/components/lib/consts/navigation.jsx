import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashbord",
    label: "Dashbord",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "projects",
    label: "Projects",
    path: "/projects",
    icon: <HiOutlineCube />,
  },
  {
    key: "projectgroups",
    label: "Project Groups",
    path: "/projectgroups",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "students",
    label: "Student Marks",
    path: "/students",
    icon: <HiOutlineUsers />,
  },
];

export const HIDDEN_LINKS = [
  {
    key: "addDocument1Marks",
    label: "Add Document1 Marks",
    path: "/addDocument1Marks",
  },
  {
    key: "addDocument2Marks",
    label: "Add Document1 Marks",
    path: "/addDocument1Marks",
  },
  {
    key: "addLogBookMarks",
    label: "Add Log Book Marks",
    path: "/addLogBookMarks",
  },
  {
    key: "addProposalMarks",
    label: "Add Proposal Marks",
    path: "/addProposalMarks",
  },
];
