import React from 'react';
import ReactDOM from 'react-dom';
import translations from './translations'
import { IntlProvider ,IntlActions} from 'react-redux-multilingual'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducer'
// let reducers = combineReducers(Object.assign({},{Intl}))
let store = createStore(rootReducer,{ Intl: { locale: 'vn'}})
const onChangeLanguage=typeLan=> {
    store.dispatch(IntlActions.setLocale(typeLan))
}
ReactDOM.render(
    <Provider store={store}>
        <IntlProvider translations={translations} >
            <App onChangeLanguage={onChangeLanguage}/>
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
)


// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
