import { useRecoilState } from 'recoil';
import { gnbSearchAtom } from '../atoms';

function SearchModal() {
	const [gnbSearchState, setGnbSearchState] = useRecoilState(gnbSearchAtom);

	return (
		<>
			{/* <!-- search-modal --> */}
			<aside
				className={`search-modal lg-hidden ${
					gnbSearchState ? 'is-active' : null
				}`}
			>
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
								<button
									onClick={() => setGnbSearchState(false)}
									className="btn-40 btn-ghost is-close"
									type="button"
								>
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
											<a href="/">스탠드</a>
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

export default SearchModal;
