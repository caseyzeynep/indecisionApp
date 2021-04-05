
let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const appRoot = document.getElementById('app');
    const element = (
        <div>
            <h1>Visible Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {
                visibility && (
                    <div>
                       <p>Here are some details you can see</p> 
                    </div>
                )
            }
        </div>
        
        );
    
    ReactDOM.render(element, appRoot);
};


render();
