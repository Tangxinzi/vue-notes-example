const db = new loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000
})

function databaseInitialize() {
  const notes = db.getCollection('notes')
  if (notes === null) {
    db.addCollection('notes')
  }
}

// Console
// const notesCollection = db.getCollection('notes')
// notesCollection.find() 查找所有
// notesCollection.findOne() 查找一条记录
// notesCollection.insert({body: 'hello ~'}) 插入一条记录
// const note = notesCollection.find({'$loki': 1}) 查找 ID = 1
// note.body = 'hola ~'
// notesCollection.update(note) 更新
// notesCollection.remove(note) 删除
