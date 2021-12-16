function Sidebar() {
	return (
		<>
			{/* <!-- sidebar --> */}
			<aside className="sidebar sm-only">
				<header className="sidebar-header">
					<h1 className="logo">
						<a href="/">
							<img src="./assets/images/Logo.svg" alt="" />
						</a>
					</h1>

					<div className="sidebar-user">
						<a href="/">
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
								<a href="/">홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">스토어홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">카테고리</a>
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
								<a href="/">스토어홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">카테고리</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">신혼가구</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">베스트</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">오늘의딜</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">연휴특가</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">월동준비</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">리퍼마켓</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">
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
								<a href="/">홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">스토어홈</a>
							</li>
							<li className="sidebar-category-item">
								<a href="/">카테고리</a>
							</li>
						</ul>
					</div>

					<div className="sidebar-user-menu">
						<ul className="user-menu-list">
							<li className="user-menu-item">
								<a href="/">마이페이지</a>
							</li>
							<li className="user-menu-item">
								<a href="/">나의 쇼핑</a>
							</li>
							<li className="user-menu-item">
								<a href="/">스크랩북</a>
							</li>
							<li className="user-menu-item">
								<a href="/">알림</a>
							</li>
							<li className="user-menu-item">
								<a href="/">이벤트</a>
							</li>
						</ul>
					</div>
				</nav>
			</aside>
		</>
	);
}

export default Sidebar;
