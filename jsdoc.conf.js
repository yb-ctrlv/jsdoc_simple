'use strict';


module.exports = {
  "plugins": ["plugins/markdown"], // 사용 플러그인 선언
  "recurseDepth": 10, // 폴더 탐색 LEVEL
  "source": {
    "include": ['src'],
    "exclude": [],
    "excludePattern": "",
    "includePattern": ".+\\.js(doc|x)?$",
  },
  // "sourceType": "module",  // module or script
  "opts": {
    "template": "node_modules/docdash", // template 사용시 ssame as -t
    "encoding": "utf8", // same as -e
    "destination": "./docs", // same as -d ./docs/
    "recurse": true, // same as -r
    // "tutorials": "path/to/tutorials", // same as -u path/to/tutorials
  },
  "tags": { // JSoc 태그와 각 태그가 해석되는 방식 제어
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"],
  },
  "templates": { // 템플릿 구성
    "cleverLinks": false,
    "monospaceLinks": false,
    "default": {
      "outputSourceFiles": false
    },
    "docdash": {
      "static": false,
      "sort": true
    }
  }
}