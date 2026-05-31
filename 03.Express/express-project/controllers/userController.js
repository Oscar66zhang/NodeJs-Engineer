exports.register = async (req, res) => {
    console.log(req.body);
    res.send('/user-register')
}

exports.list = async (req, res) => {
    console.log(req.method);
    res.send('/user-list')
}


exports.delete = async (req, res) => {
    console.log(req.method);
    res.send('/user-delete')
}