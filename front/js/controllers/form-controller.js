import Address from "../models/address.js";

function State(){
    
    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;

    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorCep = null;
    this.errorNumber = null;
}

const state = new State();

export function init(){

    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;
   

    state.btnClear = document.forms.newAddress.btnClear;
    state.btnSave = document.forms.newAddress.btnSave;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error = "number"]');

   //setFormerror("cep" , "Digite o cep");
   //setFormerror("number","Digite o número");
   state.inputNumber.addEventListener('change' , handleInputNumberChange);
   state.btnClear.addEventListener('click',handleBtnClearClick);
}

function handleInputNumberChange(event){
    if (event.target.value == ""){
        setFormerror("number" , "Campo requerido");
    }else{
        setFormerror("number" , "");
    }
}

function handleBtnClearClick(event){
    event.preventDefault ();
    clearForm();
}

function clearForm(){
    state.inputCep.value = "";
    state.inputCity.value = "";
    state.inputNumber.value ="";
    state.inputStreet.value = "";

    setFormerror("cep" , "");
    setFormerror("number" , "");

    state.inputCep.focus();
}

function setFormrror(key,value){
    const element = document.querySelector(`[data-error= "${key}"]`);
    element.innerHTML = value;
}