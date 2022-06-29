document.getElementById('clickme').addEventListener('click',function(){
     console.log('Button clicked');
 })
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('clickme').addEventListener('click', () => {
        console.log('DOM content loaded');
    })
})
