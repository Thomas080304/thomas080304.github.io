export function getData() {
    var countries = 'US,UK,Germany,France,Italy,Japan,China'.split(','), data = [];
    for (var i = 0; i < countries.length; i++) {
        data.push({
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }
    return data;
}
