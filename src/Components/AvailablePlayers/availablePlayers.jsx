import { use } from "react";
import AvailableCard from "../AvailableCard/availableCard";


const AvailablePlayers = ({playerDataPromise , selectedId , setSelectedId ,AvailableBalance ,setBalance , SinningPlayers , SetSiningPlayers}) => {
    const playerData = use(playerDataPromise);
    return (
        <div className="max-w-6xl mx-auto">
        <div className="mx-auto mt-10 grid    grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  ">
            {
            playerData.map(player => <AvailableCard SetSiningPlayers={SetSiningPlayers} SinningPlayers={SinningPlayers} setBalance={setBalance} AvailableBalance={AvailableBalance} setSelectedId={setSelectedId} selectedId={selectedId} player={player} key={player.id}></AvailableCard> )
            }
           
        </div></div>
    );
};

export default AvailablePlayers;