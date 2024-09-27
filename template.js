function Template(id, data) {
    let t = document.getElementById(id).innerHTML
    return t.replace(/\<%=([\w\W]*?)%\>/g, (match, key) => data[key] || '')
}