const db = {
    'user': [
        {
          "name": "John Doe",
          "nickname": "@johndoe",
          "created_at": "1556789200",
          "updated_at": "20201231120000",
          "email": "johndoe@example.com",
          "password": "password123",
          "id": "14"
        },
        {
          "name": "Jane Smith",
          "nickname": "@janesmith",
          "created_at": "1556789201",
          "updated_at": "20201231120001",
          "email": "janesmith@example.com",
          "password": "password456",
          "id": "13"
        },
        {
          "name": "Alex Johnson",
          "nickname": "@alexjohnson",
          "created_at": "1556789202",
          "updated_at": "20201231120002",
          "email": "alexjohnson@example.com",
          "password": "password789",
          "id": "12"
        },
        {
          "name": "Sarah Davis",
          "nickname": "@sarahdavis",
          "created_at": "1556789203",
          "updated_at": "20201231120003",
          "email": "sarahdavis@example.com",
          "password": "passwordabc",
          "id": "11"
        },
        {
          "name": "Michael Wilson",
          "nickname": "@michaelwilson",
          "created_at": "1556789204",
          "updated_at": "20201231120004",
          "email": "michaelwilson@example.com",
          "password": "passworddef",
          "id": "10"
        },
        {
          "name": "Emily Brown",
          "nickname": "@emilybrown",
          "created_at": "1556789205",
          "updated_at": "20201231120005",
          "email": "emilybrown@example.com",
          "password": "passwordghi",
          "id": "9"
        },
        {
          "name": "David Taylor",
          "nickname": "@davidtaylor",
          "created_at": "1556789206",
          "updated_at": "20201231120006",
          "email": "davidtaylor@example.com",
          "password": "passwordjkl",
          "id": "7"
        },
        {
          "name": "Olivia Martinez",
          "nickname": "@oliviamartinez",
          "created_at": "1556789207",
          "updated_at": "20201231120007",
          "email": "oliviamartinez@example.com",
          "password": "passwordmno",
          "id": "8"
        },
        {
          "name": "William Anderson",
          "nickname": "@williamanderson",
          "created_at": "1556789208",
          "updated_at": "20201231120008",
          "email": "williamanderson@example.com",
          "password": "passwordpqr",
          "id": "6"
        },
        {
          "name": "Sophia Thomas",
          "nickname": "@sophiathomas",
          "created_at": "1556789209",
          "updated_at": "20201231120009",
          "email": "sophiathomas@example.com",
          "password": "passwordstu",
          "id": "5"
        },
        {
          "name": "James Jackson",
          "nickname": "@jamesjackson",
          "created_at": "1556789210",
          "updated_at": "20201231120010",
          "email": "jamesjackson@example.com",
          "password": "passwordvwx",
          "id": "4"
        },
        {
          "name": "Ava White",
          "nickname": "@avawhite",
          "created_at": "1556789211",
          "updated_at": "20201231120011",
          "email": "avawhite@example.com",
          "password": "passwordyz1",
          "id": "3"
        },
        {
          "name": "Logan Harris",
          "nickname": "@loganharris",
          "created_at": "1556789212",
          "updated_at": "20201231120012",
          "email": "loganharris@example.com",
          "password": "password234",
          "id": "2"
        },
        {
          "name": "Mia Clark",
          "nickname": "@miaclark",
          "created_at": "1556789213",
          "updated_at": "20201231120013",
          "email": "miaclark@example.com",
          "password": "password567",
          "id": "1"
        }
      ]
};
async function list(table){
  return db[table]
}
async function get(table, id){
  const all = await list(table)
  return all.find(t => t.id == id);
}
async function upsert(table, data){
  const all = await list(table);
  let obj;
  if( data.id ){
    const obj = await get(table, data.id);
    for(let [key, val] of Object.items()){
      obj[key] = val 
    }
  }else{
    obj = {
      id: all.length,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime(),
      ...data
    }
    all.push(obj);
  }
  return obj;
}
async function remove(table, id){
  const all = await list(table)
  db[table] = all.filter(t => t.id != id);
  return true;
}
module.exports = {
    list,
    get,
    upsert,
    remove,
};