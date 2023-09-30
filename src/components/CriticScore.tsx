import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticSkore = ({ score }: Props) => {
  const color = score > 89 ? "green.300" : score > 84 ? "yellow.300" : "";

  return (
    <Badge fontSize={"md"} color={color} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticSkore;
