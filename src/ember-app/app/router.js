import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-111111-единицы-измер-l');
  this.route('i-i-s-111111-единицы-измер-e',
  { path: 'i-i-s-111111-единицы-измер-e/:id' });
  this.route('i-i-s-111111-единицы-измер-e.new',
  { path: 'i-i-s-111111-единицы-измер-e/new' });
  this.route('i-i-s-111111-заказ-пост-l');
  this.route('i-i-s-111111-заказ-пост-e',
  { path: 'i-i-s-111111-заказ-пост-e/:id' });
  this.route('i-i-s-111111-заказ-пост-e.new',
  { path: 'i-i-s-111111-заказ-пост-e/new' });
  this.route('i-i-s-111111-контрагенты-l');
  this.route('i-i-s-111111-контрагенты-e',
  { path: 'i-i-s-111111-контрагенты-e/:id' });
  this.route('i-i-s-111111-контрагенты-e.new',
  { path: 'i-i-s-111111-контрагенты-e/new' });
  this.route('i-i-s-111111-номенклатура-l');
  this.route('i-i-s-111111-номенклатура-e',
  { path: 'i-i-s-111111-номенклатура-e/:id' });
  this.route('i-i-s-111111-номенклатура-e.new',
  { path: 'i-i-s-111111-номенклатура-e/new' });
  this.route('i-i-s-111111-организации-l');
  this.route('i-i-s-111111-организации-e',
  { path: 'i-i-s-111111-организации-e/:id' });
  this.route('i-i-s-111111-организации-e.new',
  { path: 'i-i-s-111111-организации-e/new' });
  this.route('i-i-s-111111-отчет-о-зак-l');
  this.route('i-i-s-111111-отчет-о-зак-e',
  { path: 'i-i-s-111111-отчет-о-зак-e/:id' });
  this.route('i-i-s-111111-отчет-о-зак-e.new',
  { path: 'i-i-s-111111-отчет-о-зак-e/new' });
  this.route('i-i-s-111111-план-закупок-l');
  this.route('i-i-s-111111-план-закупок-e',
  { path: 'i-i-s-111111-план-закупок-e/:id' });
  this.route('i-i-s-111111-план-закупок-e.new',
  { path: 'i-i-s-111111-план-закупок-e/new' });
  this.route('i-i-s-111111-склады-l');
  this.route('i-i-s-111111-склады-e',
  { path: 'i-i-s-111111-склады-e/:id' });
  this.route('i-i-s-111111-склады-e.new',
  { path: 'i-i-s-111111-склады-e/new' });
});

export default Router;
