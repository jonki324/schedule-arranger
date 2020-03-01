'use strict';
const loader = require('./sequelize-loader');
const Sequilize = loader.Sequelize;

const Schedule = loader.database.define('schedules', {
  scheduleId: {
    type: Sequilize.UUID,
    primaryKey: true,
    allowNull: false
  },
  scheduleName: {
    type: Sequilize.STRING,
    allowNull: false
  },
  memo: {
    type: Sequilize.TEXT,
    allowNull: false
  },
  createdBy: {
    type: Sequilize.INTEGER,
    allowNull: false
  },
  updatedAt: {
    type: Sequilize.DATE,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['createdBy']
    }
  ]
});

module.exports = Schedule;