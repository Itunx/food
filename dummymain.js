const buttonA_=document.querySelector('#buttonA');
const headingA_=document.querySelector('#headingA');

 buttonA_.onclick=()=>{
    const  name=prompt(`enter your name`);
    console.log(`hello ${name},nice to see you`);
    headingA.textContent=`good ${name}`
}
