import { IStorageFactoryParams, IStorageFactoryReturn } from './types';
import { CommonStorageActions } from './util';

export const sessionStorageFactory  = <T>(params: IStorageFactoryParams<T>): IStorageFactoryReturn<T> => {
  return CommonStorageActions(params, 'session');  
}