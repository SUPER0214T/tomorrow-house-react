import { atom } from 'recoil';

export const gnbMenuState = atom<boolean>({
	key: 'gnbMenuState',
	default: false,
});

export const gnbSearchState = atom<boolean>({
	key: 'gnbSearchState',
	default: false,
});
