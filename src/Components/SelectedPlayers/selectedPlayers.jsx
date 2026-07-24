import SelectedCard from "../SelectedCard/selectedCard";


const SelectedPlayers = ({SinningPlayers , removePlayers , setToggle }) => {
     console.log(SinningPlayers)
    return (
       <div className="max-w-6xl mx-auto space-y-2 p-4 ">
           {SinningPlayers.map((player) => (
  <SelectedCard
  removePlayers={removePlayers}
    key={player.id}
    player={player}
  />
))}
          <button onClick={ ()=> setToggle(true)} className="bg-[#E7FE29] py-4 px-5 font-bold mt-5 cursor-pointer rounded-2xl"> Add More Players</button>  
       </div>
    );
};

export default SelectedPlayers;