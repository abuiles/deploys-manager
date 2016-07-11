import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  commit: attr('string'),
  author: attr('string'),
  uploadedAt: attr('string'),
  commitMessage: attr('string'),
  active: attr('boolean')
});
