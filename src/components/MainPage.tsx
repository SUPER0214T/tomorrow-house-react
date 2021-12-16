import MainProduct from './MainProduct';
import OrderForm from './OrderForm';
import ProductSlider from './ProductSlider';
import SearchModal from './SearchModal';
import Sidebar from './Sidebar';

function MainPage() {
	return (
		<>
			<MainProduct />
			<OrderForm />
			<SearchModal />
			<Sidebar />
			<div className="overlay" aria-hidden></div>
		</>
	);
}

export default MainPage;
