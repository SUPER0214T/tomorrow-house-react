import { atom } from 'recoil';

export const gnbMenuAtom = atom<boolean>({
	key: 'gnbMenuAtom',
	default: false,
});

export const gnbSearchAtom = atom<boolean>({
	key: 'gnbSearchAtom',
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
