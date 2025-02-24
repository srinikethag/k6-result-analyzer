import { sleep } from 'k6';
import test2 from './test2.js';
import test1 from './test1.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

export const options = {
    //discardResponseBodies: true,
    scenarios: {
        test1: {
            executor: 'ramping-vus',
            exec: 'testGet',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 10 },
                { duration: '20s', target: 0 },
            ],
            gracefulRampDown: '0s',
        },
        test2: {
            executor: 'ramping-vus',
            exec: 'testPost',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 10 },
                { duration: '20s', target: 0 },
            ],
            gracefulRampDown: '0s',
        },
    },
};

export function testGet() {
    test1();
    sleep(0.5);
}

export function testPost() {
    test2();
    sleep(0.5);
}

export function handleSummary(data) {
    const reportPath = `./reports/k6_report.json`;
    const reportDir = './reports';
    

    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true }),
        [reportPath]: JSON.stringify(data, null, 2),
    }
}   
