import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'hospitalrun/tests/helpers/start-app';

module('Acceptance | inventory', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /inventory', function(assert) {
  setupServer();
  visit('/inventory');

  andThen(function() {
    assert.equal(currentURL(), '/inventory');
  });

  return new Promise(function(resolve, reject) {});
});

function setupServer() {
  server.logging = true;
  server.post('/checkuser', function(){
    return {"prefix":"p1","role":"System Administrator"};
  });
  server.get('/db/config', function() {
    return {"db_name":"config","doc_count":0,"doc_del_count":0,"update_seq":1,"purge_seq":0,"compact_running":false,"disk_size":4171,"data_size":0,"instance_start_time":"1441892856209024","disk_format_version":6,"committed_update_seq":1};
  });
  server.get('/db/config/_changes', function(){
    return {"results":[], "last_seq":0};
  });
  server.get('/db/_session', function() {
    return {"ok":true,"name":"hradmin","roles":["System Administrator","admin","user"]};
  });
  server.get('/db', function(){
    return {"couchdb":"Welcome","uuid":"60273b80d34b7a38f8649f107ad1950f","version":"1.6.1","vendor":{"version":"1.6.1-1","name":"Homebrew"}};
  });
  server.get('/db/main', function(){
    return {"db_name":"main","doc_count":21,"doc_del_count":0,"update_seq":22,"purge_seq":0,"compact_running":false,"disk_size":41060,"data_size":13861,"instance_start_time":"1441892856233575","disk_format_version":6,"committed_update_seq":22};
  });
  server.get('/db/main/_design/appointments_by_date', function(){
    return {"_id":"_design/appointments_by_date","_rev":"1-93179f0e38789e9822ff8ae9d2459ef7","version":3,"lists":{"sort":"function(head, req) {function keysEqual(keyA, keyB) {for (var i= 0; i < keyA.length; i++) {if (keyA[i] !== keyB[i]) {return false;}}return true;}function getCompareDate(dateString) {if (!dateString || dateString === \"\") {return 0;}return new Date(dateString).getTime();}function compareStrings(aString, bString) {if (!aString) {aString = \"\";}if (!bString) {bString = \"\";}if (aString < bString) {return -1;} else if (aString > bString) {return 1;} else {return 0;}}var row,rows=[],startingPosition = 0;while(row = getRow()) {rows.push(row);}rows = rows.filter(function (row) {\n            var i, \n                filterBy = null,\n                includeRow = true;\n            if (req.query && req.query.filterBy) {\n                filterBy = JSON.parse(req.query.filterBy);\n            }\n            if (!filterBy) {\n                return true;\n            }\n            for (i=0; i < filterBy.length; i++) {\n                var currentValue = row.doc[filterBy[i].name];\n                if (filterBy[i].name === 'status' && (!currentValue || currentValue === '')) {\n                    currentValue = 'Scheduled';\n                }\n                if (currentValue !== filterBy[i].value) {\n                    includeRow = false;\n                    break;\n                }\n            }\n            return includeRow;\n        });rows.sort(function (a,b) {\n            function defaultStatus(value) {\n                if (!value || value === '') {\n                    return 'Scheduled';\n                } else {\n                    return value;\n                }\n            }\n            var sortBy = '';\n            if (req.query && req.query.sortKey) {\n                sortBy = req.query.sortKey;\n            }\n            switch(sortBy) {\n                case 'appointmentType':\n                case 'location':\n                case 'provider':\n                    return compareStrings(a.doc[sortBy], b.doc[sortBy]);\n                case 'date': {\n                    var startDiff = getCompareDate(a.doc.startDate) -getCompareDate(b.doc.startDate);\n                    if (startDiff === 0) {\n                        return getCompareDate(a.doc.endDate) -getCompareDate(b.doc.endDate);\n                    } else {\n                        return startDiff;\n                    }\n                    break;\n                }\n                case 'status': {\n                    var aStatus = defaultStatus(a.doc[sortBy]),\n                        bStatus = defaultStatus(b.doc[sortBy]);\n                    return compareStrings(aStatus, bStatus);\n                }\n                default: {\n                    return 0; //Don't sort\n                }\n            }\n        });if (req.query.sortStartKey) {var startKey = JSON.parse(req.query.sortStartKey);for (var i=0; i<rows.length; i++) {if (keysEqual(startKey, rows[i].key)) {startingPosition = i;break;}}}if (req.query.sortDesc) {rows = rows.reverse();}if (req.query.sortLimit) {rows = rows.slice(startingPosition, parseInt(req.query.sortLimit)+startingPosition);} else if (startingPosition > 0) {rows = rows.slice(startingPosition);}send(JSON.stringify({\"rows\" : rows}));}"},"views":{"appointments_by_date":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'appointment') {\n                    var endDate = doc.endDate,\n                        startDate = doc.startDate;\n                    if (endDate && endDate !== '') {\n                        endDate = new Date(endDate);\n                        if (endDate.getTime) {\n                            endDate = endDate.getTime();\n                        }\n                    }\n                    if (startDate && startDate !== '') {\n                        startDate = new Date(startDate);\n                        if (startDate.getTime) {\n                            startDate = startDate.getTime(); \n                        }\n                    }\n                    emit([startDate, endDate, doc._id]);\n                }\n            }\n        }"}}}
  });
  server.get('/db/main/_design/appointments_by_patient', function(){
    return {"_id":"_design/appointments_by_patient","_rev":"1-4979b491bcf1b42cb2e5f3ec91a8934e","version":2,"views":{"appointments_by_patient":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'appointment') {\n                    var endDate = doc.endDate,\n                        startDate = doc.startDate;\n                    if (endDate && endDate !== '') {\n                        endDate = new Date(endDate);\n                        if (endDate.getTime) {\n                            endDate = endDate.getTime();\n                        }\n                    }\n                    if (startDate && startDate !== '') {\n                        startDate = new Date(startDate);\n                        if (startDate.getTime) {\n                            startDate = startDate.getTime(); \n                        }\n                    }\n                    emit([doc.patient, startDate, endDate,doc._id]);\n                }\n            }\n        }"}}};
  });
  server.get('/db/main/_design/imaging_by_status', function(){
    return {"_id":"_design/imaging_by_status","_rev":"1-5d2502ef2c503be4f54be973a4e8758c","version":2,"views":{"imaging_by_status":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'imaging') {\n                    var imagingDate = doc.imagingDate,\n                        requestedDate = doc.requestedDate;\n                    if (imagingDate && imagingDate !== '') {\n                        imagingDate = new Date(imagingDate);\n                        if (imagingDate.getTime) {\n                            imagingDate = imagingDate.getTime(); \n                        }\n                    }\n                    if (requestedDate && requestedDate !== '') {\n                        requestedDate = new Date(requestedDate);\n                        if (requestedDate.getTime) {\n                            requestedDate = requestedDate.getTime(); \n                        }\n                    }            \n                    emit([doc.status, requestedDate, imagingDate, doc._id]);\n                }\n            }    \n        }"}}}
  });
  server.get('/db/main/_design/inventory_by_name', function(){
    return {"_id":"_design/inventory_by_name","_rev":"1-585ee88bf39cfe52fcd74b94f7db761c","version":1,"lists":{"sort":"function(head, req) {function keysEqual(keyA, keyB) {for (var i= 0; i < keyA.length; i++) {if (keyA[i] !== keyB[i]) {return false;}}return true;}function compareStrings(aString, bString) {if (!aString) {aString = \"\";}if (!bString) {bString = \"\";}if (aString < bString) {return -1;} else if (aString > bString) {return 1;} else {return 0;}}var row,rows=[],startingPosition = 0;while(row = getRow()) {rows.push(row);}rows.sort(function (a,b) {\n            var sortBy = '';\n            if (req.query && req.query.sortKey) {\n                sortBy = req.query.sortKey;\n            }\n            switch(sortBy) {\n                case 'crossReference':\n                case 'description':\n                case 'friendlyId':\n                case 'name':\n                case 'price':\n                case 'quantity':\n                case 'type': {\n                    return compareStrings(a.doc[sortBy], b.doc[sortBy]);\n                }\n                default: {\n                    return 0; //Don't sort\n                }\n            }\n        });if (req.query.sortStartKey) {var startKey = JSON.parse(req.query.sortStartKey);for (var i=0; i<rows.length; i++) {if (keysEqual(startKey, rows[i].key)) {startingPosition = i;break;}}}if (req.query.sortDesc) {rows = rows.reverse();}if (req.query.sortLimit) {rows = rows.slice(startingPosition, parseInt(req.query.sortLimit)+startingPosition);} else if (startingPosition > 0) {rows = rows.slice(startingPosition);}send(JSON.stringify({\"rows\" : rows}));}"},"views":{"inventory_by_name":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'inventory') {\n                    emit([doc.name, doc._id]); \n                }   \n            }    \n        }"}}};
  });
  server.get('/db/main/_design/inventory_by_type', function(){
    return {"_id":"_design/inventory_by_type","_rev":"1-5d5cd77d2fedb4280b4a79ec4e671173","version":2,"views":{"inventory_by_type":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'inventory') {\n                    emit(doc.type); \n                }   \n            }    \n        }"}}}
  });
  server.get('/db/main/_design/inventory_purchase_by_date_received', function(){
    return {"_id":"_design/inventory_purchase_by_date_received","_rev":"1-4606d53d036e05ed11fe2bb34ff5e7d2","version":2,"views":{"inventory_purchase_by_date_received":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'inv-purchase') {\n                    var dateReceived = doc.dateReceived;\n                    if (dateReceived && dateReceived !== '') {\n                        dateReceived = new Date(dateReceived);\n                        if (dateReceived.getTime) {\n                            dateReceived = dateReceived.getTime();\n                        }\n                    }\n                    emit([dateReceived, doc._id]); \n                }   \n            }\n        }"}}}
  });
  server.get('/db/main/_design/inventory_purchase_by_expiration_date', function(){
    return {"_id":"_design/inventory_purchase_by_expiration_date","_rev":"1-7c66ff01e862eced537d4bb9c9e83f12","version":2,"views":{"inventory_purchase_by_expiration_date":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'inv-purchase') {\n                    var expirationDate = doc.expirationDate;\n                    if (expirationDate && expirationDate !== '') {\n                        expirationDate = new Date(expirationDate);\n                        if (expirationDate.getTime) {\n                            expirationDate = expirationDate.getTime();\n                        }\n                    }\n                    emit([expirationDate, doc._id]); \n                }   \n            }\n        }"}}}
  });
  server.get('/db/main/_design/inventory_request_by_item', function(){
    return {"_id":"_design/inventory_request_by_item","_rev":"1-32522e22611ae11fbc506cfe94409e6a","version":2,"views":{"inventory_request_by_item":{"map":"function (doc) {\n            var doctype,\n                uidx;    \n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'inv-request') {\n                    var dateCompleted = doc.dateCompleted;\n                    if (dateCompleted && dateCompleted !== '') {\n                        dateCompleted = new Date(dateCompleted);\n                        if (dateCompleted.getTime) {\n                            dateCompleted = dateCompleted.getTime();\n                        }\n                    }\n                    emit([doc.inventoryItem, doc.status, dateCompleted]);\n                }\n            }    \n        }"}}}
  });
  server.get('/db/main/_design/inventory_request_by_status', function(){
    return {"_id":"_design/inventory_request_by_status","_rev":"1-c1dbf2dabaf9f4b7fc8541485fb71ed0","version":2,"views":{"inventory_request_by_status":{"map":"function (doc) {\n            var doctype,\n                uidx;    \n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'inv-request') {\n                    var dateCompleted = doc.dateCompleted;\n                    if (dateCompleted && dateCompleted !== '') {\n                        dateCompleted = new Date(dateCompleted);\n                        if (dateCompleted.getTime) {\n                            dateCompleted = dateCompleted.getTime();\n                        }\n                    }\n                    emit([doc.status, dateCompleted, doc._id]);\n                }\n            }    \n        }"}}}
  });
  server.get('/db/main/_design/invoice_by_status', function(){
    return {"_id":"_design/invoice_by_status","_rev":"1-56b905d20d7d0067be249ec599815129","version":2,"views":{"invoice_by_status":{"map":"function (doc) {\n            var doctype,\n                uidx;    \n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'invoice') {\n                    var billDate = doc.billDate;\n                    if (billDate && billDate !== '') {\n                        billDate= new Date(billDate);\n                        if (billDate.getTime) {\n                            billDate = billDate.getTime();\n                        }\n                    }\n                    emit([doc.status, billDate, doc._id]);\n                }\n            }    \n        }"}}}
  });
  server.get('/db/main/_design/lab_by_status', function(){
    return {"_id":"_design/lab_by_status","_rev":"1-4ad0ee9108addf97821279f8170435fc","version":2,"views":{"lab_by_status":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'lab') {\n                    var labDate = doc.labDate,\n                        requestedDate = doc.requestedDate;            \n                    if (labDate && labDate !== '') {\n                        labDate = new Date(labDate);\n                        if (labDate.getTime) {\n                            labDate = labDate.getTime(); \n                        }\n                    }\n                    if (requestedDate && requestedDate !== '') {\n                        requestedDate = new Date(requestedDate);\n                        if (requestedDate.getTime) {\n                            requestedDate = requestedDate.getTime(); \n                        }\n                    }                 \n                    emit([doc.status, requestedDate, labDate, doc._id]);\n                }\n            }    \n        }"}}}
  });
  server.get('/db/main/_design/medication_by_status', function(){
    return {"_id":"_design/medication_by_status","_rev":"1-dad90d513270b867de724d3356c1a896","version":2,"views":{"medication_by_status":{"map":"function (doc) {\n            var doctype,\n                uidx;    \n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'medication') {\n                    var prescriptionDate = doc.prescriptionDate,\n                        requestedDate = doc.requestedDate;\n                    if (prescriptionDate && prescriptionDate !== '') {\n                        prescriptionDate = new Date(prescriptionDate);\n                        if (prescriptionDate.getTime) {\n                            prescriptionDate = prescriptionDate.getTime(); \n                        }\n                    }\n                    if (requestedDate && requestedDate !== '') {\n                        requestedDate = new Date(requestedDate);\n                        if (requestedDate.getTime) {\n                            requestedDate = requestedDate.getTime(); \n                        }\n                    }              \n                    emit([doc.status, requestedDate, prescriptionDate, doc._id]);\n                }\n            }    \n        }"}}}
  });
  server.get('/db/main/_design/patient_by_display_id', function(){
    return {"_id":"_design/patient_by_display_id","_rev":"1-879c337d6ea0d77eacacd818e5dcdbe5","version":3,"lists":{"sort":"function(head, req) {function keysEqual(keyA, keyB) {for (var i= 0; i < keyA.length; i++) {if (keyA[i] !== keyB[i]) {return false;}}return true;}function getCompareDate(dateString) {if (!dateString || dateString === \"\") {return 0;}return new Date(dateString).getTime();}function compareStrings(aString, bString) {if (!aString) {aString = \"\";}if (!bString) {bString = \"\";}if (aString < bString) {return -1;} else if (aString > bString) {return 1;} else {return 0;}}var row,rows=[],startingPosition = 0;while(row = getRow()) {rows.push(row);}rows.sort(function (a,b) {\n            var sortBy = '';\n            if (req.query && req.query.sortKey) {\n                sortBy = req.query.sortKey;\n            }\n            switch(sortBy) {\n                case 'firstName':\n                case 'gender':\n                case 'lastName':\n                case 'status': {\n                    return compareStrings(a.doc[sortBy], b.doc[sortBy]);\n                }\n                case 'dateOfBirth': {\n                    return getCompareDate(a.doc.dateOfBirth) -getCompareDate(b.doc.dateOfBirth);\n                }\n                default: {\n                    return 0; //Don't sort\n                }\n            }\n        });if (req.query.sortStartKey) {var startKey = JSON.parse(req.query.sortStartKey);for (var i=0; i<rows.length; i++) {if (keysEqual(startKey, rows[i].key)) {startingPosition = i;break;}}}if (req.query.sortDesc) {rows = rows.reverse();}if (req.query.sortLimit) {rows = rows.slice(startingPosition, parseInt(req.query.sortLimit)+startingPosition);} else if (startingPosition > 0) {rows = rows.slice(startingPosition);}send(JSON.stringify({\"rows\" : rows}));}"},"views":{"patient_by_display_id":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'patient') {\n                    if (doc.friendlyId) {\n                        emit([doc.friendlyId, doc._id]);\n                    } else if (doc.externalPatientId) {\n                        emit([doc.externalPatientId, doc._id]);\n                    } else {\n                        emit([doc._id, doc._id]);\n                    }\n                }   \n            }\n        }"}}}
  });
  server.get('/db/main/_design/patient_by_status', function(){
    return {"_id":"_design/patient_by_status","_rev":"1-75a5302ad77f198f0d35cc4332463a8a","version":1,"views":{"patient_by_status":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'patient') {                \n                    emit(doc.status);\n                }\n            }\n        }"}}}
  });
  server.get('/db/main/_design/photo_by_patient', function(){
    return {"_id":"_design/photo_by_patient","_rev":"1-342baa6825050432dca30cf7c1bd0e81","version":2,"views":{"photo_by_patient":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'photo') {\n                    emit(doc.patient); \n                }   \n            }\n        }"}}}
  });
  server.get('/db/main/_design/procedure_by_date', function(){
    return {"_id":"_design/procedure_by_date","_rev":"1-1f8eccd987168d8439fc579691d53575","version":2,"views":{"procedure_by_date":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'procedure') {\n                    var procedureDate = doc.procedureDate;\n                    if (procedureDate && procedureDate !== '') {\n                        procedureDate = new Date(procedureDate);\n                        if (procedureDate.getTime) {\n                            procedureDate = procedureDate.getTime(); \n                        }\n                    }\n                    emit([procedureDate, doc._id]);\n                }\n            }\n        }"}}}
  });
  server.get('/db/main/_design/pricing_by_category', function(){
    return {"_id":"_design/pricing_by_category","_rev":"1-14fe0f81f808273c47b3ccb1918d635a","version":2,"views":{"pricing_by_category":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'pricing') {\n                    emit([doc.category, doc.name, doc.type, doc._id]); \n                }   \n            }\n        }"}}}
  });
  server.get('/db/main/_design/sequence_by_prefix', function(){
    return {"_id":"_design/sequence_by_prefix","_rev":"1-f4957a4646f5af6c742328e5cc77d8d4","version":2,"views":{"sequence_by_prefix":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if (doctype === 'sequence') {\n                    emit(doc.prefix); \n                }   \n            }\n        }"}}}
  });
  server.get('/db/main/_design/visit_by_date', function(){
    return {"_id":"_design/visit_by_date","_rev":"1-2db6d7096999add13cbdf4d46d10f98d","version":2,"views":{"visit_by_date":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'visit') {\n                    var endDate = doc.endDate,\n                        startDate = doc.startDate;\n                    if (endDate && endDate !== '') {\n                        endDate = new Date(endDate);\n                        if (endDate.getTime) {\n                            endDate = endDate.getTime();\n                        }\n                    }\n                    if (startDate && startDate !== '') {\n                        startDate = new Date(startDate);\n                        if (startDate.getTime) {\n                            startDate = startDate.getTime(); \n                        }\n                    }\n                    emit([startDate, endDate, doc._id]);\n                }\n            }\n        }"}}};
  });
  server.get('/db/main/_design/visit_by_discharge_date', function(){
    return {"_id":"_design/visit_by_discharge_date","_rev":"1-ed030509364f5f39e3e61020abe3f27b","version":1,"views":{"visit_by_discharge_date":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'visit') {\n                    var endDate = doc.endDate;\n                    if (endDate && endDate !== '') {\n                        endDate = new Date(endDate);\n                        if (endDate.getTime) {\n                            endDate = endDate.getTime();\n                        }\n                        emit([endDate, doc._id]);\n                    }\n                }\n            }\n        }"}}}
  });
  server.get('/db/main/_design/visit_by_patient', function(){
    return {"_id":"_design/visit_by_patient","_rev":"1-187461930e233e0881ef9b896be1d850","version":2,"views":{"visit_by_patient":{"map":"function (doc) {\n            var doctype,\n                uidx;\n            if (doc._id && (uidx = doc._id.indexOf(\"_\")) > 0) {\n                doctype = doc._id.substring(0, uidx);\n                if(doctype === 'visit') {\n                    var endDate = doc.endDate,\n                        startDate = doc.startDate;\n                    if (endDate && endDate !== '') {\n                        endDate = new Date(endDate);\n                        if (endDate.getTime) {\n                            endDate = endDate.getTime();\n                        }\n                    }\n                    if (startDate && startDate !== '') {\n                        startDate = new Date(startDate);\n                        if (startDate.getTime) {\n                            startDate = startDate.getTime(); \n                        }\n                    }\n                    emit([doc.patient, startDate, endDate, doc.visitType, doc._id]);\n                }\n            }\n        }"}}};
  });
  server.get('/db/main/_design/inventory_request_by_status/_view/inventory_request_by_status', function(){
    return {"total_rows":0,"offset":0,"rows":[]};
  });
}
