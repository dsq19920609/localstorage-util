export interface IStorageFactoryParams<T> {
    key: string;
    defaultValue?: string;
    raw?: boolean;
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
}
export interface IStorageFactoryReturn<T> {
    setItem: (value: T) => void;
    getItem: () => T;
    removeItem: () => void;
}
export declare type StorageType = 'local' | 'session';
export interface CookieParams {
    name: string;
    value: string;
    seconds?: number;
}
