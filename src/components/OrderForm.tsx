import { useRecoilState } from 'recoil';
import { orderFormAtom } from '../atoms';

function OrderForm() {
	const [orderFormState, setOrderFormState] = useRecoilState(orderFormAtom);

	return (
		<>
			{/* <!-- order-form --> */}
			<div className="order-form lg-hidden">
				<button className="bookmark" type="button">
					<i className="ic-bookmark"></i>
					<span className="badge" aria-label="북마크 18,302개">
						18,302
					</span>
				</button>
				<button
					onClick={() => {
						setOrderFormState(true);
					}}
					className="btn-48 btn-primary"
					type="button"
				>
					구매하기
				</button>
			</div>

			{/* <!-- order-form-modal --> */}
			<div
				className={`order-form-modal ${orderFormState ? 'is-active' : null}`}
			>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<form
								className="product-selling-option-form lg-hidden"
								action="/"
								method="post"
							>
								<div className="select-group select-group01 is-active">
									<select
										className="form-select"
										defaultValue="default"
										required
									>
										<option value="default" disabled>
											선택
										</option>
										<option value="0">선택사항 1</option>
										<option value="1">선택사항 2</option>
										<option value="2">선택사항 3</option>
										<option value="3">선택사항 4</option>
										<option value="4">선택사항 5</option>
									</select>
									<i className="ic-caret" aria-hidden></i>
								</div>

								<div className="select-group select-group02">
									<select className="form-select" defaultValue="default">
										<option value="default" disabled>
											추가상품(선택)
										</option>
										<option value="0">선택사항 1</option>
										<option value="1">선택사항 2</option>
										<option value="2">선택사항 3</option>
										<option value="3">선택사항 4</option>
										<option value="4">선택사항 5</option>
									</select>
									<i className="ic-caret" aria-hidden></i>
								</div>

								<div className="selling-option-form-price">
									<span className="order-price">주문금액</span>
									<div className="price-20">
										<strong className="amount">0</strong>
										<span className="currency">원</span>
									</div>
								</div>

								<div className="selling-option-form-button-group">
									<button className="btn-48 btn-secondary" type="button">
										장바구니
									</button>
									<button className="btn-48 btn-primary" type="submit">
										바로구매
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OrderForm;
