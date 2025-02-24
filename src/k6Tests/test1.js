// This file contains the k6 test script for targeting https://test.k6.io/

import http from 'k6/http';
import { check, sleep } from 'k6';

let options = {
    vus: 10, // Virtual Users
    duration: '30s', // Duration of the test
};

export default function () {
    let res = http.get('https://test.k6.io/');
    
    check(res, {
        'status is 200': (r) => r.status === 200,
        'body size is correct': (r) => r.body.length > 0,
    });

    sleep(1); // Sleep for 1 second between requests
}