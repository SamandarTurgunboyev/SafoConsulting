// import React from 'react'
// import "./Right.css"
// function Right() {
//   return (
//     <div>
//        <h1 style={{marginBottom:"0",color:"black"}}>Заполните анкету</h1>
//        <p style={{fontSize:"1.5rem",marginTop:"0.5rem",color:"black"}}>(Fo'rmani to'ldiring!)</p>
//         <div>
//             <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='имя'
//             /> <br />
//             <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type={'Date'} placeholder='Дата рождения'
//             /> <br />
//              <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Место рождения (страна, область)'
//             /> <br />

//            <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type="tel" placeholder='Номер телефона (моб)'
//             /> <br />
//               <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type="email" placeholder='Электронная почта'
//             /> <br />

//             <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='(женат, холост, разведен) – дата заключения брака'
//             /> <br />
//               <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Пол(муж/жен)'
//             /> <br />
//              <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Гражданство (или ПМЖ, если есть)'
//             /> <br />
//               <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Номер и дата выдачи / окончания срока действия паспорта'
//             /> <br />
//               <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Был за рубежом последние 5 лет
//               '
//             /> <br />
//             <span style={{color:"black"}}>  Если да, то где и когда</span> <br />
//             <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Что умеете делать по работе
//               '
//             /> <br />
//               <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Что умеете делать лучше всего по работе
//               '
//             /> <br />
//               <input style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem" }} type='text' placeholder='Где и кем работали последние 5 лет – пишите правду
//               '
//             /> <br />
//             <span style={{color:"black"}}> – пишите правду</span> <br />
//           <span style={{color:'black'}}>PDF ЗагранПаспорта</span> <input type="file" name="" id="" />

//         </div>
//     </div>
//   )
// }

// // export default Rightimport React, { useState } from 'react';
// 2222222222222222
// 222222222222
// import "./Right.css";
// import { useState } from "react";

// function Right() {
//   const [formData, setFormData] = useState({
//     name: '',
//     birthDate: '',
//     // ... boshqa fieldlar
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const sendToTelegram = async (message) => {
//     const botToken = '7239322697:AAFoZmgpAONc7Pmm4Fw9dECZK9zv_jy95oQ';
//     const chatId = '2120830043'; // @userinfobot dan olishingiz mumkin

//     try {
//       const response = await fetch(
//         `https://api.telegram.org/bot${botToken}/sendMessage`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             chat_id: chatId,
//             text: message,
//             parse_mode: 'HTML'
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log('Telegram response:', data);
//       return data.ok;
//     } catch (error) {
//       console.error('Telegram error:', error);
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Formatlash
//     const message = `
//       <b>Yangi ariza!</b>\n
//       <b>Ism:</b> ${formData.name}\n
//       <b>Tug'ilgan sana:</b> ${formData.birthDate}\n
//       <b>Telefon:</b> ${formData.phone}\n
//       <b>Email:</b> ${formData.email}\n
//       <b>Fuqarolik:</b> ${formData.citizenship}\n
//       <b>Pasport ma'lumoti:</b> ${formData.passportInfo}\n
//       <b>Ish tajribasi:</b> ${formData.workHistory}
//     `;

//     const success = await sendToTelegram(message);

//     if (success) {
//       alert('Maʼlumotlar Telegramga yuborildi!');
//     } else {
//       alert('Xatolik yuz berdi, qayta urinib koʻring!');
//     }
//   };

//   return (
//     <div>
//       <h1 style={{ marginBottom: "0", color: "black" }}>Заполните анкету</h1>
//       <p style={{ fontSize: "1.5rem", marginTop: "0.5rem", color: "black" }}>(Fo'rmani to'ldiring!)</p>

//       <form onSubmit={handleSubmit}>
//         {/* Inputlarni qo'shish */}
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           style={{width:"40%",border:"1px solid lime",color:"black",padding:'0.6rem', outline:"none",background:"none",fontSize:"1.2rem",borderRadius:"0.4rem"}}
//           type='text'
//           placeholder='имя'
//           required
//         /> <br />

//         {/* Boshqa inputlar */}

//         <button
//           type="submit"
//           style={{marginTop: '1rem', padding: '0.6rem 1.2rem', background: 'lime', border: 'none', borderRadius: '0.4rem', cursor: 'pointer'}}
//         >
//           Отправить
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Right;

// 333333
// 3333333333
// import "./Right.css";
// import { useState } from "react";

// function Right() {
//   const [formData, setFormData] = useState({
//     name: '',
//     birthDate: '',
//     birthPlace: '',
//     phone: '',
//     email: '',
//     maritalStatus: '',
//     gender: '',
//     citizenship: '',
//     passportInfo: '',
//     abroadHistory: '',
//     abroadDetails: '',
//     workSkills: '',
//     bestSkill: '',
//     workHistory: '',
//     passportFile: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const sendToTelegram = async (message) => {
//     const botToken = '7239322697:AAFoZmgpAONc7Pmm4Fw9dECZK9zv_jy95oQ';
//     const chatId = '2120830043';

//     try {
//       const response = await fetch(
//         `https://api.telegram.org/bot${botToken}/sendMessage`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             chat_id: chatId,
//             text: message,
//             parse_mode: 'HTML'
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log('Telegram response:', data);
//       return data.ok;
//     } catch (error) {
//       console.error('Telegram error:', error);
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const message = `
// <b>Yangi ariza!</b>\n
// <b>Ism:</b> ${formData.name}
// <b>Tug'ilgan sana:</b> ${formData.birthDate}
// <b>Tug'ilgan joy:</b> ${formData.birthPlace}
// <b>Telefon:</b> ${formData.phone}
// <b>Email:</b> ${formData.email}
// <b>Oilaviy holat:</b> ${formData.maritalStatus}
// <b>Jinsi:</b> ${formData.gender}
// <b>Fuqarolik:</b> ${formData.citizenship}
// <b>Pasport ma'lumotlari:</b> ${formData.passportInfo}
// <b>So'nggi 5 yildagi chet elga chiqishlar:</b> ${formData.abroadHistory}
// <b>Qayerda va qachon:</b> ${formData.abroadDetails}
// <b>Ishlay oladigan ishlar:</b> ${formData.workSkills}
// <b>Eng yaxshi ko'nikma:</b> ${formData.bestSkill}
// <b>So'nggi 5 yildagi ish tajribasi:</b> ${formData.workHistory}
//     `;

//     const success = await sendToTelegram(message);

//     if (success) {
//       alert('Maʼlumotlar Telegramga yuborildi!');
//     } else {
//       alert('Xatolik yuz berdi, qayta urinib koʻring!');
//     }
//   };

//   return (
//     <div>
//       <h1 style={{ color: "black" }}>Заполните анкету</h1>
//       <p style={{ fontSize: "1.5rem", color: "black" }}>(Fo'rmani to'ldiring!)</p>

//       <form onSubmit={handleSubmit}>
//         {/* Inputlar */}
//         <input name="name" value={formData.name} onChange={handleChange} placeholder="имя" required />
//         <input name="birthDate" value={formData.birthDate} onChange={handleChange} type="date" placeholder="Дата рождения" />
//         <input name="birthPlace" value={formData.birthPlace} onChange={handleChange} placeholder="Место рождения" />
//         <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Номер телефона" />
//         <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Электронная почта" />
//         <input name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} placeholder="Семейное положение" />
//         <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Пол" />
//         <input name="citizenship" value={formData.citizenship} onChange={handleChange} placeholder="Гражданство" />
//         <input name="passportInfo" value={formData.passportInfo} onChange={handleChange} placeholder="Данные паспорта" />
//         <input name="abroadHistory" value={formData.abroadHistory} onChange={handleChange} placeholder="Был за рубежом?" />
//         <input name="abroadDetails" value={formData.abroadDetails} onChange={handleChange} placeholder="Где и когда" />
//         <input name="workSkills" value={formData.workSkills} onChange={handleChange} placeholder="Что умеете делать?" />
//         <input name="bestSkill" value={formData.bestSkill} onChange={handleChange} placeholder="Лучше всего умею" />
//         <input name="workHistory" value={formData.workHistory} onChange={handleChange} placeholder="Опыт за 5 лет" />

//         {/* File input (pasport PDF) */}
//         <span style={{color: "black"}}>PDF ЗагранПаспорта</span><br />
//         <input type="file" name="passportFile" onChange={handleChange} accept="application/pdf" /><br />

//         <button type="submit">Отправить</button>
//       </form>
//     </div>
//   );
// }

// export default Right;
// 44444
// 44444
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from 'react';
import './Right.css';

function Right() {
	const [formData, setFormData] = useState({
		name: '',
		birthDate: '',
		birthPlace: '',
		phone: '',
		email: '',
		maritalStatus: '',
		gender: '',
		citizenship: '',
		passportInfo: '',
		abroadHistory: '',
		abroadDetails: '',
		workSkills: '',
		bestSkill: '',
		workHistory: '',
		passportFile: null,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, files } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: files ? files[0] : value,
		}));
	};

	const sendToTelegram = async (message: string) => {
		const botToken = '7239322697:AAFoZmgpAONc7Pmm4Fw9dECZK9zv_jy95oQ';
		const chatId = '2120830043';

		try {
			const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: message,
					parse_mode: 'HTML',
				}),
			});

			const data = await response.json();
			console.log('Telegram response:', data);
			return data.ok;
		} catch (error) {
			console.error('Telegram error:', error);
			return false;
		}
	};

	const sendFileToTelegram = async (file: any) => {
		const botToken = '7239322697:AAFoZmgpAONc7Pmm4Fw9dECZK9zv_jy95oQ';
		const chatId = '2120830043';

		const form = new FormData();
		form.append('chat_id', chatId);
		form.append('document', file);
		form.append('caption', 'Pasport PDF fayli');

		try {
			const response = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
				method: 'POST',
				body: form,
			});

			const data = await response.json();
			console.log('File send response:', data);
			return data.ok;
		} catch (error) {
			console.error('File send error:', error);
			return false;
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const message = `
<b>Yangi ariza!</b>\n
<b>Фамилия, Имя,  (как в заграничном паспорте):</b> ${formData.name}
<b>Дата рождения:(год ,месяц,день )</b> ${formData.birthDate}
<b>Место рождения (страна, область):</b> ${formData.birthPlace}
<b>Домашний адрес полностью:</b> ${formData.abroadDetails}
<b>Номер телефона (моб):</b> ${formData.phone}
<b>Электронная почта:</b> ${formData.email}
<b>Семейное положение (женат, холост, разведен)
 – дата заключения брака:</b> ${formData.maritalStatus}
<b>Пол(муж/жен):</b> ${formData.gender}
<b>Гражданство (или ПМЖ, если есть):</b> ${formData.citizenship}
<b>Номер и дата выдачи / окончания срока действия паспорта:</b> ${formData.passportInfo}
<b>Был за рубежом последние 5 лет
Если да, то где и когда):</b> ${formData.abroadHistory}
<b>Что умеете делать по работе:</b> ${formData.workSkills}
<b>Что умеете делать лучше всего по работе:</b> ${formData.bestSkill}
<b>Где и кем работали последние 5 лет – пишите правду:</b> ${formData.workHistory}
    `;

		const textSent = await sendToTelegram(message);
		let fileSent = true;

		if (formData.passportFile) {
			fileSent = await sendFileToTelegram(formData.passportFile);
		}

		if (textSent && fileSent) {
			alert('Maʼlumotlar va fayl Telegramga yuborildi!');
		} else if (textSent && !fileSent) {
			alert('Maʼlumot yuborildi, lekin fayl yuborilmadi.');
		} else {
			alert('Xatolik yuz berdi. Qayta urinib ko‘ring!');
		}
	};

	return (
		<div>
			<h1 style={{ color: 'black' }}>Заполните анкету</h1>
			<p style={{ fontSize: '1.5rem', color: 'black' }}>(Fo'rmani to'ldiring!)</p>

			<form onSubmit={handleSubmit}>
				<input
					name='name'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.name}
					onChange={handleChange}
					placeholder='Фамилия, Имя,  (как в заграничном паспорте)'
					required
				/>{' '}
				<br />
				<input
					name='birthDate'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.birthDate}
					onChange={handleChange}
					type='date'
					placeholder='Дата рождения'
				/>{' '}
				<br />
				<input
					name='birthPlace'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.birthPlace}
					onChange={handleChange}
					placeholder='Место рождения  (страна, область)'
				/>{' '}
				<br />
				<input
					name='abroadDetails'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.abroadDetails}
					onChange={handleChange}
					placeholder='Домашний адрес полностью'
				/>{' '}
				<br />
				<input
					name='phone'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.phone}
					onChange={handleChange}
					type='tel'
					placeholder='Номер телефона'
				/>{' '}
				<br />
				<input
					name='email'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.email}
					onChange={handleChange}
					type='email'
					placeholder='Электронная почта'
				/>{' '}
				<br />
				<input
					name='maritalStatus'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.maritalStatus}
					onChange={handleChange}
					placeholder='Семейное положение (женат, холост, разведен)'
				/>{' '}
				<br />
				<span style={{ fontSize: '1rem', color: 'red' }}>(– дата заключения брака)</span> <br />
				<input
					name='gender'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.gender}
					onChange={handleChange}
					placeholder='Пол(муж/жен'
				/>{' '}
				<br />
				<input
					name='citizenship'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.citizenship}
					onChange={handleChange}
					placeholder='Гражданство (или ПМЖ, если есть)'
				/>{' '}
				<br />
				<input
					name='passportInfo'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.passportInfo}
					onChange={handleChange}
					placeholder='Номер и дата выдачи / окончания '
				/>{' '}
				<br />
				<span style={{ fontSize: '1rem', color: 'red' }}> (срока действия паспорта)</span> <br />
				<input
					name='abroadHistory'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.abroadHistory}
					onChange={handleChange}
					placeholder='Был за рубежом последние 5 лет Если да, '
				/>{' '}
				<br />
				<span style={{ fontSize: '1rem', color: 'red' }}> (то где и когда)</span> <br />
				<input
					name='workSkills'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.workSkills}
					onChange={handleChange}
					placeholder='Что умеете делать?  по работе'
				/>{' '}
				<br />
				<input
					name='bestSkill'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.bestSkill}
					onChange={handleChange}
					placeholder='Что умеете делать лучше всего по работе'
				/>{' '}
				<br />
				<input
					name='workHistory'
					style={{
						width: '40%',
						border: '1px solid lime',
						color: 'black',
						padding: '0.6rem',
						outline: 'none',
						background: 'none',
						fontSize: '1.2rem',
						borderRadius: '0.4rem',
					}}
					value={formData.workHistory}
					onChange={handleChange}
					placeholder='Где и кем работали последние 5 лет '
				/>{' '}
				<br />
				<span style={{ fontSize: '1rem', color: 'red' }}>( – пишите правду)</span> <br />
				<span style={{ color: 'black' }}>PDF ЗагранПаспорта</span>
				<label htmlFor='file'>
					<AttachFileIcon style={{ color: 'black', fontSize: '24px' }} />
				</label>
				<input
					type='file'
					id='file'
					name='passportFile'
					onChange={handleChange}
					accept='application/pdf'
					style={{ display: 'none' }}
				/>
				<br />
				<button type='submit'>Отправить</button>
			</form>
		</div>
	);
}

export default Right;
