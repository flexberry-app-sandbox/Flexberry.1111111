import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.111111.caption'),
          title: i18n.t('forms.application.sitemap.111111.title'),
          children: [{
            link: 'i-i-s-111111-отчет-о-зак-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-отчет-о-зак-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-отчет-о-зак-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-111111-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-заказ-пост-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-111111-организации-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-организации-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-111111-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-единицы-измер-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-111111-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-план-закупок-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-111111-склады-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-склады-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-111111-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-номенклатура-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-111111-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.111111.i-i-s-111111-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.111111.i-i-s-111111-контрагенты-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})