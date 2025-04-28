// first thing we run file using node fileName
// next if you access another file content we can use require('filename path')

if Access another file variables and functions we can use export like this module.exports = {variables, function names}

by above method is called common js modules

it has two types modules are there
    -common js module
    -ES module

common js module
    -It is older way
    -by  default in node js
    -module.exports rquirement
    -syncronus
    -non strict mode(we can't use var ,let)

ES module
    -It is newr way
    -it has intialize inn package.json in "type":'module'
    -it can use export and import
    -async
    -strict mode


