export function getData() {
    let countries = ['US', 'Germany', 'UK', 'Japan'], data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            id: i,
            country: countries[i % countries.length],
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000,
            overdue: i % 4 == 0
        });
    }
    return data;
}
