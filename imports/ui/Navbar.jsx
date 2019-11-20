import React, {Component} from 'react';
import  i18n from '/imports/utils/i18n'
import { withNamespaces } from 'react-i18next';

export default class Navbar extends Component{
    changeLanguage(lng){
        i18n.changeLanguage(lng).then(r => console.log('language changed'));
    }

    renderLanguagePanel(){
        return (
            <div>
                <button onClick={() => this.changeLanguage('ee')}>EE</button>
                <button onClick={() => this.changeLanguage('en')}>EN</button>
                <button onClick={() => this.changeLanguage('eu')}>RU</button>
            </div>
        )
    }

    render() {
        return (
            this.renderLanguagePanel()
        )
    }
}
