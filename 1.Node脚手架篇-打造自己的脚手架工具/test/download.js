const download = require('download-git-repo');
download('direct:git@e.come:beiyaoyaoyao/egg-template.git', './xxx', { clone: true }, function (err) {
    if (err) {
        console.log('下载失败:', err);
    } else {
        console.log('Success');
    }
})