import React from "react";
import { Routes } from "./src/routes";
import { DeckProvider } from "./src/context/DeckContext";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <DeckProvider>
			<StatusBar
				hidden={false}
				translucent={true}
				style={"light"}
			/>
			<Routes />
		</DeckProvider>
  )
}