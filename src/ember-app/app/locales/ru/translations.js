import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS111111ЕдиницыИзмерLForm from './forms/i-i-s-111111-единицы-измер-l';
import IIS111111ЗаказПостLForm from './forms/i-i-s-111111-заказ-пост-l';
import IIS111111КонтрагентыLForm from './forms/i-i-s-111111-контрагенты-l';
import IIS111111НоменклатураLForm from './forms/i-i-s-111111-номенклатура-l';
import IIS111111ОрганизацииLForm from './forms/i-i-s-111111-организации-l';
import IIS111111ОтчетОЗакLForm from './forms/i-i-s-111111-отчет-о-зак-l';
import IIS111111ПланЗакупокLForm from './forms/i-i-s-111111-план-закупок-l';
import IIS111111СкладыLForm from './forms/i-i-s-111111-склады-l';
import IIS111111ЕдиницыИзмерEForm from './forms/i-i-s-111111-единицы-измер-e';
import IIS111111ЗаказПостEForm from './forms/i-i-s-111111-заказ-пост-e';
import IIS111111КонтрагентыEForm from './forms/i-i-s-111111-контрагенты-e';
import IIS111111НоменклатураEForm from './forms/i-i-s-111111-номенклатура-e';
import IIS111111ОрганизацииEForm from './forms/i-i-s-111111-организации-e';
import IIS111111ОтчетОЗакEForm from './forms/i-i-s-111111-отчет-о-зак-e';
import IIS111111ПланЗакупокEForm from './forms/i-i-s-111111-план-закупок-e';
import IIS111111СкладыEForm from './forms/i-i-s-111111-склады-e';
import IIS111111ЕдиницыИзмерModel from './models/i-i-s-111111-единицы-измер';
import IIS111111ЗаказПостModel from './models/i-i-s-111111-заказ-пост';
import IIS111111КонтрагентыModel from './models/i-i-s-111111-контрагенты';
import IIS111111НоменклатураModel from './models/i-i-s-111111-номенклатура';
import IIS111111ОрганизацииModel from './models/i-i-s-111111-организации';
import IIS111111ОтчетОЗакModel from './models/i-i-s-111111-отчет-о-зак';
import IIS111111ПланЗакупокModel from './models/i-i-s-111111-план-закупок';
import IIS111111ПланModel from './models/i-i-s-111111-план';
import IIS111111СкладыModel from './models/i-i-s-111111-склады';
import IIS111111ТЧЗаказModel from './models/i-i-s-111111-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-111111-единицы-измер': IIS111111ЕдиницыИзмерModel,
    'i-i-s-111111-заказ-пост': IIS111111ЗаказПостModel,
    'i-i-s-111111-контрагенты': IIS111111КонтрагентыModel,
    'i-i-s-111111-номенклатура': IIS111111НоменклатураModel,
    'i-i-s-111111-организации': IIS111111ОрганизацииModel,
    'i-i-s-111111-отчет-о-зак': IIS111111ОтчетОЗакModel,
    'i-i-s-111111-план-закупок': IIS111111ПланЗакупокModel,
    'i-i-s-111111-план': IIS111111ПланModel,
    'i-i-s-111111-склады': IIS111111СкладыModel,
    'i-i-s-111111-т-ч-заказ': IIS111111ТЧЗаказModel
  },

  'application-name': '111111',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '111111',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '111111',
          title: '111111'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        111111: {
          caption: '111111',
          title: '111111',
          'i-i-s-111111-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-111111-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-111111-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-111111-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-111111-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-111111-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-111111-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-111111-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-111111-единицы-измер-l': IIS111111ЕдиницыИзмерLForm,
    'i-i-s-111111-заказ-пост-l': IIS111111ЗаказПостLForm,
    'i-i-s-111111-контрагенты-l': IIS111111КонтрагентыLForm,
    'i-i-s-111111-номенклатура-l': IIS111111НоменклатураLForm,
    'i-i-s-111111-организации-l': IIS111111ОрганизацииLForm,
    'i-i-s-111111-отчет-о-зак-l': IIS111111ОтчетОЗакLForm,
    'i-i-s-111111-план-закупок-l': IIS111111ПланЗакупокLForm,
    'i-i-s-111111-склады-l': IIS111111СкладыLForm,
    'i-i-s-111111-единицы-измер-e': IIS111111ЕдиницыИзмерEForm,
    'i-i-s-111111-заказ-пост-e': IIS111111ЗаказПостEForm,
    'i-i-s-111111-контрагенты-e': IIS111111КонтрагентыEForm,
    'i-i-s-111111-номенклатура-e': IIS111111НоменклатураEForm,
    'i-i-s-111111-организации-e': IIS111111ОрганизацииEForm,
    'i-i-s-111111-отчет-о-зак-e': IIS111111ОтчетОЗакEForm,
    'i-i-s-111111-план-закупок-e': IIS111111ПланЗакупокEForm,
    'i-i-s-111111-склады-e': IIS111111СкладыEForm
  },

});

export default translations;
