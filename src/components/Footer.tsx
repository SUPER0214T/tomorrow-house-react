function Footer() {
	return (
		<>
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
										<a href="/" target="_blank" rel="noreferrer noopener">
											https://~!
										</a>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
