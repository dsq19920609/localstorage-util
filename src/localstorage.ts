import { ILocalStorageFactoryParams, ILocalStorageFactoryReturn } from './types/index';

export const localStorageFactory = <T>(params: ILocalStorageFactoryParams<T>): ILocalStorageFactoryReturn<T> => {
  const { key, defaultValue, raw, serializer = JSON.stringify, deserializer = JSON.parse } = params

  // raw 是否需要序列化，对于值为字符串的不需要序列化
  const setItem = (value: T) => {
    // 将data断言为string类型，因为setItem的value类型为string 不能将T类型赋值给需求string类型的value
    const data = (raw ? value : serializer(value)) as string;
    window.localStorage.setItem(key, data || defaultValue)
  }

  const getItem = () => {
    const data = window.localStorage.getItem(key) || defaultValue
    return raw ? data : deserializer(data)
  }

  const removeItem = () => window.localStorage.removeItem(key)

  return {
    setItem,
    getItem,
    removeItem,
  }
}
