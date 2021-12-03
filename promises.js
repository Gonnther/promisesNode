'use strict'

let fs = require('fs'),
	file = './mitxt.txt',
	newFile = './mitxtPromise-es6.txt',
	promise = new Promise((res, rej)=>{
		fs.access(file, fs.F_OK, function(err) {
			return(err) ? rej(new Error('El archivo no existe') ) : res(true)
		})
	})


promise
	.then( (dataPromise) => {
		console.log('el archivo existe')
		return new Promise((res, rej)=>{
			fs.readFile(file, function(err, data){
			return(err) ? rej(new Error('el archivo no se pudo leer') ) : res(data)
			})
		})
	} )
	.then( (dataPromise) => {
		console.log('el archivo se ha leido exitosamente')
		return new Promise((res, rej)=>{
			fs.writeFile(newFile, resolved, function(err){
			return (err) ? rej(new Error('el archivo no se pudo copiar') ) : res('el archivo se ha copiado con exito')
			})
		})
	} )
	.then( (dataPromise) => {
		console.log(resolved)
	} )
	.catch((err)=> {
		console.log(err.message)
	})