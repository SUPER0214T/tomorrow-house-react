import { useRecoilState } from 'recoil';
import { gnbMenuAtom, gnbSearchAtom, orderFormAtom } from '../atoms';
import MainProduct from './MainProduct';
import OrderForm from './OrderForm';
import ProductSlider from './ProductSlider';
import SearchModal from './SearchModal';
import Sidebar from './Sidebar';

function MainPage() {
	const [gnbMenuState, setGnbMenuState] = useRecoilState(gnbMenuAtom);
	const [gnbSearchState, setGnbSearchState] = useRecoilState(gnbSearchAtom);
	const [orderFormState, setOrderFormState] = useRecoilState(orderFormAtom);

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
					setOrderFormState(false);
				}}
				className={`overlay ${
					gnbMenuState || gnbSearchState || orderFormState ? 'is-active' : ''
				}`}
				aria-hidden
			></div>
		</>
	);
}

export default MainPage;
