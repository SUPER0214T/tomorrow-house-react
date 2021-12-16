import TinySlider from 'tiny-slider-react';
const PRODUCT_IMG_PATH = (index: number) =>
	`./assets/images/img-product-0${index}.jpg`;
const imgs = [1, 2, 3, 4].map((el) => PRODUCT_IMG_PATH(el));

const settings = {
	container: '.product-show .slider-list',
	autoplay: false,
	mouseDrag: true,
	controls: false,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	navContainer: '.product-show .thumbnail .thumbnail-list',
	navAsThumbnails: true,
	preventScrollOnTouch: 'auto',
	lazyload: true,
};

function ProductSlider() {
	return (
		<div className="col-sm-4 col-md-6 col-lg-7">
			<div className="carousel">
				<div className="carousel-slider">
					<ol className="slider-list">
						<TinySlider settings={settings}>
							{imgs.map((el, index) => (
								<li
									className="slider-item"
									key={index}
									style={{ position: 'relative' }}
								>
									<img
										className={`tns-lazy-img`}
										src={el}
										data-src={el}
										alt={`상품 이미지${index + 1}`}
									/>
								</li>
							))}
						</TinySlider>
					</ol>
				</div>

				<div className="thumbnail">
					<ol className="thumbnail-list">
						{imgs.map((el, index) => (
							<li className="thumbnail-item" key={index}>
								<button type="button">
									<img src={el} alt={`상품 이미지${index + 1}`} />
								</button>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}

export default ProductSlider;
