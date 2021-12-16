import React from 'react';
import './style.css';

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }

//   html, body, div, span, applet, object, iframe,
//   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
//   a, abbr, acronym, address, big, cite, code,
//   del, dfn, em, img, ins, kbd, q, s, samp,
//   small, strike, strong, sub, sup, tt, var,
//   b, u, i, center,
//   dl, dt, dd, menu, ol, ul, li,
//   fieldset, form, label, legend,
//   table, caption, tbody, tfoot, thead, tr, th, td,
//   article, aside, canvas, details, embed,
//   figure, figcaption, footer, header, hgroup,
//   main, menu, nav, output, ruby, section, summary,
//   time, mark, audio, video {
//     margin: 0;
//     padding: 0;
//     border: 0;
//     font-size: 100%;
//     font: inherit;
//     vertical-align: baseline;
//   }
//   /* HTML5 display-role reset for older browsers */
//   article, aside, details, figcaption, figure,
//   footer, header, hgroup, main, menu, nav, section {
//     display: block;
//   }
//   /* HTML5 hidden-attribute fix for newer browsers */
//   *[hidden] {
//       display: none;
//   }
//   body {
//     line-height: 1;
//   }
//   menu, ol, ul {
//     list-style: none;
//   }
//   blockquote, q {
//     quotes: none;
//   }
//   blockquote:before, blockquote:after,
//   q:before, q:after {
//     content: '';
//     content: none;
//   }
//   table {
//     border-collapse: collapse;
//     border-spacing: 0;
//   }

//   /* My reset */
//   * {
//     margin: 0;
//     /* font-family: $font-main; */
//     box-sizing: border-box;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   html {
//     /* font-family: $font-main;
//     font-size: $font-size-16; */
//   }

//   body {
//     /* font-family: $font-main;
//     color: $primary; */
//   }

//   h1 {
//     margin: 0;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   button,
//   input,
//   select,
//   textarea {
//     background-color: transparent;
//     border: none;
//     &:focus {
//       outline: none;
//       box-shadow: none;
//     }
//   }

//   a,
//   button {
//     cursor: pointer;
//   }

//   ul,
//   ol {
//     padding-left: 0;
//     list-style: none;
//   }

//   button {
//     padding: 0;
//   }

//   address {
//     font-style: normal;
//   }

//   /* Custom Global Style */
//   .sm-only {
//     @media screen and (min-width: ${numToPX(MD_BREAKPOINT)}) {
//     display: none !important;
//     }
//   }
//   .md-only {
//     @media screen and (max-width: ${numToPX(MD_BREAKPOINT - 1)}) {
//       display: none !important;
//     }

//     @media screen and (min-width: ${numToPX(LG_BREAKPOINT)}) {
//       display: none !important;
//     }
//   }

//   .lg-only {
//     @media screen and (max-width: ${numToPX(LG_BREAKPOINT - 1)}) {
//       display: none !important;
//     }
//   }

//   .sm-hidden {
//     @media screen and (max-width: ${numToPX(MD_BREAKPOINT - 1)}) {
//       display: none !important;
//     }
//   }

//   .md-hidden {
//     @media screen and (min-width: ${numToPX(MD_BREAKPOINT)})
//     and (max-width: ${numToPX(LG_BREAKPOINT - 1)}) {
//       display: none !important;
//     }
//   }

//   .lg-hidden {
//     @media screen and (min-width: ${numToPX(LG_BREAKPOINT)}) {
//       display: none !important;
//     }
//   }

//   .visually-hidden {
//     position: absolute !important;
//     width: 1px !important;
//     height: 1px !important;
//     padding: 0 !important;
//     margin: -1px !important;
//     overflow: hidden !important;
//     clip: rect(0, 0, 0, 0) !important;
//     white-space: nowrap !important;
//     border: 0 !important;
//   }
// `;

function Component() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-sm-4 col-md-6 col-lg-4">1</div>
					<div className="col-sm-4 col-md-6 col-lg-4">2</div>
					<div className="col-sm-4 col-md-6 col-lg-4">3</div>
				</div>
			</div>

			{/* tag */}
			<div className="tag-red">Badge</div>
			<div className="tag-gray">무료배송</div>
			<div className="tag-green">무료배송</div>

			{/* avatar */}
			<div>
				<div className="avatar-24">
					<img src="./assets/images/img-user-01.jpg" alt="유저 이미지" />
				</div>

				<div className="avatar-32">
					<img src="./assets/images/img-review-01.jpg" alt="유저 이미지" />
				</div>
				<div className="avatar-32">
					<img src="./assets/images/img-review-01.jpg" alt="유저 이미지" />
				</div>
				<div className="avatar-32"></div>
			</div>

			{/* star-rating */}
			<div>
				<div className="star-rating-13">
					<i className="ic-star is-active"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
				</div>
				<div className="star-rating-16">
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
				</div>
				<div className="star-rating-20">
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
				</div>
				<div className="star-rating-24">
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
					<i className="ic-star"></i>
				</div>
			</div>

			{/* price */}
			<div>
				<div className="price-16">
					<strong className="amount">40,000</strong>
					<span className="currency">원</span>
				</div>
				<div className="price-20">
					<strong className="amount">40,000</strong>
					<span className="currency">원</span>
				</div>
				<div className="price-32">
					<strong className="amount">40,000</strong>
					<span className="currency">원</span>
				</div>
				<div className="price-off">
					<strong className="amount">40,000</strong>
					<span className="currency">원</span>
				</div>
			</div>

			{/* buttons */}
			<div>
				<button className="btn-32 btn-primary" type="button">
					Label
				</button>
				<button className="btn-32 btn-secondary" type="button">
					Label
				</button>
				<button className="btn-32 btn-outlined" type="button">
					Label
				</button>
				<button className="btn-32 btn-ghost" type="button">
					Label
				</button>
			</div>
			<div>
				<button className="btn-32 btn-primary" type="button" disabled>
					Label
				</button>
				<button className="btn-32 btn-secondary" type="button" disabled>
					Label
				</button>
				<button className="btn-32 btn-outlined" type="button" disabled>
					Label
				</button>
				<button className="btn-32 btn-ghost" type="button" disabled>
					Label
				</button>
			</div>
			<div>
				<button className="btn-40 btn-primary" type="button">
					Label
				</button>
				<button className="btn-40 btn-secondary" type="button">
					Label
				</button>
				<button className="btn-40 btn-outlined" type="button">
					Label
				</button>
				<button className="btn-40 btn-ghost" type="button">
					Label
				</button>
			</div>
			<div>
				<button className="btn-40 btn-primary" type="button" disabled>
					Label
				</button>
				<button className="btn-40 btn-secondary" type="button" disabled>
					Label
				</button>
				<button className="btn-40 btn-outlined" type="button" disabled>
					Label
				</button>
				<button className="btn-40 btn-ghost" type="button" disabled>
					Label
				</button>
			</div>
			<div>
				<button className="btn-48 btn-primary" type="button">
					Label
				</button>
				<button className="btn-48 btn-secondary" type="button">
					Label
				</button>
				<button className="btn-48 btn-outlined" type="button">
					Label
				</button>
				<button className="btn-48 btn-ghost" type="button">
					Label
				</button>
			</div>
			<div>
				<button className="btn-48 btn-primary" type="button" disabled>
					Label
				</button>
				<button className="btn-48 btn-secondary" type="button" disabled>
					Label
				</button>
				<button className="btn-48 btn-outlined" type="button" disabled>
					Label
				</button>
				<button className="btn-48 btn-ghost" type="button" disabled>
					Label
				</button>
			</div>
			<div>
				<button className="btn-55 btn-primary" type="button">
					Label
				</button>
				<button className="btn-55 btn-secondary" type="button">
					Label
				</button>
				<button className="btn-55 btn-outlined" type="button">
					Label
				</button>
				<button className="btn-55 btn-ghost" type="button">
					Label
				</button>
			</div>
			<div>
				<button className="btn-55 btn-primary" type="button" disabled>
					Label
				</button>
				<button className="btn-55 btn-secondary" type="button" disabled>
					Label
				</button>
				<button className="btn-55 btn-outlined" type="button" disabled>
					Label
				</button>
				<button className="btn-55 btn-ghost" type="button" disabled>
					Label
				</button>
			</div>

			<div className="select-group">
				<select className="form-select">
					<option value="1">선택사항 1</option>
					<option value="2">선택사항 2</option>
					<option value="3">선택사항 3</option>
					<option value="4">선택사항 4</option>
					<option value="5">선택사항 5</option>
				</select>
				<i className="ic-caret" aria-hidden></i>
			</div>
			<div className="input-group">
				<i className="ic-search"></i>
				<input
					className="form-input"
					type="text"
					placeholder="스토어 검색"
					aria-hidden
				/>
			</div>

			<div className="pagination">
				<button className="page-control page-prev" type="button">
					<i className="ic-chevron"></i>
				</button>
				<ol className="page-list">
					<li className="page-item is-active">
						<a href="/">1</a>
					</li>
					<li className="page-item">
						<a href="/">2</a>
					</li>
					<li className="page-item">
						<a href="/">3</a>
					</li>
					<li className="page-item">
						<a href="/">4</a>
					</li>
					<li className="page-item">
						<a href="/">5</a>
					</li>
				</ol>
				<button className="page-control page-next" type="button">
					<i className="ic-chevron"></i>
				</button>
			</div>

			<div className="tooltip"></div>

			<header className="product-section-header">
				<h1 className="title">유저들의 스타일링 샷</h1>
			</header>

			<header className="product-section-header">
				<h1 className="title">리뷰</h1>
				<strong className="badge" aria-label="리뷰 566개">
					566
				</strong>
			</header>

			<header className="product-section-header">
				<h1 className="title">문의</h1>
				<strong className="badge" aria-label="문의 96개">
					96
				</strong>
				<button className="icon-button" type="button">
					문의하기
				</button>
			</header>

			<header className="product-section-header">
				<h1 className="title">유저들의 스타일링 샷</h1>
				<button className="icon-button" type="button">
					<i className="ic-chevron"></i>
				</button>
			</header>

			<header className="product-section-header">
				<h1 className="title">유저들의 스타일링 샷</h1>
				<strong className="badge" aria-label="461개">
					461
				</strong>
				<button className="icon-button" type="button">
					<i className="ic-chevron"></i>
				</button>
			</header>
		</>
	);
}

export default Component;
