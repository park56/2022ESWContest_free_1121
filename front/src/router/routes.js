import First from "../components/First";
import Register from "../components/Authentication/register";
import Reservation from "../components/Reservation";
import NotFound from "components/common/NotFound";
import Login from "components/Authentication/login";
import Home from "components/home/Home";
import QrCode from "components/Authentication/qrCode";
import MyHotel from "components/myHotel";
import HotelReservation from "components/HotelReservation";
import MyHotelReservation from "components/MyHotelReservation";
import RoomReservation from "components/RoomReservation";

const routes = [
  { path: "", component: <First />, nav: false, header: false },
  { path: "*", component: <NotFound />, nav: false, header: false },
  { path: "login", component: <Login />, nav: false, header: false },
  { path: "register", component: <Register />, nav: false, header: false },
  { path: "home", component: <Home />, nav: true, header: false },
  { path: "reservation", component: <Reservation />, nav: true, header: true },
  { path: "reservation/:id", component: <HotelReservation />, nav: true, header: true },
  { path: "reservation/:id/:room", component: <RoomReservation />, nav: true, header: true },
  { path: "myhotel", component: <MyHotel />, nav: true, header: true },
  { path: "myreservation", component: <MyHotelReservation />, nav: true, header: true },
  { path: "myreservation/:id", component: <QrCode />, nav: true, header: true },
];

export default routes;
// 이곳에 컴포넌트를 등록하면 됩니다
// path: 컴포넌트가 나올 url
// component: 띄워줄 컴포넌트
// nav: 네브바를 띄워줄지
// footer: 푸터를 띄워줄지
