import { CookieParams } from './types';
export declare const setCookie: (params: CookieParams) => void;
export declare const getCookies: () => {
    [props: string]: any;
};
export declare const getCookie: (name: string) => any;
export declare const delCookie: (name: string) => void;
