exports.handler = function (context, event, callback) {
    let memory = JSON.parse(event.Memory);
    let respObj = {};
    //get answer from Memory
    let q1 = mempory.twilio.collected_data.what_programming_language_are_you.answers.q1.answer;
    let q2 = mempory.twilio.collected_data.what_programming_language_are_you.answers.q2.answer;
    let q3 = mempory.twilio.collected_data.what_programming_language_are_you.answers.q3.answer;
    const result = Object.entries(
        [q1, q2, q3].reduce((previous, current) => {
            if (previous[current] === undefined) previous[current] = 1;
            else previous[current]++;
            return previous;
        }, {})).reduce((previous, current) => (current[1] >= previous[1] ? current : previous))[0];

    var msg = '';
    if (result == 'a') {
        msg = "You are like Swift. You're new and hip with the times."
    }
    else if (result == 'b') {
        msg = "You are like Python. You adapt to different situations and are smart and concise."
    }
    else {
        msg = "You are like C#. You've been around the block a few times, but get the job done and pass on knowledge to others."
    }
    respObj = {
        "actions": [
            {
                "say": msg
            }]
    };
    callback(null, respObj);
};