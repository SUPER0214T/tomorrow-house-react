import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Component from './Component';
import ExamplePage from './ExamplePage';
import './style.css';

function App() {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path="/examplePage" element={<ExamplePage />} />
				<Route path="/components" element={<Component />} />
			</Routes>
		</>
	);
}

export default App;
