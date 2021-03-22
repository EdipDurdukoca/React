import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./CardsInfo"
import Header from "./Header"
import Collapse from "./Collapse"

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="card-group" >
            <div className="col" >
              <Collapse href="itemTest1">
                <Card title="Resurrection" desc="Bu 1. Şarkı" image="https://picsum.photos/id/1/200/200" />
              </Collapse>
            </div>
            <div className="col">
              <Collapse href="itemTest2">
                <Card title="Jack The Ripper" desc="Bu 2. Şarkı" image="https://picsum.photos/id/12/200/200" />
              </Collapse>
            </div>
            <div className="col">
              <Collapse href="itemTest3">
                <Card title="Freak Show" desc="Bu 3. Şarkı" image="https://picsum.photos/id/1002/200/200" />
              </Collapse>
            </div>
          </div>

        </div>






      </div>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);