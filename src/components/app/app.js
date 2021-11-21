import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css'

function App() {

    const data = [
        {name: 'Максим Иванов', salary: 300, increase: false, id: 1},
        {name: 'Иван Петров', salary: 500, increase: true, id: 2},
        {name: 'Алексей Королёв', salary: 7000, increase: false, id: 3},
    ]

    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;