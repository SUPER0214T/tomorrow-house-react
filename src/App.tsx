import { motion } from 'framer-motion';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Component from './Component';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ExamplePage from './ExamplePage';
import './style.css';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/components" element={<Component />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
