const Lists = (redis)=> {
    redis.del('planets');
     redis.rpush('planets', 'Jupiter', 'Saturn', 'Uranus', 'Neptune');
     redis.rpush('planets', 'Saturn');
    redis.lpush('planets', 'Mercury');
    //redis.rpop('planets');
    
    redis.lrange('planets', 0, -1, (err, res) =>{
        console.log(res);
    });
}

export default Lists;