import { createElement } from 'lwc';
import MyApp from 'my/app';
import '@lwc/synthetic-shadow';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
