import { Suspense, useState } from "react";
import "./App.css";
  import {toast, ToastContainer} from 'react-toastify';
import AvailablePlayers from "./Components/AvailablePlayers/availablePlayers";
import Banner from "./Components/Banner/banner";
import Navbar from "./Components/Navbar/navbar";
import SelectedPlayers from "./Components/SelectedPlayers/selectedPlayers";
import Subscribe from "./Components/Subscribe/subscribe";
import Footer from "./Components/Footer/footer";

const fetchPlayerData = async () => {
  const res = await fetch("/players.JSON");
  return res.json();
};
const playerDataPromise = fetchPlayerData();
function App() {
  const [toggle, setToggle] = useState(true);
  const [selectedId, setSelectedId] = useState([]);
  const [AvailableBalance, setBalance] = useState(1000000000);
  const [SinningPlayers, SetSiningPlayers] = useState([]);
  const removePlayers = (p) => {
    const filterData = SinningPlayers.filter((ply) => ply.id != p.id);
    SetSiningPlayers(filterData);

    setBalance(AvailableBalance + parseInt(p.price.split(",").join("")));
    toast("Player Removed. Credits Refunded.")
    
  };
  return (
    <>
      <Navbar AvailableBalance={AvailableBalance}></Navbar>

      <Banner></Banner>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <h2 className="text-2xl font-bold">
          {" "}
          {toggle
            ? "Available Players"
            : `Selected Players (${SinningPlayers.length}/6)`}
        </h2>

        <div className="flex font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`rounded-l-2xl border border-r-0 border-gray-300 px-5 py-3 ${
              toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setToggle(false)}
            className={`rounded-r-2xl border border-l-0 border-gray-300 px-5 py-3 ${
              !toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({SinningPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 sm:w-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow"
                >
                  <div className="skeleton h-56 w-full rounded-xl"></div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="skeleton h-8 w-8 rounded-full"></div>
                    <div className="skeleton h-5 w-40"></div>
                  </div>

                  <div className="mt-3 flex justify-between">
                    <div className="skeleton h-4 w-24"></div>
                    <div className="skeleton h-6 w-20 rounded-full"></div>
                  </div>

                  <div className="my-4 border-t"></div>

                  <div className="skeleton h-5 w-20"></div>

                  <div className="mt-3 flex justify-between">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="skeleton h-6 w-24"></div>
                    <div className="skeleton h-10 w-28 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <AvailablePlayers
            SetSiningPlayers={SetSiningPlayers}
            SinningPlayers={SinningPlayers}
            setBalance={setBalance}
            AvailableBalance={AvailableBalance}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
            playerDataPromise={playerDataPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
      <SelectedPlayers AvailablePlayers={AvailablePlayers} toggle={toggle} setToggle={setToggle}
          removePlayers={removePlayers}
          SinningPlayers={SinningPlayers}
        ></SelectedPlayers>
      )}
      <div className="">
        <Subscribe></Subscribe>
        </div>

        <div>
          <Footer></Footer>
        </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
