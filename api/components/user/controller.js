const TABLA = 'user';
module.exports = function(store){
    return {
        list(){
            return store.list(TABLA);
            },
        get(id){
            return store.get(TABLA, id);
            },
        upsert(body){
            return store.upsert(TABLA, body);
        },
        remove(id){
            return store.remove(TABLA, id);
        },
    }
};