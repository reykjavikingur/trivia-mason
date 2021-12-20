const querystring = require('query-string');

/**
 * Fetches challenges from Open Trivia Database
 * via base URL https://opentdb.com/api.php
 * and query string parameters:
 *
 * amount (default 10)
 * category (integer id from categories API response)
 * difficulty (easy, medium, hard)
 * type (multiple, boolean)
 *
 * @param options {amount: int, category: int?, difficult: string?, type: string?}
 * @returns {Promise<Array<TriviaChallenge>>}
 */
export function fetchChallenges(options = {}) {
    const queryObject = {};
    const defaultAmount = 10;

    // validate amount
    queryObject.amount = parseInt(options.amount) || defaultAmount;

    // validate category
    if (options.category) {
        queryObject.category = options.category;
    }

    // validate difficulty
    if (options.difficulty) {
        queryObject.difficulty = options.difficulty;
    }

    // validate type
    if (options.type) {
        queryObject.type = options.type;
    }

    // construct query string
    const q = querystring.stringify(queryObject);

    return fetch("https://opentdb.com/api.php?" + q)
        .then(res => res.json())
        .then(r => r.results)
        ;
}
