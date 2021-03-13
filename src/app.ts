import { streamConnect, getAllRules, deleteAllRules, setRules } from "./monitor/twitter-stream";
require("dotenv").config();

(async () => {
    let currentRules;
    let hytaleMedia: boolean = false;

    try {
        // Gets the complete list of rules currently applied to the stream.
        currentRules = await getAllRules();

        // Check if the rule already exist.
        for (let data of currentRules["data"]) {
            if (data.id.toLowerCase(`Hytale media`)) hytaleMedia = true;

            if (!hytaleMedia) {
                // Delete all rules. Comment the line below if you want to keep your existing rules.
                await deleteAllRules(currentRules);

                // Add rules to the stream. Comment the line below if you don't want to add new rules.
                await setRules();
            }
        }

    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    console.log("Starting stream connect.")

    // Listen to the stream.
    streamConnect(3);
})();