/*
====================================
GEN DESIGN
Contact Form
====================================
*/

document.addEventListener("DOMContentLoaded",()=>{

const form=document.querySelector(".contact-form");
const toast=document.getElementById("toast");

if(!form) return;

const button=form.querySelector("button");

const PHONE_NUMBER="6289662834556";


/*==============================
SHOW TOAST
==============================*/

function showToast(message){

if(!toast) return;

const text=toast.querySelector("span");

if(text){

text.textContent=message;

}

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}


/*==============================
SUBMIT
==============================*/

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector('input[type="text"]').value.trim();
const email=form.querySelector('input[type="email"]').value.trim();

const subject=form.querySelectorAll("input")[2].value.trim();

const message=form.querySelector("textarea").value.trim();

if(name===""||email===""||message===""){

showToast("Lengkapi semua data terlebih dahulu.");

return;

}


/*==============================
BUTTON LOADING
==============================*/

const original=button.innerHTML;

button.disabled=true;

button.innerHTML=`
<i class="fa-solid fa-spinner fa-spin"></i>
Mengirim...
`;

setTimeout(()=>{

const text=
`Halo Admin, Perkenalkan Saya :

Nama : ${name}

Email : ${email}

Judul : ${subject}

Pesan :
${message}`;

const url=

`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

window.open(url,"_blank");

button.disabled=false;
button.innerHTML=original;

showToast("Pesan berhasil disiapkan.");

form.reset();

},1200);

});

});