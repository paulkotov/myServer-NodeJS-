/**
 * Created by ПАВЕЛ on 11.04.2016.
 */
'use strict';
const mysql = require('mysql');
const pool = mysql.createPool({
    host:'localhost',
    database: 'mysql',
    user: 'root',
    password: ''
});

var Task ={
    id,
    name,
    description};

var Tasks = {
    list: (callback)=> {
        pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM mysql WHERE 1', (err, rows) => {
                connection.release();
            });
        });
    },

    add: (task, callback) => {
        pool.getConnection((err, connection) => {
            connection.query('INSERT INTO tasks (id, name, descriprion) VALUES (task.id, task.name, task.description)', (err, rows) => {
                connection.release();
            });
        });
    },

    change: (id, name, description, callback) => {
        pool.getConnection((err, connection) => {
            connection.query('UPDATE tasks SET id=this.id, name=name, descriprion=description', (err, rows) => {
                connection.release();
            });
        });
    },

    complete: (id, callback) => {
//???
    },

    del: (id, callback) => {
        pool.getConnection((err, connection) => {
            connection.query('DELETE FROM tasks WHERE id=id', (err, rows) => {
                connection.release();
            });
        });
    }
}//end of Tasks

module.exports = function(app){

};
