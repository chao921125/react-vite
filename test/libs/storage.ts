'use strict';

export default {
    getLocalItem(key: string) {
        let item = localStorage.getItem(key);
        if (!item) return null;
        // 这点要判断是字符串还是对象
        let result = /^[{\\[].*[}\]]$/g.test(item);
        if (result) {
            return JSON.parse(item);
        } else {
            return item;
        }
    },
    setLocalItem(key: string, value: any) {
        // 这点要判断是字符串还是对象
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    removeLocalItem(key: string) {
        localStorage.removeItem(key);
    },
    clearLocal() {
        localStorage.clear();
    },
    // 获取localstorage最大存储容量
    getLocalMaxSpace() {
        if (!window.localStorage) {
            console.log('当前浏览器不支持localStorage!');
        }
        let test = '0123456789';
        let add = function(num: any) {
            num += num;
            if (num.length === 10240) {
                test = num;
                return;
            }
            add(num);
        };
        add(test);
        let sum = test;
        let show = setInterval(function() {
            sum += test;
            try {
                window.localStorage.removeItem('test');
                window.localStorage.setItem('test', sum);
                console.log(sum.length / 1024 + 'KB');
            } catch (e) {
                console.log(sum.length / 1024 + 'KB超出最大限制');
                clearInterval(show);
            }
        }, 0.1);
    },
    // 获取使用了的localstorage的空间
    getLocalUsedSpace() {
        if (!window.localStorage) {
            console.log('浏览器不支持localStorage');
            return false;
        }
        let size = 0;
        for (let item in window.localStorage) {
            // eslint-disable-next-line no-prototype-builtins
            if (window.localStorage.hasOwnProperty(item)) {
                // @ts-ignore
                size += window.localStorage.getItem(item).length;
            }
        }
        console.log('当前localStorage使用容量为' + (size / 1024).toFixed(2) + 'KB');
        return true;
    },
    getSessionItem(key: string) {
        let item = sessionStorage.getItem(key);
        if (!item) return null;
        // 这点要判断是字符串还是对象
        let result = /^[{\\[].*[}\]]$/g.test(item);
        if (result) {
            return JSON.parse(item);
        } else {
            return item;
        }
    },
    setSessionItem(key: string, value: any) {
        // 这点要判断是字符串还是对象
        if (typeof value === 'string') {
            sessionStorage.setItem(key, value);
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    },
    removeSessionItem(key: string) {
        sessionStorage.removeItem(key);
    },
    clearSession() {
        sessionStorage.clear();
    },
    // 获取sessionStorage最大存储容量
    getSessionMaxSpace() {
        if (!window.sessionStorage) {
            console.log('当前浏览器不支持sessionStorage!');
        }
        let test = '0123456789';
        let add = function(num: any) {
            num += num;
            if (num.length === 10240) {
                test = num;
                return;
            }
            add(num);
        };
        add(test);
        let sum = test;
        let show = setInterval(function() {
            sum += test;
            try {
                window.sessionStorage.removeItem('test');
                window.sessionStorage.setItem('test', sum);
                console.log(sum.length / 1024 + 'KB');
            } catch (e) {
                console.log(sum.length / 1024 + 'KB超出最大限制');
                clearInterval(show);
            }
        }, 0.1);
    },
    // 获取使用了的sessionStorage的空间
    getSessionUsedSpace() {
        if (!window.sessionStorage) {
            console.log('当前浏览器不支持sessionStorage');
            return false;
        }
        let size = 0;
        for (let item in window.sessionStorage) {
            // eslint-disable-next-line no-prototype-builtins
            if (window.sessionStorage.hasOwnProperty(item)) {
                // @ts-ignore
                size += window.sessionStorage.getItem(item).length;
            }
        }
        console.log('当前sessionStorage使用容量为' + (size / 1024).toFixed(2) + 'KB');
        return true;
    },
    getAll() {},
    // eslint-disable-next-line no-unused-vars
    key(n: any) {},
    // eslint-disable-next-line no-unused-vars
    forEach(cb: any) {},
    // eslint-disable-next-line no-unused-vars
    has(key: any) {},
    deleteAllExpires() {},
    setItem(key: string, value: any) {
        // 这点要判断是字符串还是对象
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
            sessionStorage.setItem(key, value);
        } else {
            let item = JSON.stringify(value);
            localStorage.setItem(key, item);
            sessionStorage.setItem(key, item);
        }
    },
    getItem(key: string) {
        let item = sessionStorage.getItem(key) || localStorage.getItem(key);
        if (!item) return null;
        // 这点要判断是字符串还是对象
        let result = /^[{\\[].*[}\]]$/g.test(item);
        if (result) {
            return JSON.parse(item);
        } else {
            return item;
        }
    },
    removeItem(key: string) {
        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
    },
    clear() {
        sessionStorage.clear();
        localStorage.clear();
    }
};
