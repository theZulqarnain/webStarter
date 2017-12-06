import React from 'react';
import Header from '../Header'
import Home from '../Home'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <Home/>
            </div>
        );
    }
}
/*const App =() =>{
    <div>
        <Home/>
    </div>
}*/
export default App;