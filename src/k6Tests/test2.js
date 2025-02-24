import http from 'k6/http';
import { check, sleep } from 'k6';

let options = {
    vus: 10, // Virtual Users
    duration: '30s', // Duration of the test
};

export default function () {
    // Perform a GET request
    let getRes = http.get('https://test.k6.io/flip_coin.php');
    
    check(getRes, {
        'GET status is 200': (r) => r.status === 200,
        'GET body size is correct': (r) => r.body.length > 0,
    });

    // Perform a POST request
    let postRes = http.post('https://test.k6.io/flip_coin.php', { option: 'heads' });
    
    check(postRes, {
        'POST status is 200': (r) => r.status === 200,
        'POST body contains result': (r) => r.body.includes('result'),
    });

    sleep(1); // Sleep for 1 second between requests
}