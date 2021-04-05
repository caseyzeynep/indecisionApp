let count = 0;
const someId = "my-id";

var addOne = function addOne() {
    // console.log('addOne', count);
    count++;
    renderCountApp();
};

var minusOne = function minusOne() {
    // console.log('minusOne', count);
    count--;
    renderCountApp();
};

var reset = function reset() {
    // console.log('reset', count);
    count = 0;
    renderCountApp();
};

var appRoot = document.getElementById('app');

var renderCountApp = function renderCountApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
