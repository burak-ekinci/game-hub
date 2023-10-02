import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  child: ReactNode;
}

const GameCardContainer = ({ child }: Props) => {
  return (
    <Box overflow={"hidden"} borderRadius={"15px"}>
      {child}
    </Box>
  );
};

export default GameCardContainer;
