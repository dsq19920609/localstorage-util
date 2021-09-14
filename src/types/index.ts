/**
 * 要保存的值的结构
 */
export interface IStorageFactoryParams<T> {
  key: string,
  defaultValue?: string, // 默认值
  raw?: boolean, // 
  serializer?: (value: T) => string,
  deserializer?: (value: string) => T
}

/**
 * localstorage支持的操作
 */
export interface IStorageFactoryReturn<T> {
  setItem: (value: T) => void, // 设置value
  getItem: () => T, // 获取value
  removeItem: () => void // 删除key-value
}

/**
 *  区分localstorage和sessionstorage
 */
export type StorageType = 'local' | 'session'; 


/**
 * 设置cookie的结构，其他参数如：secure、httpOnly、domain、path、sameSite都应由服务器设置
 */
export interface CookieParams {
  name: string, 
  value: string, 
  seconds?:number,
}