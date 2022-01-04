import {html, classMap} from '../lib.js';

export const spinner = () => html `<p>Loading &hellip;</p>`;

export const field = ({label, name, type = 'text', value='', placeholder = '', erorr}) => {
    if(type == 'textarea') {
        html `
        <label class="ml">${label}: <textarea class=${classMap({erorr})} name=${name}
        placeholder=${placeholder} .value=${value}></textarea></label>
        `
    } else {
        return html `
        <label>${label}: <input class=${classMap({erorr})} type=${type} name=${name} placeholder=${placeholder}></label>
        `
    }  
};
