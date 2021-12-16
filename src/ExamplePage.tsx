import React from 'react';
import './style.css';

function ExamplePage() {
	return (
		<>
			{/* <!-- gnb --> */}
			<header className="gnb">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="gnb-wrapper">
								<div className="gnb-left">
									<h1 className="gnb-logo">
										<a href="https://superpet21.github.io/tomorrow-house-p/">
											<img
												src="./assets/images/Logo.svg"
												alt="메인페이지로 이동"
											/>
										</a>
									</h1>

									<nav className="sm-hidden gnb-nav">
										<h2 className="visually-hidden">상세 페이지 이동</h2>
										<ul className="gnb-nav-list">
											<li className="gnb-nav-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													커뮤니티
												</a>
											</li>
											<li className="gnb-nav-item is-active">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													스토어
												</a>
											</li>
											<li className="gnb-nav-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													인테리어시공
												</a>
											</li>
										</ul>
									</nav>

									<button
										className="is-menu gnb-icon-button sm-only"
										type="button"
									>
										<i className="ic-menu"></i>
									</button>
								</div>

								<div className="gnb-right">
									<div className="input-group lg-only">
										<i className="ic-search"></i>
										<input
											className="form-input"
											type="text"
											placeholder="스토어 검색"
											aria-hidden
										/>

										<section className="search-history">
											<h1 className="search-history-header">
												<span>최근 검색어</span>
												<button type="button">전체 삭제</button>
											</h1>

											{/* <!-- 최근 검색어가 존재할 때 --> */}
											<div className="search-history-content">
												<ul className="search-history-list">
													<li className="search-history-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															버그
														</a>
														<button type="button">
															<i className="ic-close"></i>
														</button>
													</li>
													<li className="search-history-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															튕김버그
														</a>
														<button type="button">
															<i className="ic-close"></i>
														</button>
													</li>
													<li className="search-history-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															스탠드스탠드스탠드스탠드스탠드스탠드스탠드스탠드스탠드스탠드스탠드
														</a>
														<button type="button">
															<i className="ic-close"></i>
														</button>
													</li>
												</ul>
											</div>
										</section>
									</div>

									<div className="button-group">
										<button
											className="is-search gnb-icon-button lg-hidden"
											type="button"
										>
											<i className="ic-search"></i>
										</button>

										<a
											className="gnb-icon-button sm-hidden"
											href="https://superpet21.github.io/tomorrow-house-p/"
										>
											<i className="ic-bookmark"></i>
										</a>

										<a
											className="is-bell gnb-icon-button sm-hidden"
											href="https://superpet21.github.io/tomorrow-house-p/"
										>
											<i className="ic-bell"></i>
										</a>

										<a
											className="is-cart gnb-icon-button"
											href="https://superpet21.github.io/tomorrow-house-p/"
										>
											<i className="ic-cart"></i>
											<strong className="badge">5</strong>
										</a>

										<div className="my-menu sm-hidden">
											<div className="gnb-avatar-button avatar-32 sm-hidden">
												<img
													src="./assets/images/img-review-01.jpg"
													alt="유저 이미지"
												/>
											</div>

											<div className="my-menu-content">
												<ul className="my-menu-list">
													<li className="my-menu-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															마이페이지
														</a>
													</li>
													<li className="my-menu-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															나의 쇼핑
														</a>
													</li>
													<li className="my-menu-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															이벤트
														</a>
													</li>
													<li className="my-menu-item">
														<a href="https://superpet21.github.io/tomorrow-house-p/">
															로그아웃
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>

									{/* <!-- 로그인 하지 않았을 때 -->
                  <!-- <div className="button-group">
                    <a className="is-cart gnb-icon-button" href="https://superpet21.github.io/tomorrow-house-p/">
                      <i className="ic-cart"></i>
                    </a>

                    <div className="sm-hidden gnb-auth">
                      <a href="https://superpet21.github.io/tomorrow-house-p/">로그인</a>
                      <a href="https://superpet21.github.io/tomorrow-house-p/">회원가입</a>
                    </div>
                  </div> --> */}

									<button
										className="btn-40 btn-primary sm-hidden"
										type="button"
									>
										글쓰기
										<i className="ic-chevron"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<nav className="lnb">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<ul className="lnb-list">
								<li className="lnb-item is-active">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										스토어
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										홈카테고리
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										신혼가구
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										베스트
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										오늘의딜
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										연휴특가
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										월동준비
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										리퍼마켓
									</a>
								</li>
								<li className="lnb-item">
									<a href="https://superpet21.github.io/tomorrow-house-p/">
										기획전<i className="ic-new"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>

			{/* <!-- sidebar --> */}
			<aside className="sidebar sm-only">
				<header className="sidebar-header">
					<h1 className="logo">
						<a href="https://superpet21.github.io/tomorrow-house-p/">
							<img src="./assets/images/Logo.svg" alt="" />
						</a>
					</h1>

					<div className="sidebar-user">
						<a href="https://superpet21.github.io/tomorrow-house-p/">
							<div className="avatar-24">
								<img src="./assets/images/img-user-01.jpg" alt="유저 이미지" />
							</div>
							<strong>사달라</strong>
						</a>
					</div>
				</header>

				<nav className="sidebar-nav">
					<div className="sidebar-category is-community">
						<header className="sidebar-category-header">
							<button type="button">
								<i className="ic-community"></i>
								<strong>커뮤니티</strong>
								<i className="ic-chevron" aria-hidden></i>
							</button>
						</header>
						<ul className="sidebar-category-list">
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									스토어홈
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									카테고리
								</a>
							</li>
						</ul>
					</div>

					<div className="sidebar-category is-store is-active is-open">
						<header className="sidebar-category-header">
							<button type="button">
								<i className="ic-store"></i>
								<strong>스토어</strong>
								<i className="ic-chevron" aria-hidden></i>
							</button>
						</header>
						<ul className="sidebar-category-list">
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									스토어홈
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									카테고리
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									신혼가구
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									베스트
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									오늘의딜
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									연휴특가
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									월동준비
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									리퍼마켓
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									기획전<i className="ic-new"></i>
								</a>
							</li>
						</ul>
					</div>

					<div className="sidebar-category is-expert">
						<header className="sidebar-category-header">
							<button type="button">
								<i className="ic-expert"></i>
								<strong>커뮤니티</strong>
								<i className="ic-chevron" aria-hidden></i>
							</button>
						</header>
						<ul className="sidebar-category-list">
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									스토어홈
								</a>
							</li>
							<li className="sidebar-category-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									카테고리
								</a>
							</li>
						</ul>
					</div>

					<div className="sidebar-user-menu">
						<ul className="user-menu-list">
							<li className="user-menu-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									마이페이지
								</a>
							</li>
							<li className="user-menu-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									나의 쇼핑
								</a>
							</li>
							<li className="user-menu-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									스크랩북
								</a>
							</li>
							<li className="user-menu-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									알림
								</a>
							</li>
							<li className="user-menu-item">
								<a href="https://superpet21.github.io/tomorrow-house-p/">
									이벤트
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</aside>

			{/* <!-- main-product --> */}
			<div className="product-show">
				<div className="product-info-wrapper">
					<div className="container">
						{/* <!-- Breadcrumb --> */}
						<div className="row">
							<div className="col-sm-4">
								<div className="breadcrumb">
									<ol className="breadcrumb-list">
										<li className="breadcrumb-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												가전
											</a>
											<i className="ic-chevron" aria-hidden></i>
										</li>
										<li className="breadcrumb-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												계절가전
											</a>
											<i className="ic-chevron" aria-hidden></i>
										</li>
										<li className="breadcrumb-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												전기히터/온풍기
											</a>
											<i className="ic-chevron" aria-hidden></i>
										</li>
										<li className="breadcrumb-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												전기히터
											</a>
										</li>
									</ol>
								</div>
							</div>
						</div>

						<div className="row">
							{/* <!-- product-slider --> */}
							<div className="col-sm-4 col-md-6 col-lg-7">
								<div className="carousel">
									<div className="carousel-slider">
										<ol className="slider-list">
											<li className="slider-item">
												<img
													src="./assets/images/img-product-01.jpg"
													alt="상품 이미지01"
												/>
											</li>
											<li className="slider-item">
												<img
													src="./assets/images/img-product-02.jpg"
													alt="상품 이미지02"
												/>
											</li>
											<li className="slider-item">
												<img
													src="./assets/images/img-product-03.jpg"
													alt="상품 이미지03"
												/>
											</li>
											<li className="slider-item">
												<img
													src="./assets/images/img-product-04.jpg"
													alt="상품 이미지04"
												/>
											</li>
										</ol>
									</div>

									<div className="thumbnail">
										<ol className="thumbnail-list">
											<li className="thumbnail-item">
												<button type="button">
													<img
														src="./assets/images/img-product-01.jpg"
														alt="상품 이미지01"
													/>
												</button>
											</li>
											<li className="thumbnail-item">
												<button type="button">
													<img
														src="./assets/images/img-product-02.jpg"
														alt="상품 이미지02"
													/>
												</button>
											</li>
											<li className="thumbnail-item">
												<button type="button">
													<img
														src="./assets/images/img-product-03.jpg"
														alt="상품 이미지03"
													/>
												</button>
											</li>
											<li className="thumbnail-item">
												<button type="button">
													<img
														src="./assets/images/img-product-04.jpg"
														alt="상품 이미지04"
													/>
												</button>
											</li>
										</ol>
									</div>
								</div>
							</div>

							{/* <!-- product-info --> */}
							<div className="col-sm-4 col-md-6 col-lg-5">
								<div className="product-info">
									<a
										href="https://superpet21.github.io/tomorrow-house-p/"
										className="info-brand"
									>
										보아르
									</a>
									<h1 className="info-title">
										캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)
									</h1>
									<div className="info-review">
										<div className="star-rating">
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
											<i className="ic-star is-active"></i>
										</div>
										<p>
											<strong>566</strong>
											<span className="sm-hidden">개 리뷰</span>
										</p>
									</div>

									{/* <!-- 모바일 info-price --> */}
									<div className="info-price sm-only">
										<div className="info-price-original">
											<span className="rate">34</span>
											<span className="percent">%</span>
											<div className="price-off">
												<strong className="amount">49,900</strong>
												<span className="currency sm-hidden">원</span>
											</div>
										</div>
										<div>
											<div className="info-price-off">
												<div className="price-20">
													<strong className="amount">32,900</strong>
													<span className="currency">원</span>
												</div>
												<div className="tag-red">특가</div>
											</div>
										</div>
									</div>

									{/* <!-- 태블릿 이후의 info-price --> */}
									<div className="info-price sm-hidden">
										<div className="info-price-original">
											<span className="rate">34</span>
											<span className="percent">%</span>
										</div>
										<div className="info-price-off-wrapper">
											<div className="price-off">
												<strong className="amount">49,900</strong>
												<span className="currency">원</span>
											</div>
											<div className="info-price-off">
												<div className="price-32">
													<strong className="amount">32,900</strong>
													<span className="currency">원</span>
												</div>
												<div className="tag-red">특가</div>
											</div>
										</div>
									</div>

									<p className="info-benefit">
										<strong>987P</strong>적립해드립니다. (VIP 3배 혜택 적용됨)
									</p>

									<div className="info-delivery">
										<span>일반택배</span>
										<div className="tag-gray">무료배송</div>
									</div>
								</div>

								{/* <!-- product-selling-option-form --> */}
								<form
									className="product-selling-option-form lg-only"
									action="/"
									method="post"
								>
									<div className="select-group select-group01 is-active">
										<select className="form-select" required>
											<option value="" disabled selected>
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
										<select className="form-select">
											<option value="" disabled selected>
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
										<button className="btn-55 btn-outlined" type="button">
											장바구니
										</button>
										<button className="btn-55 btn-primary" type="submit">
											바로구매
										</button>
									</div>
								</form>
								<div
									className="product-section-divider sm-only"
									aria-hidden
								></div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-4">
								<div className="product-section product-user-gallery is-mobile sm-only">
									<header className="product-section-header">
										<h1 className="title">유저들의 스타일링 샷</h1>
										<strong className="badge" aria-label="461개">
											461
										</strong>
										<a
											className="icon-button"
											href="https://superpet21.github.io/tomorrow-house-p/"
										>
											<i className="ic-chevron"></i>
										</a>
									</header>

									<div className="user-gallery-body">
										<div className="gallery">
											<div className="gallery-slider">
												<ol className="slider-list">
													<li className="slider-item">
														<div className="gallery-card">
															<div className="slider-item-image">
																<img
																	src="./assets/images/img-review-01.jpg"
																	alt="리뷰 이미지01"
																/>
															</div>
															<div className="slider-item-user">
																<a href="https://superpet21.github.io/tomorrow-house-p/">
																	<div className="avatar-32">
																		<img
																			src="./assets/images/img-user-01.jpg"
																			alt="유저 이미지"
																		/>
																	</div>
																	<strong className="username">김준영</strong>
																</a>
																<span className="user-gallery-count">
																	1/113
																</span>
															</div>
														</div>
													</li>
													<li className="slider-item">
														<div className="gallery-card">
															<div className="slider-item-image">
																<img
																	src="./assets/images/img-review-02.jpg"
																	alt="리뷰 이미지02"
																/>
															</div>
															<div className="slider-item-user">
																<a href="https://superpet21.github.io/tomorrow-house-p/">
																	<div className="avatar-32">
																		<img
																			src="./assets/images/img-user-01.jpg"
																			alt="유저 이미지"
																		/>
																	</div>
																	<strong className="username">김준영</strong>
																</a>
																<span className="user-gallery-count">
																	2/113
																</span>
															</div>
														</div>
													</li>
													<li className="slider-item">
														<div className="gallery-card">
															<div className="slider-item-image">
																<img
																	src="./assets/images/img-review-03.jpg"
																	alt="리뷰 이미지03"
																/>
															</div>
															<div className="slider-item-user">
																<a href="https://superpet21.github.io/tomorrow-house-p/">
																	<div className="avatar-32">
																		<img
																			src="./assets/images/img-user-01.jpg"
																			alt="유저 이미지"
																		/>
																	</div>
																	<strong className="username">김준영</strong>
																</a>
																<span className="user-gallery-count">
																	3/113
																</span>
															</div>
														</div>
													</li>
													<li className="slider-item">
														<div className="gallery-card">
															<div className="slider-item-image">
																<img
																	src="./assets/images/img-review-04.jpg"
																	alt="리뷰 이미지04"
																/>
															</div>
															<div className="slider-item-user">
																<a href="https://superpet21.github.io/tomorrow-house-p/">
																	<div className="avatar-32">
																		<img
																			src="./assets/images/img-user-01.jpg"
																			alt="유저 이미지"
																		/>
																	</div>
																	<strong className="username">김준영</strong>
																</a>
																<span className="user-gallery-count">
																	4/113
																</span>
															</div>
														</div>
													</li>
													<li className="slider-item">
														<div className="gallery-card">
															<div className="slider-item-image">
																<img
																	src="./assets/images/img-review-05.jpg"
																	alt="리뷰 이미지05"
																/>
															</div>
															<div className="slider-item-user">
																<a href="https://superpet21.github.io/tomorrow-house-p/">
																	<div className="avatar-32">
																		<img
																			src="./assets/images/img-user-01.jpg"
																			alt="유저 이미지"
																		/>
																	</div>
																	<strong className="username">김준영</strong>
																</a>
																<span className="user-gallery-count">
																	5/113
																</span>
															</div>
														</div>
													</li>
												</ol>
											</div>

											<div className="thumbnail">
												<ol className="thumbnail-list">
													<li className="thumbnail-item">
														<button type="button">
															<img
																src="./assets/images/img-review-01.jpg"
																alt="리뷰 이미지01"
															/>
														</button>
													</li>
													<li className="thumbnail-item">
														<button type="button">
															<img
																src="./assets/images/img-review-02.jpg"
																alt="리뷰 이미지02"
															/>
														</button>
													</li>
													<li className="thumbnail-item">
														<button type="button">
															<img
																src="./assets/images/img-review-03.jpg"
																alt="리뷰 이미지03"
															/>
														</button>
													</li>
													<li className="thumbnail-item">
														<button type="button">
															<img
																src="./assets/images/img-review-04.jpg"
																alt="리뷰 이미지04"
															/>
														</button>
													</li>
													<li className="thumbnail-item">
														<button type="button">
															<img
																src="./assets/images/img-review-05.jpg"
																alt="리뷰 이미지05"
															/>
														</button>
													</li>
												</ol>
											</div>
										</div>
									</div>
								</div>

								<div
									className="product-section-divider sm-only is-big"
									aria-hidden
								></div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- product-tab --> */}
				<div className="product-tab">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-lg-8">
								<ul className="product-tab-list">
									<li className="product-tab-item is-active">
										<button className="product-tab-spec" type="button">
											상품정보
										</button>
									</li>
									<li className="product-tab-item">
										<button className="product-tab-review" type="button">
											리뷰<strong>466</strong>
										</button>
									</li>
									<li className="product-tab-item">
										<button className="product-tab-inquiry" type="button">
											문의<strong>96</strong>
										</button>
									</li>
									<li className="product-tab-item">
										<button className="product-tab-delivery" type="button">
											배송/환불
										</button>
									</li>
									<li className="product-tab-item">
										<button
											className="product-tab-recommendation"
											type="button"
										>
											추천
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-lg-8">
							{/* <!-- product-user-gallery tablet/desktop --> */}
							<div className="product-section product-user-gallery is-tablet sm-hidden">
								<header className="product-section-header">
									<h1 className="title">유저들의 스타일링 샷</h1>
									<strong className="badge" aria-label="461개">
										461
									</strong>
									<a
										className="icon-button"
										href="https://superpet21.github.io/tomorrow-house-p/"
									>
										<i className="ic-chevron"></i>
									</a>
								</header>

								<div className="user-gallery-body">
									<div className="gallery">
										<div className="gallery-slider">
											<ol className="slider-list">
												<li className="slider-item">
													<div className="gallery-card">
														<div className="slider-item-image">
															<img
																src="./assets/images/img-review-01.jpg"
																alt="리뷰 이미지01"
															/>
														</div>
														<div className="slider-item-user">
															<a href="https://superpet21.github.io/tomorrow-house-p/">
																<div className="avatar-32">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="유저 이미지"
																	/>
																</div>
																<strong className="username">김준영</strong>
															</a>
															<span className="user-gallery-count">1/113</span>
														</div>
													</div>
												</li>
												<li className="slider-item">
													<div className="gallery-card">
														<div className="slider-item-image">
															<img
																src="./assets/images/img-review-02.jpg"
																alt="리뷰 이미지02"
															/>
														</div>
														<div className="slider-item-user">
															<a href="https://superpet21.github.io/tomorrow-house-p/">
																<div className="avatar-32">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="유저 이미지"
																	/>
																</div>
																<strong className="username">김준영</strong>
															</a>
															<span className="user-gallery-count">2/113</span>
														</div>
													</div>
												</li>
												<li className="slider-item">
													<div className="gallery-card">
														<div className="slider-item-image">
															<img
																src="./assets/images/img-review-03.jpg"
																alt="리뷰 이미지03"
															/>
														</div>
														<div className="slider-item-user">
															<a href="https://superpet21.github.io/tomorrow-house-p/">
																<div className="avatar-32">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="유저 이미지"
																	/>
																</div>
																<strong className="username">김준영</strong>
															</a>
															<span className="user-gallery-count">3/113</span>
														</div>
													</div>
												</li>
												<li className="slider-item">
													<div className="gallery-card">
														<div className="slider-item-image">
															<img
																src="./assets/images/img-review-04.jpg"
																alt="리뷰 이미지04"
															/>
														</div>
														<div className="slider-item-user">
															<a href="https://superpet21.github.io/tomorrow-house-p/">
																<div className="avatar-32">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="유저 이미지"
																	/>
																</div>
																<strong className="username">김준영</strong>
															</a>
															<span className="user-gallery-count">4/113</span>
														</div>
													</div>
												</li>
												<li className="slider-item">
													<div className="gallery-card">
														<div className="slider-item-image">
															<img
																src="./assets/images/img-review-05.jpg"
																alt="리뷰 이미지05"
															/>
														</div>
														<div className="slider-item-user">
															<a href="https://superpet21.github.io/tomorrow-house-p/">
																<div className="avatar-32">
																	<img
																		src="./assets/images/img-user-01.jpg"
																		alt="유저 이미지"
																	/>
																</div>
																<strong className="username">김준영</strong>
															</a>
															<span className="user-gallery-count">5/113</span>
														</div>
													</div>
												</li>
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
												<li className="thumbnail-item">
													<button type="button">
														<img
															src="./assets/images/img-review-01.jpg"
															alt="리뷰 이미지01"
														/>
													</button>
												</li>
												<li className="thumbnail-item">
													<button type="button">
														<img
															src="./assets/images/img-review-02.jpg"
															alt="리뷰 이미지02"
														/>
													</button>
												</li>
												<li className="thumbnail-item">
													<button type="button">
														<img
															src="./assets/images/img-review-03.jpg"
															alt="리뷰 이미지03"
														/>
													</button>
												</li>
												<li className="thumbnail-item">
													<button type="button">
														<img
															src="./assets/images/img-review-04.jpg"
															alt="리뷰 이미지04"
														/>
													</button>
												</li>
												<li className="thumbnail-item">
													<button type="button">
														<img
															src="./assets/images/img-review-05.jpg"
															alt="리뷰 이미지05"
														/>
													</button>
												</li>
											</ol>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- product-spec --> */}
							<div className="product-section product-spec sm-only">
								<div className="product-spec-content">
									<header className="product-section-header sm-hidden">
										<h1 className="title">상품정보</h1>
									</header>

									<div className="button-wrapper sm-only">
										<button className="btn-55 btn-primary" type="button">
											펼치기
										</button>
									</div>

									<figure>
										<img src="./assets/images/img-detail-01.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지1
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-02.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지2
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-03.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지3
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-04.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지4
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-05.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지5
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-06.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지6
										</figcaption>
									</figure>

									<table className="product-table">
										<tbody>
											<tr>
												<th>품명 및 모델명</th>
												<td>VO-HT015</td>
											</tr>
											<tr>
												<th>KC 인증 필 유무</th>
												<td>SU071586-19003</td>
											</tr>
											<tr>
												<th>정격전압, 소비전력</th>
												<td>AC220V, 60Hz, 400W</td>
											</tr>
											<tr>
												<th>에너지소비효율등급</th>
												<td>해당사항없음</td>
											</tr>
											<tr>
												<th>동일모델의 출시년월</th>
												<td>2019.11</td>
											</tr>
											<tr>
												<th>제조자, 수입품의 경우 수입자를 함께 표기</th>
												<td>VO-HT015</td>
											</tr>
											<tr>
												<th>제조국</th>
												<td>중국</td>
											</tr>
											<tr>
												<th>크기</th>
												<td>338*122*300 mm</td>
											</tr>
											<tr>
												<th>냉난방면적</th>
												<td>개인용</td>
											</tr>
											<tr>
												<th>추가설치비용</th>
												<td>해당사항없음</td>
											</tr>
											<tr>
												<th>품질보증기준</th>
												<td>구매일로부터 1년 이내 무상 A/S가능</td>
											</tr>
											<tr>
												<th>A/S 책임자와 전화번호</th>
												<td>1661-4555</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="product-section product-spec sm-hidden is-open">
								<div className="product-spec-content">
									<header className="product-section-header sm-hidden">
										<h1 className="title">상품정보</h1>
									</header>

									<div className="button-wrapper sm-only">
										<button className="btn-55 btn-primary" type="button">
											펼치기
										</button>
									</div>

									<figure>
										<img src="./assets/images/img-detail-01.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지1
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-02.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지2
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-03.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지3
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-04.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지4
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-05.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지5
										</figcaption>
									</figure>
									<figure>
										<img src="./assets/images/img-detail-06.jpg" alt="" />
										<figcaption className="visually-hidden">
											제품 상세 이미지6
										</figcaption>
									</figure>

									<table className="product-table">
										<tbody>
											<tr>
												<th>품명 및 모델명</th>
												<td>VO-HT015</td>
											</tr>
											<tr>
												<th>KC 인증 필 유무</th>
												<td>SU071586-19003</td>
											</tr>
											<tr>
												<th>정격전압, 소비전력</th>
												<td>AC220V, 60Hz, 400W</td>
											</tr>
											<tr>
												<th>에너지소비효율등급</th>
												<td>해당사항없음</td>
											</tr>
											<tr>
												<th>동일모델의 출시년월</th>
												<td>2019.11</td>
											</tr>
											<tr>
												<th>제조자, 수입품의 경우 수입자를 함께 표기</th>
												<td>VO-HT015</td>
											</tr>
											<tr>
												<th>제조국</th>
												<td>중국</td>
											</tr>
											<tr>
												<th>크기</th>
												<td>338*122*300 mm</td>
											</tr>
											<tr>
												<th>냉난방면적</th>
												<td>개인용</td>
											</tr>
											<tr>
												<th>추가설치비용</th>
												<td>해당사항없음</td>
											</tr>
											<tr>
												<th>품질보증기준</th>
												<td>구매일로부터 1년 이내 무상 A/S가능</td>
											</tr>
											<tr>
												<th>A/S 책임자와 전화번호</th>
												<td>1661-4555</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							<div className="product-section product-review">
								<header className="product-section-header">
									<h1 className="title">리뷰</h1>
									<strong className="badge" aria-label="리뷰 566개">
										566
									</strong>
									<button className="icon-button" type="button">
										리뷰쓰기
									</button>
								</header>

								<div className="product-review-content">
									<div className="product-review-summary">
										<div className="summary-score">
											<strong aria-label="평점 4.8점">4.8</strong>
											<div className="star-rating">
												<i className="ic-star is-active"></i>
												<i className="ic-star is-active"></i>
												<i className="ic-star is-active"></i>
												<i className="ic-star is-active"></i>
												<i className="ic-star is-active"></i>
											</div>
										</div>

										<div className="summary-detail">
											<ul className="summary-detail-list">
												<li className="summary-detail-item">
													<strong>5점</strong>
													<div className="summary-detail-bar-wrapper">
														<div className="summary-detail-bar"></div>
													</div>
													<span className="badge" aria-label="5점 리뷰 467개">
														467
													</span>
												</li>
												<li className="summary-detail-item">
													<strong>4점</strong>
													<div className="summary-detail-bar-wrapper">
														<div className="summary-detail-bar"></div>
													</div>
													<span className="badge" aria-label="4점 리뷰 87개">
														87
													</span>
												</li>
												<li className="summary-detail-item">
													<strong>3점</strong>
													<div className="summary-detail-bar-wrapper">
														<div className="summary-detail-bar"></div>
													</div>
													<span className="badge" aria-label="3점 리뷰 13">
														13
													</span>
												</li>
												<li className="summary-detail-item">
													<strong>2점</strong>
													<div className="summary-detail-bar-wrapper">
														<div className="summary-detail-bar"></div>
													</div>
													<span className="badge" aria-label="2점 리뷰 0개">
														0
													</span>
												</li>
												<li className="summary-detail-item">
													<strong>1점</strong>
													<div className="summary-detail-bar-wrapper">
														<div className="summary-detail-bar"></div>
													</div>
													<span className="badge" aria-label="1점 리뷰 0개">
														0
													</span>
												</li>
											</ul>
										</div>
									</div>

									<ol className="review-list">
										{/* <!-- 이미지가 없고, 도움이 돼요를 클릭하지 않았을 때 --> */}
										<li className="review-item">
											<article className="review-card">
												<header className="review-card-header">
													<h1 className="visually-hidden">
														유저1님이 작성하신 리뷰
													</h1>
													<a
														href="https://superpet21.github.io/tomorrow-house-p/"
														className="avatar-24"
													>
														<img
															src="./assets/images/img-user-01.jpg"
															alt="유저 이미지"
														/>
													</a>
													<div className="info">
														<h2 className="username">유저1</h2>
														<div className="detail">
															<div className="star-rating-13">
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
															</div>
															<time dateTime="2021-01-01">2021.01.01</time>
															<span>오늘의집 구매</span>
														</div>
													</div>
												</header>
												<div className="review-card-body">
													<p>
														집 전체를 데운다기보다는 틀어놓고 앞에 앉아있으면
														따땃해지는 정도예요. 불 꺼놓고 난로 켜고 담요 덮은
														채로 커피 마시면 아주 좋아요. 고양이도 좋아해요
													</p>
												</div>
												<footer className="review-card-footer">
													<button className="btn-32 btn-outlined" type="button">
														도움이 돼요
													</button>
													<p>
														<strong aria-label="7명">7</strong>명에게 도움이
														되었습니다.
													</p>
												</footer>
											</article>
										</li>

										{/* <!-- 이미지가 있고, 도움이 돼요를 클릭했을 때 --> */}
										<li className="review-item">
											<article className="review-card">
												<header className="review-card-header">
													<h1 className="visually-hidden">
														유저2님이 작성하신 리뷰
													</h1>
													<a
														href="https://superpet21.github.io/tomorrow-house-p/"
														className="avatar-24"
													>
														<img
															src="./assets/images/img-user-01.jpg"
															alt="유저 이미지"
														/>
													</a>
													<div className="info">
														<h2 className="username">유저2</h2>
														<div className="detail">
															<div className="star-rating-13">
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
															</div>
															<time dateTime="2021-01-01">2021.01.01</time>
															<span>오늘의집 구매</span>
														</div>
													</div>
												</header>
												<div className="review-card-body">
													<div className="review-image">
														<img
															src="./assets/images/img-review-03.jpg"
															alt=""
														/>
													</div>
													<p>
														집온도 조절과 타이머가 안 된다는 걸 뒤늦게 알았지만
														이쁘니까 대만족! 가격도 대만족!
													</p>
												</div>
												<footer className="review-card-footer">
													<button className="btn-32 btn-primary" type="button">
														<i className="ic-check"></i>도움됨
													</button>
													<p>
														<strong aria-label="7명">3</strong>명에게 도움이
														되었습니다.
													</p>
												</footer>
											</article>
										</li>

										<li className="review-item">
											<article className="review-card">
												<header className="review-card-header">
													<h1 className="visually-hidden">
														유저3님이 작성하신 리뷰
													</h1>
													<a
														href="https://superpet21.github.io/tomorrow-house-p/"
														className="avatar-24"
														target="_blank"
														rel="noreferrer noopener"
													>
														1
													</a>
													<div className="info">
														<h2 className="username">유저3</h2>
														<div className="detail">
															<div className="star-rating-13">
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
																<i className="ic-star is-active"></i>
															</div>
															<time dateTime="2021-01-01">2021.01.01</time>
															<span>오늘의집 구매</span>
														</div>
													</div>
												</header>
												<div className="review-card-body">
													<p>
														작업실에서 손이 시려워서 책상 위에 올려서 쓸걸로
														골랐습니다! 아주아주 뜨듯하고 크기도 적당하고 민트
														사고싶엇지만 품절 ㅠㅠ
													</p>
												</div>
												<footer className="review-card-footer">
													<button className="btn-32 btn-outlined" type="button">
														도움이 돼요
													</button>
													<p>
														<strong aria-label="7명">7</strong>명에게 도움이
														되었습니다.
													</p>
												</footer>
											</article>
										</li>
									</ol>

									<div className="pagination">
										<button className="page-control page-prev" type="button">
											<i className="ic-chevron"></i>
										</button>
										<ol className="page-list">
											<li className="page-item is-active">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													1
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													2
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													3
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													4
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													5
												</a>
											</li>
										</ol>
										<button className="page-control page-next" type="button">
											<i className="ic-chevron"></i>
										</button>
									</div>
								</div>
							</div>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-inquiry --> */}
							<header className="product-section-header product-inquiry-collapse sm-only">
								<h1 className="title">문의</h1>
								<strong className="badge" aria-label="문의 96개">
									96
								</strong>
								<button className="icon-button" type="button">
									<i className="ic-chevron"></i>
								</button>
							</header>
							<div className="product-section product-inquiry is-collapse">
								<header className="product-section-header">
									<h1 className="title">문의</h1>
									<strong className="badge" aria-label="문의 96개">
										96
									</strong>
									<button className="icon-button" type="button">
										문의하기
									</button>
								</header>

								<div className="product-inquiry-content">
									<ol className="inquiry-list">
										{/* <!-- 공개 + 미답변 --> */}
										<li className="inquiry-item">
											<div className="inquiry-card">
												<dl className="inquiry-card-detail">
													<dt className="visually-hidden">구매 여부</dt>
													<dd>구매</dd>
													<dt className="visually-hidden">문의 유형</dt>
													<dd>상품</dd>
													<dt className="visually-hidden">답변 여부</dt>
													<dd>미답변</dd>
												</dl>

												<div className="inquiry-card-date">
													<h2>유저*</h2>
													<time dateTime="2021-01-01 12:34">
														2021년 1월 1일 12시 34분
													</time>
												</div>

												<div className="inquiry-card-body">
													<div className="question-content">
														<h2 aria-label="문의 내용">Q</h2>
														<p>
															상품받았는데 사용하면서 보니까 불들어오는곳 옆에
															하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?
															위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한
															것 같아서요! 사진첨부가없어서 텍스트로 설명하려
															하니 애매하네요ㅠㅠ
														</p>
													</div>
												</div>
											</div>
										</li>

										{/* <!-- 공개 + 답변 --> */}
										<li className="inquiry-item">
											<div className="inquiry-card">
												<dl className="inquiry-card-detail">
													<dt className="visually-hidden">구매 여부</dt>
													<dd>구매</dd>
													<dt className="visually-hidden">문의 유형</dt>
													<dd>상품</dd>
													<dt className="visually-hidden">답변 여부</dt>
													<dd className="is-answered">답변완료</dd>
												</dl>

												<div className="inquiry-card-date">
													<h2>유저*</h2>
													<time dateTime="2021-01-01 12:34">
														2021년 1월 1일 12시 34분
													</time>
												</div>

												<div className="inquiry-card-body">
													<div className="question-content">
														<h2 aria-label="문의 내용">Q</h2>
														<p>
															상품받았는데 사용하면서 보니까 불들어오는곳 옆에
															하얀 부분이 갈색으로 얼룩져있는데 불량인가요...?
															위험하지는 않겠죠? 다른분들 후기사진에는 다 깨끗한
															것 같아서요! 사진첨부가없어서 텍스트로 설명하려
															하니 애매하네요ㅠㅠ
														</p>
													</div>

													<div className="answer-card">
														<h2 aria-label="답변 내용">A</h2>
														<div className="answer-info">
															<div className="answer-header">
																<h2>OA</h2>
																<time dateTime="2021-01-04 09:03">
																	2021년 1월 4일 09시 03분
																</time>
															</div>
															<p>
																안녕하세요 고객님, 보아르입니다:) 현재 고객님의
																주문 정보가 확인되지 않아 바로 안내드리지 못하는
																점 양해 부탁드립니다. 문의하신 제품의 경우 현재
																주문폭주로 인한 예약 판매중으로 순차 발송
																진행되고 있습니다. 주문 시 최대한 빠른 발송
																진행될 수 있도록 노력하겠습니다. 감사합니다.
															</p>
														</div>
													</div>
												</div>
											</div>
										</li>

										{/* <!-- 비공개 + 미답변 --> */}
										<li className="inquiry-item">
											<div className="inquiry-card">
												<dl className="inquiry-card-detail">
													<dt className="visually-hidden">구매 여부</dt>
													<dd>구매</dd>
													<dt className="visually-hidden">문의 유형</dt>
													<dd>상품</dd>
													<dt className="visually-hidden">답변 여부</dt>
													<dd>미답변</dd>
												</dl>

												<div className="inquiry-card-date">
													<h2>유저*</h2>
													<time dateTime="2021-01-01 12:34">
														2021년 1월 1일 12시 34분
													</time>
												</div>

												<div className="inquiry-card-body">
													<div className="question-content">
														<h2 aria-label="문의 내용">Q</h2>
														<p>
															<i className="ic-lock"></i>비밀글입니다.
														</p>
													</div>
												</div>
											</div>
										</li>

										{/* <!-- 비공개 + 미답변 --> */}
										<li className="inquiry-item">
											<div className="inquiry-card">
												<dl className="inquiry-card-detail">
													<dt className="visually-hidden">구매 여부</dt>
													<dd>구매</dd>
													<dt className="visually-hidden">문의 유형</dt>
													<dd>상품</dd>
													<dt className="visually-hidden">답변 여부</dt>
													<dd className="is-answered">답변 완료</dd>
												</dl>

												<div className="inquiry-card-date">
													<h2>유저*</h2>
													<time dateTime="2021-01-01 12:34">
														2021년 1월 1일 12시 34분
													</time>
												</div>

												<div className="inquiry-card-body">
													<div className="question-content">
														<h2 aria-label="문의 내용">Q</h2>
														<p>
															<i className="ic-lock"></i>비밀글입니다.
														</p>
													</div>
												</div>
											</div>
										</li>
									</ol>

									<div className="pagination">
										<button className="page-control page-prev" type="button">
											<i className="ic-chevron"></i>
										</button>
										<ol className="page-list">
											<li className="page-item is-active">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													1
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													2
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													3
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													4
												</a>
											</li>
											<li className="page-item">
												<a href="https://superpet21.github.io/tomorrow-house-p/">
													5
												</a>
											</li>
										</ol>
										<button className="page-control page-next" type="button">
											<i className="ic-chevron"></i>
										</button>
									</div>
								</div>
							</div>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-deliver --> */}
							<header className="product-section-header product-deliver-collapse sm-only">
								<h1 className="title">배송/교환/환불</h1>
								<button className="icon-button" type="button">
									<i className="ic-chevron"></i>
								</button>
							</header>
							<div className="product-section product-delivery is-collapse">
								<header className="product-section-header">
									<h1 className="title">배송</h1>
								</header>

								<table className="product-table">
									<tbody>
										<tr>
											<th>배송</th>
											<td>일반택배</td>
										</tr>
										<tr>
											<th>배송비</th>
											<td>무료 배송</td>
										</tr>
										<tr>
											<th>배송불가 지역</th>
											<td>배송불가 지역이 없습니다</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div
								className="product-section-divider sm-only product-deliver-divider"
								aria-hidden
							></div>

							{/* <!-- product-refund --> */}
							<div className="product-section product-refund is-collapse">
								<header className="product-section-header">
									<h1 className="title">교환/환불</h1>
								</header>

								<table className="product-table">
									<tbody>
										<tr>
											<th>반품배송비</th>
											<td>2,500원 (최초 배송비가 무료인 경우 5,000원 부과)</td>
										</tr>
										<tr>
											<th>교환배송비</th>
											<td>5,000원</td>
										</tr>
										<tr>
											<th>보내실 곳</th>
											<td>(00000) 서울 종로구 누하동</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>

							{/* <!-- product-recommendation --> */}
							<div className="product-section product-recommendation">
								<header className="product-section-header">
									<h1 className="title">비슷한 상품</h1>
								</header>
								<div className="recommendation-content">
									<ol className="product-list">
										<li className="product-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												<div className="product-card">
													<div className="product-card-image">
														<img
															src="./assets/images/img-recommendation-01.jpg"
															alt="추천 상품 01"
														/>
													</div>
													<strong className="product-card-brand">emk</strong>
													<h2 className="product-card-title">
														시즌템! 감성 레트로 전기히터 EQH-S161 3개의 컬러!
													</h2>
													<div className="product-card-price">
														<span className="rate">72</span>
														<span className="percent">%</span>
														<strong className="amount">49,000</strong>
													</div>
													<div className="product-card-summary">
														<div className="star-rating">
															<i className="ic-star is-active"></i>
														</div>
														<strong aria-label="평점 4.8점">4.8</strong>
														<span>리뷰 3,605</span>
													</div>
													<div className="tag-gray sm-only">무료배송</div>
												</div>
											</a>
										</li>
										<li className="product-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												<div className="product-card">
													<div className="product-card-image">
														<img
															src="./assets/images/img-recommendation-02.jpg"
															alt="추천 상품 01"
														/>
													</div>
													<strong className="product-card-brand">
														플러스마이너스제로{' '}
													</strong>
													<h2 className="product-card-title">
														원적외선 2단 히터 XHS-Y010
													</h2>
													<div className="product-card-price">
														<span className="rate">10</span>
														<span className="percent">%</span>
														<strong className="amount">88,200</strong>
													</div>
													<div className="product-card-summary">
														<div className="star-rating">
															<i className="ic-star is-active"></i>
														</div>
														<strong aria-label="평점 4.5점">4.5</strong>
														<span>리뷰 28</span>
													</div>
													<div className="tag-gray sm-only">무료배송</div>
												</div>
											</a>
										</li>
										<li className="product-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												<div className="product-card">
													<div className="product-card-image">
														<img
															src="./assets/images/img-recommendation-03.jpg"
															alt="추천 상품 01"
														/>
													</div>
													<strong className="product-card-brand">
														플러스마이너스제로{' '}
													</strong>
													<h2 className="product-card-title">
														리플렉트 에코히터 4colors{' '}
													</h2>
													<div className="product-card-price">
														<span className="rate">23</span>
														<span className="percent">%</span>
														<strong className="amount">129,000</strong>
													</div>
													<div className="product-card-summary">
														<div className="star-rating">
															<i className="ic-star is-active"></i>
														</div>
														<strong aria-label="평점 4.6점">4.6</strong>
														<span>리뷰 605</span>
													</div>
													<div className="tag-gray sm-only">무료배송</div>
												</div>
											</a>
										</li>
										<li className="product-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												<div className="product-card">
													<div className="product-card-image">
														<img
															src="./assets/images/img-recommendation-04.jpg"
															alt="추천 상품 01"
														/>
													</div>
													<strong className="product-card-brand">코시나</strong>
													<h2 className="product-card-title">
														오방난로 히터 6종 모음전
													</h2>
													<div className="product-card-price">
														<span className="rate">52</span>
														<span className="percent">%</span>
														<strong className="amount">56,900</strong>
													</div>
													<div className="product-card-summary">
														<div className="star-rating">
															<i className="ic-star is-active"></i>
														</div>
														<strong aria-label="평점 4.6점">4.6</strong>
														<span>리뷰 250</span>
													</div>
													<div className="tag-gray sm-only">무료배송</div>
												</div>
											</a>
										</li>
									</ol>
								</div>
							</div>
							<div
								className="product-section-divider sm-only"
								aria-hidden
							></div>
						</div>

						{/* <!-- floating-order-form --> */}
						<div className="col-lg-4">
							<div className="floating-order-form lg-only">
								<form
									className="product-selling-option-form"
									action="/"
									method="post"
								>
									<div className="floating-order-form-header">
										<div className="select-group select-group01 is-active">
											<select className="form-select" required>
												<option value="" disabled selected>
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
											<select className="form-select">
												<option value="" disabled selected>
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
									</div>

									<div className="floating-order-form-footer">
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
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- order-form --> */}
			<div className="order-form lg-hidden">
				<button className="bookmark" type="button">
					<i className="ic-bookmark"></i>
					<span className="badge" aria-label="북마크 18,302개">
						18,302
					</span>
				</button>
				<button className="btn-48 btn-primary" type="button">
					구매하기
				</button>
			</div>

			{/* <!-- order-form-modal --> */}
			<div className="order-form-modal">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<form
								className="product-selling-option-form lg-hidden"
								action="/"
								method="post"
							>
								<div className="select-group select-group01 is-active">
									<select className="form-select" required>
										<option value="" disabled selected>
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
									<select className="form-select">
										<option value="" disabled selected>
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

			{/* <!-- footer --> */}
			<footer className="global-footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<h3 className="global-footer-title">
								고객센터<i className="ic-chevron" aria-hidden></i>
							</h3>
							<a className="global-footer-contact" href="tel:1004-1004">
								1004-1004
							</a>
							<p className="global-footer-time">
								평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
							</p>

							<dl className="global-footer-list">
								<div className="global-footer-item">
									<dt>상호명</dt>
									<dd>내일의집</dd>
								</div>
								<div className="global-footer-item">
									<dt>이메일</dt>
									<dd>
										<address>
											<a href="mailto:twinjyjh2@gmail.com">
												twinjyjh2@gmail.com (제휴문의)
											</a>
										</address>
									</dd>
								</div>
								<div className="global-footer-item">
									<dt>대표이사</dt>
									<dd>000</dd>
								</div>
								<div className="global-footer-item">
									<dt>주소</dt>
									<dd>
										<a
											href="https://~!"
											target="_blank"
											rel="noreferrer noopener"
										>
											https://~!
										</a>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</footer>

			{/* <!-- search-modal --> */}
			<aside className="search-modal lg-hidden">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<header className="search-modal-header">
								<h1 className="visually-hidden">검색창</h1>
								<div className="input-group">
									<i className="ic-search"></i>
									<input
										className="form-input"
										type="text"
										placeholder="스토어 검색"
										aria-hidden
									/>
								</div>
								<button className="btn-40 btn-ghost is-close" type="button">
									취소
								</button>
							</header>

							<section className="search-history">
								<h1 className="search-history-header">
									<span>최근 검색어</span>
									<button type="button">전체 삭제</button>
								</h1>

								{/* <!-- 최근 검색어가 없을 때 -->
                <!-- <div className="search-history-content">
                  <span>최근 검색한 내역이 없습니다.</span>
                </div> --> */}

								{/* <!-- 최근 검색어가 존재할 때 --> */}
								<div className="search-history-content">
									<ul className="search-history-list">
										<li className="search-history-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												버그
											</a>
											<button type="button">
												<i className="ic-close"></i>
											</button>
										</li>
										<li className="search-history-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												튕김버그
											</a>
											<button type="button">
												<i className="ic-close"></i>
											</button>
										</li>
										<li className="search-history-item">
											<a href="https://superpet21.github.io/tomorrow-house-p/">
												스탠드
											</a>
											<button type="button">
												<i className="ic-close"></i>
											</button>
										</li>
									</ul>
								</div>
							</section>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}

export default ExamplePage;
