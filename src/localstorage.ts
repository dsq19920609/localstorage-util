import { IStorageFactoryParams, IStorageFactoryReturn } from './types';
import { CommonStorageActions } from './util';

export const localStorageFactory = <T>(params: IStorageFactoryParams<T>): IStorageFactoryReturn<T> => {
  return CommonStorageActions(params, 'local');  
}
