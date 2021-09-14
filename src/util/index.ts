import { IStorageFactoryParams, IStorageFactoryReturn, StorageType } from '../types';

export const CommonStorageActions = <T>(params: IStorageFactoryParams<T>, type: StorageType): IStorageFactoryReturn<T> => {
  const { key, defaultValue, raw, serializer = JSON.stringify, deserializer = JSON.parse } = params;

  // raw 是否需要序列化，对于值为字符串的不需要序列化
  const setItem = (value: T) => {
    const data = (raw ? value : serializer(value)) as string;
    type === 'local' ? 
      window.localStorage.setItem(key, data || defaultValue || '') : 
      window.sessionStorage.setItem(key, data || defaultValue || '');
  }

  const getItem = () => {
    const data = (type === 'local' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key)) || defaultValue || ''; 
    return raw ? data : deserializer(data)
  }

  const removeItem = () =>type === 'local' ?  window.localStorage.removeItem(key) : window.sessionStorage.removeItem(key);

  return {
    setItem,
    getItem,
    removeItem,
  }
}