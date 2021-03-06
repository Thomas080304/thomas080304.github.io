import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { getCountries } from './data';
document.readyState === 'complete' ? init() : window.onload = init;
function init() {
    // create some random data
    var data = [];
    for (var i = 0; i < 100; i++) {
        data.push({
            id: i,
            countries: getCountries(),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }
    // show the data in a grid with autoRowHeights
    new FlexGrid('#theGrid', {
        autoRowHeights: true,
        autoGenerateColumns: false,
        columns: [
            { binding: 'id', header: 'ID', width: 60, isReadOnly: true },
            { binding: 'countries', header: 'Countries', width: '*', wordWrap: true },
            { binding: 'sales', header: 'Sales' },
            { binding: 'expenses', header: 'Expenses' }
        ],
        itemsSource: data
    });
}
