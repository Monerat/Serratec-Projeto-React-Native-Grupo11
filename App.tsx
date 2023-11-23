import React from "react";
import { Routes } from "./src/routes";
import { DeckProvider } from "./src/context/DeckContext";
import { StatusBar } from "expo-status-bar";
import { BattleProvider } from "./src/context/BattleContext";

export default function App() {
  return (
    <DeckProvider>
		<BattleProvider>
			<StatusBar
				hidden={false}
				translucent={true}
				style={"light"}
			/>
			<Routes />
		</BattleProvider>
	</DeckProvider>
  )
}