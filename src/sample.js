/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @author 김개똥
 */
function Book(title, author) {
}

/**
 * @description 책을 정렬합니다
 */
Book.sort = function () {
  //.. something
}

/**
 * Set Book Name
 * @param {*} name 
 */
Book.prototype.setName = function(name) {
  this.name = name;
}

/**
 *ajax Promise 콜백
 * @description ajax 비동기 통신
 * @async
 * @param {string} url
 * @returns {Promise}
 */
function ajax(url) {
  return new Promise();
}

/**
 * 덧셈 함수
 * @description 함수 설명입니다.
 * @param {number} a 숫자가 옵니다
 * @param {number} b 숫자가 옵니다.
 * @returns {number} 두 숫자의 합
 * @author 김개똥
 */
function sum(a, b ) {
  return a + b;
}

/**
 * util
 * @description namespace 패턴
 * @namespace
 * @requires 
 * @author 김개똥
 */
const util = {
  /**
   * @function jsonToString
   * @memberof util
   */
  jsonToString() {
    
  }
}

/**
 * 상수 선언
 * @constant
 * @type {object}
 * @default
 */
const CONSTANTS = {
}