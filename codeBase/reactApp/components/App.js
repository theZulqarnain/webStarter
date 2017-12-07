import React from 'react';
import Header from '../containers/Header'
import Home from '../containers/Home'
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