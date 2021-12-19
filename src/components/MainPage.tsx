import { useRecoilState } from 'recoil';
import { gnbMenuAtom, gnbSearchAtom } from '../atoms';
import MainProduct from './MainProduct';
import OrderForm from './OrderForm';
import ProductSlider from './ProductSlider';
import SearchModal from './SearchModal';
import Sidebar from './Sidebar';

function MainPage() {
	const [gnbMenuState, setGnbMenuState] = useRecoilState(gnbMenuAtom);
	const [gnbSearchState, setGnbSearchState] = useRecoilState(gnbSearchAtom);

	return (
		<>
			<MainProduct />
			<OrderForm />
			<SearchModal />
			<Sidebar />
			<div
				onClick={() => {
					setGnbMenuState(false);
					setGnbSearchState(false);
				}}
				className={`overlay ${
					gnbMenuState || gnbSearchState ? 'is-active' : null
				}`}
				aria-hidden
			></div>
		</>
	);
}

export default MainPage;
