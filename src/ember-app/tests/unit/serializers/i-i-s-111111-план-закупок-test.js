import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-111111-план-закупок', 'Unit | Serializer | i-i-s-111111-план-закупок', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-111111-план-закупок',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-111111-сост-оплаты',
    'transform:i-i-s-111111-сост-отгрузки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
