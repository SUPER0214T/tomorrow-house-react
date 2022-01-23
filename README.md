# 기존의 Tomorrow-house를 React의 라이브러리를 사용하여 제작하였습니다.

## [해당 프로젝트 주소](https://superpet21.github.io/tomorrow-house-react/#/)

## 목적

- 기존의 JavaScript 라이브러리를 React의 라이브러리로 대체하였습니다.
- JavaScript 라이브러리를 사용한 코드를 React로 어떻게 바꿀 수 있는지 공부하였습니다.

## 기능

1. 검색창 클릭 시 최근 검색어 모달이 등장합니다.
2. Header의 글쓰기 좌측의 프로필 사진 클릭 시 유저 모달이 등장합니다.
3. 유저들의 스타일링 샷의 슬라이더에서는 버튼으로 사진을 조작할 수 있고 드래그도 가능합니다.
4. 스크롤 위치에 따라 상품정보, 리뷰, 문의, 배송/환불, 추천 색이 변합니다.
5. 모바일, 태블릿, 데스크탑 크기의 반응형 웹을 구현하였습니다.
6. 모바일 크기에서는 상품정보의 길이가 줄어들고 펼치기 버튼을 눌러서 펼칠 수 있습니다.
7. 구매하기 버튼을 누르면 구매하기 모달이 등장합니다.
8. 모바일 크기에서 좌측 상단의 메뉴(≡) 모양의 버튼을 누를 시에 메뉴 슬라이드 바가 등장합니다.
9. 모바일/태블릿 크기에서 우측 상단의 검색(돋보기) 버튼을 누르면 검색 모달이 등장합니다.

## 사용한 React 라이브러리

- [tiny-slider-react](https://github.com/jechav/tiny-slider-react)
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Recoil](https://recoiljs.org/ko/)

## 제작 기간

> 21.12.14 ~ 22.01.10

<!-- ## 어려웠던 점
```
intersection-observer를 React에서 구현하는 과정에서 어려움을 겪었습니다.
intersection-observer를 사용했을 때 product-tab 부분에서 하단의 바가 스크롤 시에 제대로 동작하지 않는 현상이 발생하였습니다.
해당 문제는 코드에서  문제였고 해당 코드는 returnNumberToTabName(index)에서 i를 사용해야 하는 것을 index로 사용해서 발생한 문제였습니다.
해당 문제는 react-intersection-observer를 사용하여 해결하였습니다.
```
```js
function addClassEvent(index: number) {
  observerArr.forEach((el, i) => {
    if(el !== observerArr[index]) {
      returnNumberToTabName(index).classList.remove('is-active');
    } else {
      returnNumberToTabName(index).classList.add('is-active');
    }
  })
}
``` -->
