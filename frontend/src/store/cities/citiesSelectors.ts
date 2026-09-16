import { createSelector } from '@reduxjs/toolkit'; //вместо reselect, т.к. в redux toolkit уже есть createSelector
import type { RootState } from '../store'; // чтобы использовать реальный тип хранилища. для надежности?



export const getCities = createSelector(
  [(state: RootState) => state.cities.items],
  (items) => [...items].sort((a, b) => a.name.localeCompare(b.name))
);

export const getLoadingStatus = (state: RootState) =>
  state.cities.isLoading;


// чтобы компонент мог узнать о сбое запроса
export const getError = (state: RootState) => state.cities.error;
  



