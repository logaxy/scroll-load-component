scroll-load-component
===============================
基于IntersectionObserver实现的React滚动加载组件

## Installation

```bash
$ npm i --save scroll-load-component
```


## Usage

```javascript
import React from 'react'
import ScrollLoadComponent from 'scroll-load-component'

class MyComponent extends React.Component {
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh', textAlign: 'center', overflow: 'auto' }} id="myComponent">
                {
                    Array(100).fill(1).map((v, i) =>
                        <ScrollLoadComponent
                            root={document.getElementById('myComponent')}
                            loading={<div style={{ height: '500px' }}>loading</div>}>
                            <div>
                                <img width={400} height={400} alt="img" src={"https://api.dujin.org/bing/1920.php"}></img>
                            </div>
                        </ScrollLoadComponent>)
                }
            </div>
        )
    }
}

export default MyComponent

```

## Props

| Prop | Type | Need | Description |
|:---|:---|:---|:---|
| root | `Element` | yes | The Element or Document whose bounds are used as the bounding box when testing for intersection. If no root value was passed to the constructor or its value is null, the top-level document's viewport is used. |
| rootMargin | `string` | no | An offset rectangle applied to the root's bounding box when calculating intersections, effectively shrinking or growing the root for calculation purposes. The value returned by this property may not be the same as the one specified when calling the constructor as it may be changed to match internal requirements. Each offset can be expressed in pixels (px) or as a percentage (%). The default is "0px 0px 50% 0px". |
| threshold | `number` | no | A list of thresholds, sorted in increasing numeric order, where each threshold is a ratio of intersection area to bounding box area of an observed target. Notifications for a target are generated when any of the thresholds are crossed for that target. If no value was passed to the constructor, 0 is used. |
| children | `JSX.Element` | yes | Children Dom. |
| loading | `JSX.Element、React.ReactNode` | no | Loading Dom. It is best to set a fixed height for it. The default is `<p>loading...</p>`. |
