export function fetchCategories() {
    return fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(r => r.trivia_categories)
    ;
}
