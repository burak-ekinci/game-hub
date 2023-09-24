import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
    >
      <GridItem area={"nav"} bg={"yellowgreen"}>
        Nav
      </GridItem>
      <Show above="">
        <GridItem area={"aside"} bg={"yellow"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"lightgreen"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
