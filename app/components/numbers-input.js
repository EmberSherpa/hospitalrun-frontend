import Ember from 'ember';
import HtmlInput from 'ember-rapid-forms/components/html-input';
export default HtmlInput.extend({
  init() {
    this.setProperties({
      value: '',
      numberValue: ''
    });
    this._super(...arguments);
  },

  didReceiveAttrs(/*attrs*/) {
    this._super(...arguments);
    this.numberValue = Ember.computed.alias('mainComponent.numberValue');
  },

  didInsertElement: function() {
    let numberValue = this.get('numberValue');
    numberValue = numberValue.replace(/\,/g, '');
    numberValue = parseInt(numberValue, 10);
    this.set('numberValue', numberValue);
  }

  // actions: {
  //   setNumberValue(value) {
  //     let numberValue = value;
  //     numberValue = numberValue.replace(/\,/g, '');
  //     numberValue = parseInt(numberValue, 10);
  //     this.set('numberValue', numberValue);
  //   }
  // }
});
