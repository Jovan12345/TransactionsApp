import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import MakeTransfer from './makeTransactions/MakeTransfer';
import RecentTransactions from './recentTransactions/RecentTransactions';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <MakeTransfer />
                        </div>
                        <div className="col">
                            <RecentTransactions />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;