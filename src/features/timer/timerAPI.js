export async function delay(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
}
