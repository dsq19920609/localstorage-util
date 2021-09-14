import { CookieParams } from './types';

export const setCookie = (params: CookieParams) => {
  const value = JSON.stringify(params.value);
  let baseCookie = params.name + '=' + value;
  if (params.seconds) {
    let date = new Date();
    date.setTime(date.getTime() + 1000 * params.seconds);
    baseCookie = baseCookie + ';expires=' + date.toUTCString() + ';';
  }
  document.cookie = baseCookie;
}

export const getCookies = () => {
  const cookies = document.cookie;
  let cookiesObj: { [props: string]: any } = {};
  if (cookies) {
    const cookiesList = cookies.split('; ');
    cookiesObj = cookiesList.reduce((all, item) => {
      let itemObj = item.split('=');
      all['d'] = itemObj[1];
      return all;
    }, {} as { [props: string]: any });
  }
  return cookiesObj;
}

export const getCookie = (name: string) => {
  const cookies = getCookies();
  return cookies[name] || '';
};

export const delCookie = (name: string) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var val=getCookie(name);
  if(val) {
    document.cookie= name + "=" + val + ";expires=" + exp.toUTCString() + ';';
  }
}