exports.index = function (req, res, next) {
    res.json('get')
}

exports.create = function (req, res, next) {
    res.json('post')
}

exports.update = function (req, res, next) {
    res.json('put')
}

exports.delete = function (req, res, next) {
    res.json('delete')
}