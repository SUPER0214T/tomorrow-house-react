import React from 'react';
import { useRecoilState } from 'recoil';
import { gnbMenuAtom } from '../atoms';

function Header() {
	const [gnbMenuState, setGnbMenuState] = useRecoilState(gnbMenuAtom);

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
										<a href="/">
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
												<a href="/">커뮤니티</a>
											</li>
											<li className="gnb-nav-item is-active">
												<a href="/">스토어</a>
											</li>
											<li className="gnb-nav-item">
												<a href="/">인테리어시공</a>
											</li>
										</ul>
									</nav>

									<button
										onClick={() => setGnbMenuState(true)}
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
														<a href="/">버그</a>
														<button type="button">
															<i className="ic-close"></i>
														</button>
													</li>
													<li className="search-history-item">
														<a href="/">튕김버그</a>
														<button type="button">
															<i className="ic-close"></i>
														</button>
													</li>
													<li className="search-history-item">
														<a href="/">
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

										<a className="gnb-icon-button sm-hidden" href="/">
											<i className="ic-bookmark"></i>
										</a>

										<a className="is-bell gnb-icon-button sm-hidden" href="/">
											<i className="ic-bell"></i>
										</a>

										<a className="is-cart gnb-icon-button" href="/">
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
														<a href="/">마이페이지</a>
													</li>
													<li className="my-menu-item">
														<a href="/">나의 쇼핑</a>
													</li>
													<li className="my-menu-item">
														<a href="/">이벤트</a>
													</li>
													<li className="my-menu-item">
														<a href="/">로그아웃</a>
													</li>
												</ul>
											</div>
										</div>
									</div>

									{/* <!-- 로그인 하지 않았을 때 -->
                  <!-- <div className="button-group">
                    <a className="is-cart gnb-icon-button" href="/">
                      <i className="ic-cart"></i>
                    </a>

                    <div className="sm-hidden gnb-auth">
                      <a href="/">로그인</a>
                      <a href="/">회원가입</a>
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
									<a href="/">스토어</a>
								</li>
								<li className="lnb-item">
									<a href="/">홈카테고리</a>
								</li>
								<li className="lnb-item">
									<a href="/">신혼가구</a>
								</li>
								<li className="lnb-item">
									<a href="/">베스트</a>
								</li>
								<li className="lnb-item">
									<a href="/">오늘의딜</a>
								</li>
								<li className="lnb-item">
									<a href="/">연휴특가</a>
								</li>
								<li className="lnb-item">
									<a href="/">월동준비</a>
								</li>
								<li className="lnb-item">
									<a href="/">리퍼마켓</a>
								</li>
								<li className="lnb-item">
									<a href="/">
										기획전<i className="ic-new"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
