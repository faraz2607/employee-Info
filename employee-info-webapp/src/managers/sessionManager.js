/**
 * Created by Faraz Ahmad on 01/04/2022.
 */

 import Cookies from 'universal-cookie';

 const cookies = new Cookies();
 
 export const sessionManager = {
     setDataInCookies,
     getDataFromCookies,
     removeDataFromCookies,
     setDataInLocalStorage,
     getDataFromLocalStorage,
     removeDataFromLocalStorage,
 };
 function setDataInCookies(data, key) {
     cookies.set(key, JSON.stringify(data), { path: '/' });
 }
 
 function getDataFromCookies(key) {
     return cookies.get(key)
 }
 
 function removeDataFromCookies(key) {
     cookies.remove(key, { path: '/' });
 }
 
 function setDataInLocalStorage(key, data) {
     localStorage.setItem(key, JSON.stringify(data));
 }
 
 function getDataFromLocalStorage(key) {
     return localStorage.getItem(key)
 }
 function removeDataFromLocalStorage(key) {
     localStorage.removeItem(key);
 }