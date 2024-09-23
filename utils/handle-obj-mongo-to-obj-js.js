
const handleObjMongoToObjJs = (elemento) => {
    console.dir(elemento)
    const objJS = JSON.parse(JSON.stringify(elemento)) // Transformo un obj de mongoose a un obj de js
    console.log(objJS)
    return objJS
}

export default handleObjMongoToObjJs