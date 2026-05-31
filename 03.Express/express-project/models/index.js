const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://localhost:27017/mytest')
}

main().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

module.exports = mongoose;