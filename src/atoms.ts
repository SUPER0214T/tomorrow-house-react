import { atom } from 'recoil';

export const gnbMenuAtom = atom<boolean>({
	key: 'gnbMenuAtom',
	default: false,
});

export const gnbSearchAtom = atom<boolean>({
	key: 'gnbSearchAtom',
	default: false,
});
