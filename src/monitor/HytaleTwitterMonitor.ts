import { getAllRules, streamConnect } from "../utils/twitter/TwitterStream";
import { StreamRules } from "../utils/twitter/StreamRules";


function startTwitterMonitor() {
    const twitterStreamAttempts: number = parseInt(process.env.TWITTER_STREAM_ATTEMPTS!);

    streamConnect(twitterStreamAttempts);
}

async function manageStreamRules() {
    let rules: StreamRules[] = [];
    let response = await getAllRules();

    for (let rule in response.data) {
        let ruleData = response.data[rule];
        console.log(rule);
    }

}

export {
    startTwitterMonitor,
    manageStreamRules
}


