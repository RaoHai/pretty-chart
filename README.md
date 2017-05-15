# pretty-chat
---

A well designed chart base on G2;

## Screenshots

<img src="https://zos.alipayobjects.com/rmsportal/nnoenIjtYvNfyVFEbYCc.png" />
<img src="https://zos.alipayobjects.com/rmsportal/UsxPWkOfjQmxcfnFamTm.png" />

## Development

```
npm install
npm start
```

## Example

http://localhost:8001/examples/


online example: http://react-component.github.io/deer-card/


## Feature

* support ie8,ie8+,chrome,firefox,safari


## install


[![pretty-chart](https://nodei.co/npm/pretty-chart.png)](https://npmjs.org/package/pretty-chart)


## Usage

```js
var DeerCard = require('pretty-chart');
var React = require('react');
React.render(<DeerCard />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
    </tbody>
</table>


## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

pretty-chart is released under the MIT license.
