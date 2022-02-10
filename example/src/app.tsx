import React from 'react'
import ScrollLoadComponent from '../../src/index'
// import ScrollLoadComponent from 'scroll-load-component' // for npm link

class App extends React.Component {
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh', textAlign: 'center', overflow: 'auto' }} id="app">
                {
                    Array(100).fill(1).map((v, i) =>
                        <ScrollLoadComponent
                            root={document.getElementById('app')}
                            loading={<div style={{ height: '400px' }}>loading</div>}>
                            <div>
                                <img width={400} height={400} alt="img" src={"https://api.dujin.org/bing/1920.php"}></img>
                            </div>
                        </ScrollLoadComponent>)
                }
            </div>
        )
    }
}

export default App
