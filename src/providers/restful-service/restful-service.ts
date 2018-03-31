import { Injectable } from '@angular/core';
import { SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class RestfulServiceProvider {
  db: SQLiteObject = null;

  constructor() {}

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }
  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS note(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, comment TEXT)';
    return this.db.executeSql(sql, []);
  }
  getAll(){
    let sql = 'SELECT * FROM note';
    return this.db.executeSql(sql, [])
      .then(response => {
        let notes = [];
        for (let index = 0; index < response.rows.length; index++) {
          notes.push( response.rows.item(index) );
        }
        return Promise.resolve( notes );
      })
      .catch(error => Promise.reject(error));
  }
  create(note: any){
    let sql = 'INSERT INTO note(title, comment) VALUES(?,?)';
    return this.db.executeSql(sql, [note.title, note.comment]);
  }
  delete(note: any){
    let sql = 'DELETE FROM note WHERE id=?';
    return this.db.executeSql(sql, [note.id]);
  }




}
