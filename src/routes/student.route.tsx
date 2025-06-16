import OffereedCourse from "../pages/student/OffereedCourse";
import Studentashboard from "../pages/student/Studentashboard";

export const studentPaths = [
  {
    name: "Dashboar",
    path: "dashboard",
    element: <Studentashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OffereedCourse />,
  },
];
