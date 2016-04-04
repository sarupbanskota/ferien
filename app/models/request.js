import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('date'),
  to: DS.attr('date'),
  notes: DS.attr('string'),
  employee: DS.belongsTo('employee')
});
