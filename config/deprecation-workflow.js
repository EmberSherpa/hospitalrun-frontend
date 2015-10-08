window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "Ember.Handlebars.helper is deprecated, please refactor to Ember.Helper.helper" },
    { handler: "silence", matchMessage: "`Ember.Handlebars.makeViewHelper` and `Ember.HTMLBars.makeViewHelper` are deprecated. Please refactor to normal component usage." },
    { handler: "silence", matchMessage: "the component:nav-menu test module is implicitly running in unit test mode, which will change to integration test mode by default in an upcoming version of ember-test-helpers. Add `unit: true` or a `needs:[]` list to explicitly opt in to unit test mode." },
    { handler: "silence", matchMessage: "Using Ember.HTMLBars._registerHelper is deprecated. Helpers (even dashless ones) are automatically resolved." },
    { handler: "silence", matchMessage: "Ember.LinkView is deprecated. Please use Ember.LinkComponent." },
    { handler: "silence", matchMessage: "`lookup` was called on a Registry. The `initializer` API no longer receives a container, and you should use an `instanceInitializer` to look up objects from the container." },
    { handler: "silence", matchMessage: "Controller#needs is deprecated, please use Ember.inject.controller() instead" },
    { handler: "silence", matchMessage: "Using store.find(type) has been deprecated. Use store.findAll(type) to retrieve all records for a given type." },
    { handler: "silence", matchMessage: "The default behavior of shouldReloadAll will change in Ember Data 2.0 to always return false when there is at least one \"price-profile\" record in the store. If you would like to preserve the current behavior please override shouldReloadAll in your adapter:application and return true." },
    { handler: "silence", matchMessage: "Ember.View is deprecated. Consult the Deprecations Guide for a migration strategy." },
    { handler: "silence", matchMessage: "Ember.keys is deprecated in favor of Object.keys" },
    { handler: "silence", matchMessage: "Your custom serializer uses the old version of the Serializer API, with `extract` hooks. Please upgrade your serializers to the new Serializer API using `normalizeResponse` hooks instead." },
    { handler: "silence", matchMessage: "Calling store.find() with a query object is deprecated. Use store.query() instead." },
    { handler: "silence", matchMessage: "RestAdapter#findQuery has been deprecated and renamed to `query`." },
    { handler: "silence", matchMessage: "`Ember.ArrayController` is deprecated." },
    { handler: "silence", matchMessage: "Using the context switching form of {{each}} is deprecated. Please use the keyword form (`{{#each items as |item|}}`) instead." },
    { handler: "silence", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('reportRows.@each', function() {});` to `Ember.computed('reportRows.[]', function() {})`." },
    { handler: "silence", matchMessage: "store.push(type, data) has been deprecated. Please provide a JSON-API document object as the first and only argument to store.push." },
    { handler: "silence", matchMessage: "You tried to look up 'store:main', but this has been deprecated in favor of 'service:store'." },
    { handler: "silence", matchMessage: "Using store.getById() has been deprecated. Use store.peekRecord to get a record by a given type and ID without triggering a fetch." },
    { handler: "silence", matchMessage: "DS.Model#isDirty has been deprecated please use hasDirtyAttributes instead" },
    { handler: "silence", matchMessage: "Ember.ObjectController is deprecated, please use Ember.Controller and use `model.propertyName`." },
    { handler: "silence", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('additionalDiagnosis@each', function() {});` to `Ember.computed('additionalDiagnosi.[]', function() {})`." },
    { handler: "silence", matchMessage: "Usage of `submit_button` is deprecated, use `submitButton` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isNew` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.isNew` instead." },
    { handler: "silence", matchMessage: "You attempted to access `errors` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.errors` instead." },
    { handler: "silence", matchMessage: "You attempted to access `friendlyId` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.friendlyId` instead." },
    { handler: "silence", matchMessage: "You attempted to access `firstName` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.firstName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `middleName` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.middleName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `lastName` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.lastName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `gender` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.gender` instead." },
    { handler: "silence", matchMessage: "You attempted to access `dateOfBirth` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.dateOfBirth` instead." },
    { handler: "silence", matchMessage: "You attempted to access `display_dateOfBirth` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.display_dateOfBirth` instead." },
    { handler: "silence", matchMessage: "You attempted to access `age` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.age` instead." },
    { handler: "silence", matchMessage: "You attempted to access `placeOfBirth` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.placeOfBirth` instead." },
    { handler: "silence", matchMessage: "You attempted to access `patientType` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.patientType` instead." },
    { handler: "silence", matchMessage: "You attempted to access `status` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.status` instead." },
    { handler: "silence", matchMessage: "You attempted to access `externalPatientId` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.externalPatientId` instead." },
    { handler: "silence", matchMessage: "You attempted to access `bloodType` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.bloodType` instead." },
    { handler: "silence", matchMessage: "ember-get-helper has been included in Ember 2.0. Use of this package is deprecated." },
    { handler: "silence", matchMessage: "You attempted to access `clinic` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.clinic` instead." },
    { handler: "silence", matchMessage: "You attempted to access `referredBy` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.referredBy` instead." },
    { handler: "silence", matchMessage: "You attempted to access `referredDate` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.referredDate` instead." },
    { handler: "silence", matchMessage: "You attempted to access `display_referredDate` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.display_referredDate` instead." },
    { handler: "silence", matchMessage: "You attempted to access `religion` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.religion` instead." },
    { handler: "silence", matchMessage: "You attempted to access `parent` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.parent` instead." },
    { handler: "silence", matchMessage: "You attempted to access `paymentProfile` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.paymentProfile` instead." },
    { handler: "silence", matchMessage: "You attempted to access `phone` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.phone` instead." },
    { handler: "silence", matchMessage: "You attempted to access `email` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.email` instead." },
    { handler: "silence", matchMessage: "You attempted to access `address` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.address` instead." },
    { handler: "silence", matchMessage: "You attempted to access `country` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.country` instead." },
    { handler: "silence", matchMessage: "You attempted to access `additionalContacts` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.additionalContacts` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isValid` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.isValid` instead." },
    { handler: "silence", matchMessage: "You attempted to access `hideCancelButton` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.hideCancelButton` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isDirty` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.isDirty` instead." },
    { handler: "silence", matchMessage: "You attempted to access `additionalButtons` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.additionalButtons` instead." },
    { handler: "silence", matchMessage: "You attempted to set `dateOfBirth` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.dateOfBirth` instead." },
    { handler: "silence", matchMessage: "A property of <hospitalrun@view:-outlet::ember611> was modified inside the didInsertElement hook. You should never change properties on components, services or models during didInsertElement because it causes significant performance degradation." },
    { handler: "silence", matchMessage: "You attempted to set `referredDate` from `<hospitalrun@controller:patients/edit::ember1079>`, but object proxying is deprecated. Please use `model.referredDate` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isNew` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.isNew` instead." },
    { handler: "silence", matchMessage: "You attempted to access `errors` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.errors` instead." },
    { handler: "silence", matchMessage: "You attempted to access `friendlyId` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.friendlyId` instead." },
    { handler: "silence", matchMessage: "You attempted to access `firstName` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.firstName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `middleName` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.middleName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `lastName` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.lastName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `gender` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.gender` instead." },
    { handler: "silence", matchMessage: "You attempted to access `dateOfBirth` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.dateOfBirth` instead." },
    { handler: "silence", matchMessage: "You attempted to access `display_dateOfBirth` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.display_dateOfBirth` instead." },
    { handler: "silence", matchMessage: "You attempted to access `age` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.age` instead." },
    { handler: "silence", matchMessage: "You attempted to access `placeOfBirth` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.placeOfBirth` instead." },
    { handler: "silence", matchMessage: "You attempted to access `patientType` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.patientType` instead." },
    { handler: "silence", matchMessage: "You attempted to access `status` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.status` instead." },
    { handler: "silence", matchMessage: "You attempted to access `externalPatientId` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.externalPatientId` instead." },
    { handler: "silence", matchMessage: "You attempted to access `bloodType` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.bloodType` instead." },
    { handler: "silence", matchMessage: "You attempted to access `clinic` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.clinic` instead." },
    { handler: "silence", matchMessage: "You attempted to access `referredBy` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.referredBy` instead." },
    { handler: "silence", matchMessage: "You attempted to access `referredDate` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.referredDate` instead." },
    { handler: "silence", matchMessage: "You attempted to access `display_referredDate` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.display_referredDate` instead." },
    { handler: "silence", matchMessage: "You attempted to access `religion` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.religion` instead." },
    { handler: "silence", matchMessage: "You attempted to access `parent` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.parent` instead." },
    { handler: "silence", matchMessage: "You attempted to access `paymentProfile` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.paymentProfile` instead." },
    { handler: "silence", matchMessage: "You attempted to access `phone` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.phone` instead." },
    { handler: "silence", matchMessage: "You attempted to access `email` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.email` instead." },
    { handler: "silence", matchMessage: "You attempted to access `address` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.address` instead." },
    { handler: "silence", matchMessage: "You attempted to access `country` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.country` instead." },
    { handler: "silence", matchMessage: "You attempted to access `additionalContacts` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.additionalContacts` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isValid` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.isValid` instead." },
    { handler: "silence", matchMessage: "You attempted to access `hideCancelButton` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.hideCancelButton` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isDirty` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.isDirty` instead." },
    { handler: "silence", matchMessage: "You attempted to access `additionalButtons` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.additionalButtons` instead." },
    { handler: "silence", matchMessage: "You attempted to set `dateOfBirth` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.dateOfBirth` instead." },
    { handler: "silence", matchMessage: "A property of <hospitalrun@view:-outlet::ember1559> was modified inside the didInsertElement hook. You should never change properties on components, services or models during didInsertElement because it causes significant performance degradation." },
    { handler: "silence", matchMessage: "You attempted to set `referredDate` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.referredDate` instead." },
    { handler: "silence", matchMessage: "You attempted to set `firstName` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.firstName` instead." },
    { handler: "silence", matchMessage: "You attempted to set `lastName` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.lastName` instead." },
    { handler: "silence", matchMessage: "You attempted to access `isDeleted` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.isDeleted` instead." },
    { handler: "silence", matchMessage: "Depending on arrays using a dependent key ending with `@each` is deprecated. Please refactor from `Ember.computed('visits.@each', function() {});` to `Ember.computed('visits.[]', function() {})`." },
    { handler: "silence", matchMessage: "You attempted to access `visits` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.visits` instead." },
    { handler: "silence", matchMessage: "You attempted to access `familyInfo` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.familyInfo` instead." },
    { handler: "silence", matchMessage: "You attempted to access `expenses` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.expenses` instead." },
    { handler: "silence", matchMessage: "You attempted to access `livingArrangement` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.livingArrangement` instead." },
    { handler: "silence", matchMessage: "You attempted to access `familySupport1` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.familySupport1` instead." },
    { handler: "silence", matchMessage: "You attempted to access `familySupport2` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.familySupport2` instead." },
    { handler: "silence", matchMessage: "You attempted to access `familySupport3` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.familySupport3` instead." },
    { handler: "silence", matchMessage: "You attempted to access `familySupport4` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.familySupport4` instead." },
    { handler: "silence", matchMessage: "You attempted to access `familySupport5` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.familySupport5` instead." },
    { handler: "silence", matchMessage: "You attempted to access `notes` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.notes` instead." },
    { handler: "silence", matchMessage: "You attempted to access `socialRecommendation` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.socialRecommendation` instead." },
    { handler: "silence", matchMessage: "You attempted to access `socialActionTaken` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.socialActionTaken` instead." },
    { handler: "silence", matchMessage: "You attempted to access `insurance` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.insurance` instead." },
    { handler: "silence", matchMessage: "You attempted to access `economicClassification` from `<hospitalrun@controller:patients/edit::ember1756>`, but object proxying is deprecated. Please use `model.economicClassification` instead." },
    { handler: "silence", matchMessage: "You attempted to access `hideCancelButton` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.hideCancelButton` instead." },
    { handler: "silence", matchMessage: "You attempted to access `hideUpdateButton` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.hideUpdateButton` instead." },
    { handler: "silence", matchMessage: "You attempted to access `title` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.title` instead." },
    { handler: "silence", matchMessage: "You attempted to access `updateButtonAction` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.updateButtonAction` instead." },
    { handler: "silence", matchMessage: "You attempted to access `updateButtonText` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.updateButtonText` instead." },
    { handler: "silence", matchMessage: "You attempted to access `showProgress` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.showProgress` instead." },
    { handler: "silence", matchMessage: "You attempted to access `message` from `<hospitalrun@controller:dialog::ember2289>`, but object proxying is deprecated. Please use `model.message` instead." }
  ]
};
