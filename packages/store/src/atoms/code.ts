import { atom } from 'recoil';

export const codeAtom = atom({
  key: 'code',
  default: {
    code: '',
  },
});
