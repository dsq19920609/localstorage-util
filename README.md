### 本地启动

~~~js
npm start
~~~

### 构建

~~~js
npm build
~~~

### localStorage操作

支持: `setItem`、`getItem`、`removeItem`操作

> 实例

~~~js
import { localStorageFactory } from 'storage-util-base';

const user = localStorageFactory({
  key: 'userInfo'
});

user.setItem({ name: 'dong', age: 34 });

user.getItem();

user.removeItem();
~~~

### sessionStorage操作

支持: `setItem`、`getItem`、`removeItem`操作

~~~js
import { sessionStorageFactory } from 'storage-util-base';

const user = sessionStorageFactory({
  key: 'userInfo'
});

user.setItem({ name: 'dong', age: 34 });

user.getItem();

user.removeItem();
~~~

### cookie操作

支持 `setCookie`、`getCookies`、`getCookie`、`delCookie`

~~~js
import { setCookie, getCookies, getCookie, delCookie } from 'storage-util-base';

setCookie('pwd', 'xxxx');

const cookiesObj = getCookies();

const pwd = getCookie('pwd');

delCookie('pwd');
~~~