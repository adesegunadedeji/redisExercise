const Strings  = (redis)=> {
    redis.set('name', 'Adesegun', 'EX', 5);
redis.get('name', (err, result) => {
    console.log(result);
});

redis.get('address', (err, result)=> {
    console.log(result);
})

redis.incrby('address', 300);
redis.get('address', (err, result)=> {
    console.log(result);
});


redis.mset('street', 'Elm Street', 'city', 'Allendale');
redis.mget('street','city', (err,res)=> {
    console.log(res);
});

}

export default Strings;