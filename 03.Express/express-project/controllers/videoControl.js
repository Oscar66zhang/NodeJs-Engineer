exports.list = async (req, res) => {
    console.log(req.method);
    res.send('/video-list');
}

exports.users = async (req, res) => {
    console.log(req.method);
    res.send('/video-users');
}