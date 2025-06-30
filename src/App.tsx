import './App.css'
import Card, { CardVariant } from './components/Card'

function App() {
    return (
        <>
            <Card onClick={() => console.log('click')} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Кнопочка</button>
                <p>Текст внутри карточки</p>
            </Card>
        </>
    )
}

export default App
