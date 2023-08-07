//sidebar
const menuItems= document.querySelectorAll('.menu-item');

// message
const messagesNotification=document.querySelector('#message-notification');
const messages=document.querySelector('.meassages');
const message=messages.querySelectorAll('.messages');
const messageSearch=document.querySelector('#message-search');
// theme
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');



// remove active class for all menu items
const changeActiveItem=()=> {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notification-popup').
            style.display='none';
        }else{
            document.querySelector('.notifications-popup').
            style.display='block';
            document.querySelector('#notifications . notification-count').style.display='none';
        }
    })
})

// =========messages========
// search chats
const searchMessage=() =>{
   const val= messageSearch.value.toLowerCase();
   console.log(val);
   message.forEach(chat =>{
    let name=chat.querySelector('h5').textContent.toLocaleLowerCase();
    if(name.indexOf(val) !=-1){
        chat.style.display='flex';  
    }else{
        chat.style.display='none';
    }
   })
}

// search chat
messageSearch.addEventListener('keyup',searchMessage);

// hightlight messages card when messaage menu item is clicked
messagesNotification.addEventListener('click',()=>{
  messages.style.boxshadow ='0 0 1rem var(--color-primary)';
  messagesNotification.querySelector('notfication-count').style
  setTimeout(() =>{
   messages.style.boxshadow='none';
  },2000);
})


// Theme /display customization
const openThemeModal=()=> {
   themeModal.style.display='grid'; 
}
theme.addEventListener('click',openThemeModal);

