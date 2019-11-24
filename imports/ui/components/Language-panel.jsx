import * as React from "react";
import i18n from "../../utils/i18n";
import {Button, ButtonGroup} from "react-bootstrap";
import {withNamespaces} from "react-i18next";

export class LanguagePanel extends React.Component {
    languages = {
        en: 'en',
        ru: 'ru',
        ee: 'ee'
    };

    changeLanguage(lng) {
        i18n.changeLanguage(lng).then(() => console.log('language changed'));
    }

    currentLang() {
        return i18n.language;
    }

    renderLanguagePanel() {
        const variant = 'outline-dark';

        return (
            <ButtonGroup size={'sm'} className={'ml-auto lang-panel'}>
                <Button active={this.currentLang() === this.languages.ee} variant={variant} className={''}
                        onClick={() => this.changeLanguage('ee')}>{this.props.t('lang_short_ee')}</Button>
                <Button active={this.currentLang() === this.languages.en} variant={variant} className={''}
                        onClick={() => this.changeLanguage('en')}>{this.props.t('lang_short_en')}</Button>
                <Button active={this.currentLang() === this.languages.ru} variant={variant} className={''}
                        onClick={() => this.changeLanguage('ru')}>{this.props.t('lang_short_ru')}</Button>
            </ButtonGroup>
        )
    }

    render() {
        return this.renderLanguagePanel();
    }
}

export default withNamespaces()(LanguagePanel);