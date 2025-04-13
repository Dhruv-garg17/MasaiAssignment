// dark mode implementation

const toggleBtn=document.getElementById('themeToggle');

function applytheme(theme){
    if(theme=='dark'){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }
}

toggleBtn.addEventListener('click',()=>{
    const currtheme=document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newtheme=currtheme=='dark' ? 'light': 'dark';
    localStorage.setItem('theme',newtheme);
    applytheme(newtheme);
});

const savedtheme=localStorage.getItem('theme') || 'light';
applytheme(savedtheme);
