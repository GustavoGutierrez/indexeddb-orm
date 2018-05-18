!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),u=function(e){function t(t,n,r,o){void 0===o&&(o="_id");var i=e.call(this)||this;return i.db=t,i.idbKey=n,i.name=r,i.primary=o,i.tables=[],i.hasIDBKey=!1,i.tables.push(i.name),i.hasIDBKey=!!i.idbKey,i}return o(t,e),t.prototype.find=function(e){var n=this;return new Promise(function(r,o){var s=n.getTransaction(n.allTables(),t.READONLY).objectStore(n.name).get(e);s.onsuccess=function(e){var o=0,s=e.target.result;n.relations.length<=0||!s?r(s):n.relations.forEach(function(e){return i(n,void 0,void 0,function(){var n,i;return a(this,function(a){switch(a.label){case 0:return[4,this.getRelationships(e,this.transaction,this.getMainResult(s,e.localKey,!1),!1)];case 1:switch(n=a.sent(),o++,i=this.getDefaultRelationValue(e.type),s[e.modelName]=s[e.modelName]||i,e.type){case t.RELATIONS.hasOne:void 0!==n&&(s[e.modelName]=n[e.foreignKey]==s[e.localKey]?n:s[e.modelName]);break;case t.RELATIONS.hasMany:n.length>0&&(s[e.modelName]=n.filter(function(t){return t[e.foreignKey]==s[e.localKey]}));break;case t.RELATIONS.hasManyMultiEntry:n.length>0&&(s[e.modelName]=n.filter(function(t){return-1!==s[e.localKey].indexOf(t[e.foreignKey])}))}return o==this.relations.length&&r(s),[2]}})})})},s.onerror=function(e){o(e.message)}})},t.prototype.first=function(){var e=this;return new Promise(function(n,r){var o=e.getTransaction(e.allTables(),t.READONLY).objectStore(e.name),s=null,u=e.indexBuilder.type?e.getIndexResult(o):o.openCursor();u.onsuccess=function(r){var o=r.target.result;if(o){e.checkBuilderValue(o.value)||o.continue();var u=0;s=o.value,e.relations.length<=0||!s?n(s):e.relations.forEach(function(r){return i(e,void 0,void 0,function(){var e,o;return a(this,function(i){switch(i.label){case 0:return[4,this.getRelationships(r,this.transaction,this.getMainResult(s,r.localKey,!1),!1)];case 1:switch(e=i.sent(),u++,o=this.getDefaultRelationValue(r.type),s[r.modelName]=s[r.modelName]||o,r.type){case t.RELATIONS.hasOne:void 0!==e&&(s[r.modelName]=e[r.foreignKey]==s[r.localKey]?e:s[r.modelName]);break;case t.RELATIONS.hasMany:e.length>0&&(s[r.modelName]=e.filter(function(e){return e[r.foreignKey]==s[r.localKey]}));break;case t.RELATIONS.hasManyMultiEntry:e.length>0&&(s[r.modelName]=e.filter(function(e){return-1!==s[r.localKey].indexOf(e[r.foreignKey])}))}return u==this.relations.length&&n(s),[2]}})})})}else n(s)},u.onerror=function(e){r(e.message)}})},t.prototype.get=function(){var e=this;return new Promise(function(n,r){var o=e.getTransaction(e.allTables(),t.READONLY).objectStore(e.name),s=[],u=e.indexBuilder.type?e.getIndexResult(o):o.openCursor();u.onsuccess=function(r){var o=r.target.result;if(o)return e.checkBuilderValue(o.value)&&s.push(o.value),void o.continue();e.relations.length<=0||s.length<=0?n(s):e.relations.forEach(function(n){return i(e,void 0,void 0,function(){var e,r=this;return a(this,function(o){switch(o.label){case 0:return[4,this.getRelationships(n,this.transaction,this.getMainResult(s,n.localKey,!0),!0)];case 1:return e=o.sent(),0,s=s.map(function(o){var i=r.getDefaultRelationValue(n.type);switch(o[n.modelName]=o[n.modelName]||i,n.type){case t.RELATIONS.hasOne:void 0!==e&&(o[n.modelName]=e[n.foreignKey]==o[n.localKey]?e:o[n.modelName]);break;case t.RELATIONS.hasMany:e.length>0&&(o[n.modelName]=e.filter(function(e){return e[n.foreignKey]==o[n.localKey]}));break;case t.RELATIONS.hasManyMultiEntry:e.length>0&&(o[n.modelName]=e.filter(function(e){return-1!==o[n.localKey].indexOf(e[n.foreignKey])}))}return o}),[2]}})})})},u.onerror=function(e){r(e.message)}})},t.prototype.create=function(e){var n=this;return new Promise(function(r,o){var i=n.getTransaction(n.allTables(),t.READWRITE).objectStore(n.name);e.createdAt=Date.now(),e.updatedAt=Date.now();var a=i.add(e);a.onsuccess=function(t){e[n.primary]=t.target.result,r(e)},a.onerror=function(e){o(e.message)}})},t.prototype.createMultiple=function(e){var n=this;return new Promise(function(r,o){var i=n.getTransaction(n.allTables(),t.READWRITE),a=i.objectStore(n.name),s=Date.now(),u=Date.now(),c=[];e.forEach(function(t){t.createdAt=s,t.updatedAt=u;var l=a.add(t);l.onerror=function(e){o(e)},l.onsuccess=function(o){t[n.primary]=o.target.result,c.push(t),c.length===e.length&&r(c)},l.onerror=function(e){i.abort(),o(e.message)}})})},t.prototype.update=function(e){var n=this,r=Date.now();return new Promise(function(o,i){var a=n.getTransaction(n.allTables(),t.READWRITE),s=a.objectStore(n.name),u=0,c=0,l=n.indexBuilder.type?n.getIndexResult(s):s.openCursor();l.onsuccess=function(s){var l=s.target.result;if(l){if(n.checkBuilderValue(l.value)){u++;var d=l.value[n.primary],f=l.value.createdAt,p=t.helpers.replaceNestedValues(e,l.value);p[n.primary]=d,p.createdAt=f,p.updatedAt=r;var h=l.update(p);h.onsuccess=function(){++c===u&&o(c)},h.onerror=function(e){a.abort(),i(e.message)}}l.continue()}else o(c)},l.onerror=function(e){i(e.message)}})},t.prototype.save=function(e,n){var r=this,o=Date.now();return new Promise(function(s,u){return i(r,void 0,void 0,function(){var r,i,c,l,d,f;return a(this,function(a){switch(a.label){case 0:return[4,this.find(e)];case 1:return(r=a.sent())||u("No record found"),i=this.getTransaction(this.allTables(),t.READWRITE),c=i.objectStore(this.name),l=r[this.primary],d=r.createdAt,(r=t.helpers.replaceNestedValues(n,r))[this.primary]=l,r.createdAt=d,r.updatedAt=o,(f=c.put(r)).onsuccess=function(){s(!0)},f.onerror=function(e){u(e.message)},[2]}})})})},t.prototype.destroyId=function(e){var n=this;return new Promise(function(r,o){return i(n,void 0,void 0,function(){var n,i,s;return a(this,function(a){switch(a.label){case 0:return[4,this.find(e)];case 1:return a.sent()||o("result at id does not exists"),n=this.getTransaction(this.allTables(),t.READWRITE),i=n.objectStore(this.name),(s=i.delete(e)).onsuccess=function(e){r(e.target.result)},s.onerror=function(e){o(e.message)},[2]}})})})},t.prototype.destroy=function(){var e=this;return new Promise(function(n,r){var o,i=e.getTransaction(e.allTables(),t.READWRITE),a=i.objectStore(e.name),s=0,u=0;(o=e.indexBuilder.type?e.getIndexResult(a):a.openCursor()).onsuccess=function(e){var t=e.target.result;if(t){if(this.checkBuilderValue(t.value)){s++;var o=t.delete();o.onsuccess=function(){++u===s&&n(!0)},o.onerror=function(e){i.abort(),r(e)}}t.continue()}else n()},o.onerror=function(e){r(e)}})},t.prototype.count=function(){var e=this;return new Promise(function(n,r){var o=e.getTransaction(e.allTables(),t.READONLY).objectStore(e.name),i=0,a=e.indexBuilder.type?e.getIndexResult(o):o.openCursor();a.onsuccess=function(t){var r=t.target.result;r?(e.checkBuilderValue(r.value)&&i++,r.continue()):n(i)},a.onerror=function(e){r(e.message)}})},t.prototype.average=function(e){var n=this;return new Promise(function(r,o){var i=n.getTransaction(n.allTables(),t.READONLY).objectStore(n.name),a=0,s=0,u=n.indexBuilder.type?n.getIndexResult(i):i.openCursor();u.onsuccess=function(o){var i=o.target.result;if(i){if(n.checkBuilderValue(i.value)){var u=t.helpers.getNestedAttribute(e,i.value);s++,u=parseFloat(u),u=isNaN(u)?0:u,a+=u}i.continue()}else r(a/s)},u.onerror=function(e){o(e.message)}})},t.prototype.reduce=function(e,n){var r=this;if("function"!=typeof e)throw"Parameter should be a function type";return new Promise(function(o,i){var a,s=r.getTransaction(r.allTables(),t.READONLY).objectStore(r.name),u=n;(a=r.indexBuilder.type?r.getIndexResult(s):s.openCursor()).onsuccess=function(t){var n=t.target.result;n?(this.checkBuilderValue(n.value)&&(u=e(n.value,u)),n.continue()):o(u)},a.onerror=function(e){i(e.message)}})},t.prototype.getIndexResult=function(e){var t,n;if(!this.indexBuilder.type)return e.openCursor();switch(n=this.indexBuilder.index!==this.primary?e.index(this.indexBuilder.index):e,this.indexBuilder.type){case"and":t=this.idbKey.only(this.indexBuilder.value);break;case"in":this.whereIn(this.indexBuilder.index,this.indexBuilder.value);var r=this.indexBuilder.value.sort();t=this.idbKey.bound(r[0],r[r.length-1],!1,!1);break;case"gte":t=this.idbKey.lowerBound(this.indexBuilder.value,!1);break;case"gt":t=this.idbKey.lowerBound(this.indexBuilder.value,!0);break;case"lte":t=this.idbKey.upperBound(this.indexBuilder.value,!1);break;case"lt":t=this.idbKey.lowerBound(this.indexBuilder.value,!0);break;case"between":t=this.idbKey.bound(this.indexBuilder.value[0],this.indexBuilder.value[1],!1,!1);break;default:throw"Invalid builder type given"}return n.openCursor(t)},t.prototype.checkBuilderValue=function(e){var n,r,o=!0;for(n=0;n<this.builder.length;n++){var i=this.builder[n];switch(i.type){case"and":if(!t.helpers.checkNestedAttribute(i.attribute,e,i.value))return!1;break;case"in":var a=!1;for(r=0;r<i.value.length;r++)void 0!==(o=t.helpers.checkNestedAttribute(i.attribute,e,i.value[r]))&&!1!==o&&(a=!0);if(!a)return!1;o=!0;break;case"gte":if(void 0===(o=t.helpers.getNestedAttribute(i.attribute,e)))return!1;if(o<i.value)return!1;o=!0;break;case"gt":if(void 0===(o=t.helpers.getNestedAttribute(i.attribute,e)))return!1;if(o<=i.value)return!1;o=!0;break;case"lte":if(void 0===(o=t.helpers.getNestedAttribute(i.attribute,e)))return!1;if(o>i.value)return!1;o=!0;break;case"lt":if(void 0===(o=t.helpers.getNestedAttribute(i.attribute,e)))return!1;if(o>=i.value)return!1;o=!0;break;case"between":if(void 0===(o=t.helpers.getNestedAttribute(i.attribute,e)))return!1;if(i.value[0]>=o&&i.value[1]<=o)return!1;o=!0;break;default:o=!0}}return o},t.prototype.createTransaction=function(e,t){return this.transaction=this.db.transaction(e,t),this.transaction},t.prototype.setTransaction=function(e){this.transaction=e},t.prototype.getTransaction=function(e,t,n){return void 0===n&&(n=!1),this.transaction&&!0!==n?this.transaction:this.createTransaction(e,t)},t.prototype.openTransaction=function(e,n,r){void 0===r&&(r=null);var o=e.map(function(e){return e.name}),i=this.getTransaction(o,t.READWRITE),a={};return e.forEach(function(e){Object.defineProperty(a,e.name,{get:function(){var n=new t(e.db,e.idbKey,e.name,e.primary);return n.setTransaction(i),n}})}),n(i,a,r)},t.prototype.getMainResult=function(e,t,n){return n?e.map(function(e){return e[t]}):e[t]},t.prototype.getRelationships=function(e,n,r,o){void 0===o&&(o=!1);var i=new t(this.db,this.idbKey,e.modelName,e.primary);if(i.setTransaction(n),e.func){var a=new s.Builder;a=e.func(a),i.tables=a.tables,i.tables.push(i.name),i.relations=a.relations,i.builder=a.builder,i.primary=e.primary||"_id"}return o?i.whereIndexIn(e.foreignKey,r):i.whereIndex(e.foreignKey,r),new Promise(function(n,a){var s;switch(e.type){case t.RELATIONS.hasOne:s=i.first();break;case t.RELATIONS.hasMany:s=i.get();break;case t.RELATIONS.hasManyMultiEntry:var u=[];u=o?r.reduce(function(e,t){return e.forEach(function(e){return t.push(e)}),t},[]):r,s=i.whereIndexIn(e.foreignKey,u).get();break;default:throw"Invalid relation type provided"}s.then(function(e){n(e)}).catch(function(e){a(e)})})},t.prototype.getDefaultRelationValue=function(e){switch(e){case t.RELATIONS.hasOne:return null;case t.RELATIONS.hasMany:case t.RELATIONS.hasManyMultiEntry:return[];default:return null}},Object.defineProperty(t,"READWRITE",{get:function(){return"readwrite"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"READONLY",{get:function(){return"readonly"},enumerable:!0,configurable:!0}),t.prototype.allTables=function(){return this.tables=[this.name],this.tables=this.tables.concat(this.getRelationTables(this.relations)),this.tables},t.prototype.getRelationTables=function(e){var t=this,n=[];return e.forEach(function(e){if(n.push(e.modelName),e.func){var r=e.func(new s.Builder);n=n.concat(t.getRelationTables(r.relations))}}),n},t}(s.Builder);t.Model=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){function e(e,t,n,r){void 0===e&&(e=[]),void 0===t&&(t={}),void 0===n&&(n=[]),void 0===r&&(r=[]),this.builder=e,this.indexBuilder=t,this.relations=n,this.tables=r}return e.prototype.whereIndex=function(e,t){return this.indexBuilder={index:e,value:t,type:"and"},this},e.prototype.whereIndexIn=function(e,t){return this.indexBuilder={index:e,value:t,type:"in"},this},e.prototype.indexGte=function(e,t){return this.indexBuilder={index:e,value:t,type:"gte"},this},e.prototype.indexGt=function(e,t){return this.indexBuilder={index:e,value:t,type:"gt"},this},e.prototype.indexLte=function(e,t){return this.indexBuilder={index:e,value:t,type:"lte"},this},e.prototype.indexLt=function(e,t){return this.indexBuilder={index:e,value:t,type:"lt"},this},e.prototype.indexBetween=function(e,t,n){return this.indexBuilder={index:e,value:[t,n],type:"between"},this},e.prototype.whereIn=function(e,t){return this.builder.push({attribute:e,value:t,type:"in"}),this},e.prototype.where=function(e,t){return this.builder.push({attribute:e,value:t,type:"and"}),this},e.prototype.gte=function(e,t){return this.builder.push({attribute:e,value:t,type:"gte"}),this},e.prototype.gt=function(e,t){return this.builder.push({attribute:e,value:t,type:"gt"}),this},e.prototype.lte=function(e,t){return this.builder.push({attribute:e,value:t,type:"lte"}),this},e.prototype.lt=function(e,t){return this.builder.push({attribute:e,value:t,type:"lt"}),this},e.prototype.between=function(e,t,n){if(isNaN(t)||isNaN(n))throw"Between is only for numeric values";return this.builder.push({attribute:e,value:[t,n],type:"between"}),this},e.prototype.relation=function(e,t,n,r,o,i){return void 0===o&&(o=null),void 0===i&&(i=null),this.tables.push(e),this.relations.push({modelName:e,func:o,localKey:n,foreignKey:r,type:t,primary:i}),this},Object.defineProperty(e,"helpers",{get:function(){return{checkNestedAttribute:function(e,t,n){return n==r.Model.helpers.getNestedAttribute(e,t)},getNestedAttribute:function(e,t){var n,r=e.split("."),o=t;for(n=0;n<r.length;n++){if(void 0===o[r[n]])return;o=o[r[n]]}return o},replaceNestedValues:function(e,t){for(var n in e)t[n]=e[n];return t}}},enumerable:!0,configurable:!0}),e.prototype.getBuilder=function(){return{tables:this.tables,indexBuilder:this.indexBuilder,normalBuilder:this.builder,relations:this.relations}},Object.defineProperty(e.prototype,"RELATIONS",{get:function(){return e.RELATIONS},enumerable:!0,configurable:!0}),Object.defineProperty(e,"RELATIONS",{get:function(){return{hasOne:"hasOne",hasMany:"hasMany",hasManyMultiEntry:"hasManyMultiEntry"}},enumerable:!0,configurable:!0}),e}();t.Builder=o},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=n(0),s=n(4),u=function(){function e(e,t,n,r,o){void 0===r&&(r=!1),void 0===o&&(o=""),this.db=e,this.idbKey=t,this.settings=n,this.useWorker=r,this.pathToWorker=o}return e.prototype.connect=function(){return r(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return this.useWorker?[4,this.createWorkerHandler()]:[3,2];case 1:return[2,e.sent()];case 2:return[4,this.createNormalHandler()];case 3:return[2,e.sent()]}})})},e.prototype.destroy=function(e){console.info("database "+e+" deleted"),this.db.deleteDatabase(e)},e.prototype.createWorkerHandler=function(){var e=this;return new Promise(function(t){var n=new Worker(e.pathToWorker),r=new MessageChannel;n.postMessage({command:"init",settings:e.settings},[r.port1]),r.port2.onmessage=function(o){if("error"===o.data.status||!o.data.status)throw r.port2.close(),new Error(o.data.error||"Uncaught error <"+JSON.stringify(o.data)+">");var i={};e.settings.migrations.forEach(function(e){var t=e.primary||"id";Object.defineProperty(i,e.name,{get:function(){return new s.WorkerModel(n,e.name,t)}})}),t(i),r.port2.close(),r.port1.close()}})},e.prototype.createNormalHandler=function(){var e=this;return new Promise(function(t,n){var r=e.db.open(e.settings.name,e.settings.version);r.onupgradeneeded=function(t){e.idb=t.target.result,e.migration=new i.Migration(e.idb,t.target.transaction,e.settings.migrations),e.migration.run()},r.onerror=function(e){n(e.message)},r.onsuccess=function(n){var r={};e.settings.migrations.forEach(function(t){var o=t.primary||"id",i=e.idbKey;Object.defineProperty(r,t.name,{get:function(){return new a.Model(n.target.result,i,t.name,o)}})}),t(r)}})},e}();t.DB=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n){this.db=e,this.transaction=t,this.migrations=n,this.objectStores=[]}return e.prototype.createStore=function(e){var t=this,n=e.primary||"_id",r=this.db.createObjectStore(e.name,{keyPath:n,autoIncrement:!0});this.objectStores.push(r),e.columns&&e.columns.forEach(function(e){return t.makeIndex(e,r)})},e.prototype.run=function(){var e=this;this.migrations.forEach(function(t){e.db.objectStoreNames.contains(t.name)?t.drop?e.db.deleteObjectStore(t.name):e.updateStore(t):e.createStore(t)})},e.prototype.makeIndex=function(e,t){e.attributes=e.attributes||{},e.index=e.index||e.name,t.createIndex(e.name,e.index,e.attributes)},e.prototype.updateStore=function(e){var t=this,n=this.transaction.objectStore(e.name);e.columns&&e.columns.forEach(function(e){n.indexNames.contains(e.name)||t.makeIndex(e,n)}),e.dropColumns&&e.dropColumns.forEach(function(e){n.indexNames.contains(e)&&t.dropIndex(e,n)})},e.prototype.dropIndex=function(e,t){t.deleteIndex(e)},e}();t.Migration=r},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t,n,r){var o=e.call(this)||this;return o.worker=t,o.name=n,o.primary=r,o}return o(t,e),t.prototype.find=function(e){var t=this;return new Promise(function(n){var r=new MessageChannel;t.worker.postMessage({command:"action",modelName:t.name,query:t.getStringify(t.getBuilder()),action:"find",content:t.getStringify([e])},[r.port1]),r.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);n(e.data.content)}})},t.prototype.first=function(){var e=this;return new Promise(function(t){var n=new MessageChannel;e.worker.postMessage({command:"action",modelName:e.name,query:e.getStringify(e.getBuilder()),action:"first",content:e.getStringify([])},[n.port1]),n.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);t(e.data.content)}})},t.prototype.get=function(){var e=this;return new Promise(function(t){var n=new MessageChannel;e.worker.postMessage({command:"action",modelName:e.name,query:e.getStringify(e.getBuilder()),action:"get",content:e.getStringify([])},[n.port1]),n.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);t(e.data.content)}})},t.prototype.create=function(e){var t=this;return new Promise(function(n){var r=new MessageChannel;t.worker.postMessage({command:"action",modelName:t.name,query:t.getStringify(t.getBuilder()),action:"create",content:t.getStringify([e])},[r.port1]),r.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);n(e.data.content)}})},t.prototype.createMultiple=function(e){var t=this;return new Promise(function(n){var r=new MessageChannel;t.worker.postMessage({command:"action",modelName:t.name,query:t.getStringify(t.getBuilder()),action:"createMultiple",content:t.getStringify([e])},[r.port1]),r.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);n(e.data.content)}})},t.prototype.update=function(e){var t=this;return new Promise(function(n){var r=new MessageChannel;t.worker.postMessage({command:"action",modelName:t.name,query:t.getStringify(t.getBuilder()),action:"update",content:t.getStringify([e])},[r.port1]),r.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);n(e.data.content)}})},t.prototype.save=function(e,t){var n=this;return new Promise(function(r){var o=new MessageChannel;n.worker.postMessage({command:"action",modelName:n.name,query:n.getStringify(n.getBuilder()),action:"save",content:n.getStringify([e,t])},[o.port1]),o.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);r(e.data.content)}})},t.prototype.destroyId=function(e){var t=this;return new Promise(function(n){var r=new MessageChannel;t.worker.postMessage({command:"action",modelName:t.name,query:t.getStringify(t.getBuilder()),action:"destroyId",content:t.getStringify([e])},[r.port1]),r.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);n(e.data.content)}})},t.prototype.destroy=function(){var e=this;return new Promise(function(t){var n=new MessageChannel;e.worker.postMessage({command:"action",modelName:e.name,query:e.getStringify(e.getBuilder()),action:"destroyId",content:e.getStringify([])},[n.port1]),n.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);t(e.data.content)}})},t.prototype.count=function(){var e=this;return new Promise(function(t){var n=new MessageChannel;e.worker.postMessage({command:"action",modelName:e.name,query:e.getStringify(e.getBuilder()),action:"count",content:e.getStringify([])},[n.port1]),n.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);t(e.data.content)}})},t.prototype.average=function(e){var t=this;return new Promise(function(n){var r=new MessageChannel;t.worker.postMessage({command:"action",modelName:t.name,query:t.getStringify(t.getBuilder()),action:"average",content:t.getStringify([e])},[r.port1]),r.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);n(e.data.content)}})},t.prototype.reduce=function(e,t){var n=this;return new Promise(function(r){var o=new MessageChannel;n.worker.postMessage({command:"action",modelName:n.name,query:n.getStringify(n.getBuilder()),action:"reduce",content:n.getStringify([e,t])},[o.port1]),o.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);r(e.data.content)}})},t.prototype.openTransaction=function(e,t,n){var r=this;return void 0===n&&(n=null),new Promise(function(o){var i=new MessageChannel,a=e.map(function(e){return{name:e.name,primary:e.primary}});r.worker.postMessage({command:"transaction",modelName:a[0].name,models:a,content:r.getStringify([t,n])},[i.port1]),i.port2.onmessage=function(e){if(!e.data.status||"error"===e.data.status)throw new Error(e.data.error);o(e.data.content)}})},t.prototype.getStringify=function(e){return JSON.stringify(e,function(e,t){return"function"==typeof t?t.toString():t})},t}(n(1).Builder);t.WorkerModel=i},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);window.DB=r.DB,window.idb=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n="");var o=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,i=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;if(!o)throw"Indexed DB not supported";if(!i)throw"IDBKeyRange not available";return new r.DB(o,i,e,t,n)}}]);