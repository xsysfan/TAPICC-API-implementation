/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

export = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },

    type: {
      type: 'string',
      enum: ['translation', 'machine translation', 'modification', 'proof'],
      required: true
    },

    targetLanguage: {
      type: 'string'
    },

    progress: {
      type: 'string',
      enum: ['pending', 'in progress', 'paused', 'canceled', 'finished'],
      defaultsTo: 'pending'
    },

    assignedTo: {
      type: 'string'
    },

    fileDescriptor: {
      type: 'string'
    },

    fileOriginalName: {
      type: 'string'
    },

    jobId: {
      model: 'job',
      required: true
    },

    inputId: {
      model: 'input'
    }
  }

};

