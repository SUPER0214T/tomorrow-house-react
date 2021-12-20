import { atom } from 'recoil';

export const gnbMenuAtom = atom<boolean>({
	key: 'gnbMenuAtom',
	default: false,
});

export const gnbSearchAtom = atom<boolean>({
	key: 'gnbSearchAtom',
	default: false,
});

export const gnbMyMenuAtom = atom<boolean>({
	key: 'gnbMyMenuAtom',
	default: false,
});

export const searchHistoryAtom = atom<boolean>({
	key: 'searchHistoryAtom',
	default: false,
});

export const orderFormAtom = atom<boolean>({
	key: 'orderFormAtom',
	default: false,
});

export const productSpecAtom = atom<boolean>({
	key: 'productSpecAtom',
	default: false,
});

export const isInquiryCollapseAtom = atom<boolean>({
	key: 'isInquiryCollapseAtom',
	default: false,
});

export const isDeliveryCollapseAtom = atom<boolean>({
	key: 'isDeliveryCollapseAtom',
	default: false,
});
