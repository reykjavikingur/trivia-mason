const LS_KEY = "playerScores";

export function getPlayerScores() {
    const string = window.localStorage.getItem(LS_KEY);
    const data = JSON.parse(string);
    return data;
}

export function setPlayerScores(data) {
    const string = JSON.stringify(data);
    window.localStorage.setItem(LS_KEY, string);
}
