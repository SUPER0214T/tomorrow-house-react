import { motion } from 'framer-motion';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { gnbMenuAtom, gnbSearchAtom } from './atoms';
import Component from './Component';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ExamplePage from './ExamplePage';
import './style.css';

function App() {
	const gnbMenuState = useRecoilValue(gnbMenuAtom);
	const gnbSearchState = useRecoilValue(gnbSearchAtom);
	if (gnbMenuState || gnbSearchState) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'unset';
	}

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
