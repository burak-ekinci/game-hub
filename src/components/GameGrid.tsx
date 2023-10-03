import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  return (
    <>
      {error && <Text color={"red.100"}>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer child={<GameCardSkeleton key={skeleton} />} />
          ))}
        {data.map((game) => (
          <GameCardContainer child={<GameCard game={game} key={game.id} />} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
