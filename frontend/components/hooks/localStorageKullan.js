import { useState } from "react";
import { useEffect } from "react";

//1-başlangıçta local storageda değer var mı?
//Bunu bulmak için key ve initailValue parametrelerini alan bir fonk. yazarız, ve key'i kullanarak item'ı getirtiriz. Eğer item yoksa initialValue kullanılır.
//Daha sonra storedValue ve key değiştikçe bu değerleri güncelleyen ve localStorage'da saklayan  bir fonk.yazarız.
//2-localstorage'da tutulacak değerleri bilmem/güncellemem gerekiyor.

function localStorageKullan(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    let item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    let stringifiedValue = JSON.stringify(storedValue);
    localStorage.setItem(key, stringifiedValue);
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}
export default localStorageKullan;
