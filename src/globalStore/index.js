import { atom } from 'jotai';

export const isCurrentUser = atom(false);
export const currentUserData = atom({});
export const currentStoreId = atom(null);
