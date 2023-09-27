import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      <ul>
        {error.length == 0 ? (
          games.map((game) => <li key={game.id}>{game.name}</li>)
        ) : (
          <li> {error} </li>
        )}
      </ul>
    </div>
  );
};

export default GameGrid;
