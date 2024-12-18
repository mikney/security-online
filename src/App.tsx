import './App.css';
import { mockData } from './mock-data.ts';
import Card from './components/Card/Card.tsx';

function App() {
    return (
        <div className={'wrapper'}>
            {mockData.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
}

export default App;
