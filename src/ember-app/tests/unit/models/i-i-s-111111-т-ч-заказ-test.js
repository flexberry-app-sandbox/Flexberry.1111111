import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-111111-т-ч-заказ', 'Unit | Model | i-i-s-111111-т-ч-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-111111-единицы-измер',
    'model:i-i-s-111111-заказ-пост',
    'model:i-i-s-111111-контрагенты',
    'model:i-i-s-111111-номенклатура',
    'model:i-i-s-111111-организации',
    'model:i-i-s-111111-отчет-о-зак',
    'model:i-i-s-111111-план-закупок',
    'model:i-i-s-111111-план',
    'model:i-i-s-111111-склады',
    'model:i-i-s-111111-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
