### localStorage操作

支持: `setItem`、`getItem`、`removeItem`操作

> 实例

~~~ts
interface Model {
  name: string,
  age: number,
  card: number
}

const personStorage = localStorageFactory<Model>({
  name: 'dong',
  age: 27,
  card: 133333333
});

personStorage.getItem();

personStorage.setItem('');

personStorage.removeItem();
~~~