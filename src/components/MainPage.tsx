import { useRecoilState } from 'recoil';
import { gnbMenuAtom } from '../atoms';
import MainProduct from './MainProduct';
import OrderForm from './OrderForm';
import ProductSlider from './ProductSlider';
import SearchModal from './SearchModal';
import Sidebar from './Sidebar';

function MainPage() {
	const [gnbMenuState, setGnbMenuState] = useRecoilState(gnbMenuAtom);

	return (
		<>
			<MainProduct />
			<OrderForm />
			<SearchModal />
			<Sidebar />
			<div
				onClick={() => setGnbMenuState(false)}
				className={`overlay ${gnbMenuState ? 'is-active' : null}`}
				aria-hidden
			></div>
		</>
	);
}

export default MainPage;
