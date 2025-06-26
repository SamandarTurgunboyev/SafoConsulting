import React from 'react'
import logo from './logo.png'; 
function Left() {
  return (
    <div style={{width:"100%",height:"100%"}}>
        <div className='header' style={{width:"100%",height:"10%",display:"flex", justifyContent:"space-between"}}>
            <img src={logo} alt="Logo" style={{height:"80%",width:"auto"}} />
            <div style={{height:"80%", minWidth:"20%", marginTop:"4%"}}>
                <span style={{marginLeft:'7%'}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-2 -2 24 24"><g fill="#fff"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"/><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164a5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31a3.155 3.155 0 0 1 0 6.31z"/><circle cx="15.156" cy="4.858" r="1.237"/></g></svg>
                </span>
                <span style={{marginLeft:'7%'}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#fff" d="M8 0a8 8 0 0 1 1.083 15.927v-5.755h2.07l.326-2.113H9.083V6.903c0-.829.255-1.57.971-1.65l.132-.007h1.313V3.401l-.291-.036c-.28-.03-.711-.064-1.35-.064c-1.86 0-2.978.956-3.05 3.123l-.004.228V8.06H4.825v2.113h1.98v5.74A8.002 8.002 0 0 1 8 0"/></svg>
                </span>
                <span style={{marginLeft:'7%', marginRight:"10%"}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#fff" d="M8 0C3.581 0 0 3.581 0 8s3.581 8 8 8s8-3.581 8-8s-3.581-8-8-8zm3.931 5.484l-1.313 6.184c-.091.441-.356.544-.725.341l-2-1.478l-.959.934c-.112.109-.2.2-.4.2c-.259 0-.216-.097-.303-.344L5.55 9.084l-1.978-.616c-.428-.131-.431-.425.097-.634l7.706-2.975c.35-.159.691.084.556.625z"/></svg>
                </span>
            </div>
        </div>
    <div style={{width:"80%",margin:"auto", height:"80%"}}>
       
      <img src="https://www.ansonika.com/potenza/img/info_graphic_1.svg" alt="" style={{marginTop:"10%"}} />
      <h1 style={{fontSize:"2rem"}}>Мы нанимаем <br /><span style={{fontSize:"1.5rem"}}>(Ishga olamiz)</span></h1>
      <div style={{fontSize:"1rem"}}>
        Bu dastur Asosan Litva davlatga borib qurilish soxasida ishlash istagida 
        bo'lgan har qandey (Erkak va Ayollar ) uchun Erkaklar asosan qurilish soxlarida 
        Ayollar asosan qadoqlash sartirovka va tozlash ishlari uchun jalb qilinadi 
        
      </div>
    </div>
    </div>
  )
}

export default Left
