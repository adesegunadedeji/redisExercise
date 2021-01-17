const Hashes = (redis)=> {
redis.hmset('user:450', 'firstName', 'James', 'lastName', 'Harden', 'age', 30);
redis.hincrby('user:450', 'age', 10);
redis.hgetall('user:450', (err,res)=> {
    console.log(res);
});


}

export default Hashes;