import TinySlider from 'tiny-slider-react';
const PRODUCT_IMG_PATH = (index: number) =>
	`./assets/images/img-review-0${index}.jpg`;
const imgs = [1, 2, 3, 4, 5].map((el) => PRODUCT_IMG_PATH(el));

const settings = {
	container: '.product-user-gallery.is-tablet .slider-list',
	mouseDrag: true,
	navContainer: '.product-user-gallery.is-tablet .thumbnail .thumbnail-list',
	navAsThumbnails: true,
	preventScrollOnTouch: true,
	edgePadding: 75,
	gutter: 6,
	loop: false,
	controls: true,
	controlsContainer: '.product-user-gallery.is-tablet .arrow-button-group',
};

function TabletUserGallery() {
	return (
		<div
			className="product-section product-user-gallery is-tablet sm-hidden"
			data-product="user-gallery"
		>
			<header className="product-section-header">
				<h1 className="title">유저들의 스타일링 샷</h1>
				<strong className="badge" aria-label="461개">
					461
				</strong>
				<a className="icon-button" href="/">
					<i className="ic-chevron"></i>
				</a>
			</header>
			<div className="user-gallery-body">
				<div className="gallery">
					<div className="gallery-slider">
						<ol className="slider-list">
							<TinySlider settings={settings}>
								{imgs.map((el, index) => (
									<li
										className="slider-item"
										key={index}
										style={{ position: 'relative' }}
									>
										<div className="gallery-card">
											<div className="slider-item-image">
												<img
													src={el}
													data-src={el}
													alt={`리뷰 이미지${index + 1}`}
												/>
											</div>
											<div className="slider-item-user">
												<a href="/">
													<div className="avatar-32">
														<img
															src={`./assets/images/img-user-01.jpg`}
															alt="유저 이미지"
														/>
													</div>
													<strong className="username">김준영</strong>
												</a>
												<span className="user-gallery-count">
													{`${index + 1}`}/113
												</span>
											</div>
										</div>
									</li>
								))}
							</TinySlider>
						</ol>

						<div className="arrow-button-group">
							<button className="arrow-button-left" type="button">
								<i className="ic-chevron"></i>
							</button>
							<button className="arrow-button-right" type="button">
								<i className="ic-chevron"></i>
							</button>
						</div>
					</div>

					<div className="thumbnail">
						<ol className="thumbnail-list">
							{imgs.map((el, index) => (
								<li className="thumbnail-item" key={index}>
									<button type="button">
										<img src={el} alt={`리뷰 이미지0${index + 1}`} />
									</button>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TabletUserGallery;
