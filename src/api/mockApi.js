import { sampleData } from "./sampleData";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function fetchSampleData() {
    return delay(1000).then(() => {
        return Promise.resolve(sampleData)
    })
}