import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3>Your Options</h3>
                <button className="widget-header__title" 
                onClick={props.handleDeleteOptions}
                className="button button--link">Remove All</button>
            </div>
            
            {props.options.length === 0 && <p className="widget__message">Please add an option to start!</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            
        </div>
    );

export default Options;