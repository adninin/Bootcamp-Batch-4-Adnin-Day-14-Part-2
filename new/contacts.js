//Require File System
const fs = require('fs')

const { name } = require('ejs')

//Ask apakah sudah ada folder data atau belum
const dirPath = './data'

//Membuat file contact.json apabila file belum exist
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

//Ask apakah sudah ada folder data dan file contacts.json atau belum
const dataPath = './data/contacts.json'

//Membuat file contact.json apabila file belum exist
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8') //Menggunakan kurung siku [] karena filenya berformat json
}

//Mengambil data dari json
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    return contacts
}

//Function find contact by name
const findContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

//Add new contacts to json
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

//Add new contact 
const addCont = (contact) => {
    const contacts = loadContact()
    // console.log('1',contact);
    // console.log('2',contacts);
    contacts.push(contact)
    // console.log('3',contacts);
    saveContacts(contacts)
}

//Ekspor function
module.exports = { loadContact, findContact, addCont }