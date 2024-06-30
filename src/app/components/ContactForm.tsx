"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		tel: "",
		company: "",
		subject: "",
		message: "",
		policy: false,
	});

	const [formStatus, setFormStatus] = useState({ success: false, message: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.policy) {
			setFormStatus({ success: false, message: "Musisz zaakceptować politykę prywatności." });
			return;
		}

		try {
			const response = await axios.post("/api/contact", formData);
			if (response.status === 200) {
				setFormStatus({ success: true, message: "Wiadomość wysłana pomyślnie!" });
				setFormData({
					name: "",
					email: "",
					tel: "",
					company: "",
					subject: "",
					message: "",
					policy: false,
				});
			} else {
				setFormStatus({ success: false, message: "Coś poszło nie tak. Spróbuj ponownie później." });
			}
		} catch (error) {
			setFormStatus({ success: false, message: "Coś poszło nie tak. Spróbuj ponownie później." });
		}
	};

	return (
		<div
			className="contact__form bg-transparent flex p-8 shadow-lg rounded-lg w-full justify-between "
			style={{ backgroundColor: "#1F1F1F" }}
		>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 h-full">
				<div className="flex gap-4">
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Imię i nazwisko"
						className="w-full border border-gray-300 rounded p-2"
					/>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Adres e-mail"
						className="w-full border border-gray-300 rounded p-2"
					/>
				</div>
				<div className="flex gap-4">
					<input
						type="tel"
						name="tel"
						value={formData.tel}
						onChange={handleChange}
						placeholder="Numer telefonu"
						className="w-full border border-gray-300 rounded p-2"
					/>
					<input
						type="text"
						name="company"
						value={formData.company}
						onChange={handleChange}
						placeholder="Nazwa firmy"
						className="w-full border border-gray-300 rounded p-2"
					/>
				</div>
				<input
					type="text"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					placeholder="Temat"
					className="w-full border border-gray-300 rounded p-2"
				/>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Wiadomość"
					className="w-full border border-gray-300 rounded p-2 h-32"
				></textarea>
				<div className="flex items-center">
					<input type="checkbox" name="policy" checked={formData.policy} onChange={handleChange} className="mr-2" />
					<label>
						Akceptuję{" "}
						<a href="#" className="text-blue-600 underline">
							politykę prywatności
						</a>
						.
					</label>
				</div>
				<button type="submit" className="bg-blue-600 text-white py-2 rounded">
					Wyślij wiadomość
				</button>
				{formStatus.message && (
					<div className={`mt-4 p-2 rounded ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
						{formStatus.message}
					</div>
				)}
			</form>
			<div class="contact__info flex h-full w-1/2 justify-center">
				<div class="contact__info-data h-full">
					<a href="tel:+48 123 456 789" class="contact__info-item phone">
						<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.3404 9.6788L9.96531 10.0789C9.96531 10.0789 9.07375 11.0302 6.64022 8.43367C4.2067 5.8372 5.09824 4.88595 5.09824 4.88595L5.33443 4.63393C5.91633 4.0131 5.97118 3.01635 5.46347 2.28868L4.42505 0.80018C3.79671 -0.10045 2.58256 -0.219422 1.86237 0.548989L0.569759 1.92817C0.212659 2.30918 -0.0266427 2.80309 0.00237852 3.351C0.0766199 4.75273 0.667644 7.76869 3.9656 11.2875C7.46293 15.019 10.7445 15.1673 12.0864 15.033C12.5108 14.9906 12.88 14.7587 13.1774 14.4412L14.3473 13.1931C15.137 12.3505 14.9143 10.906 13.9039 10.3167L12.3306 9.39885C11.6671 9.01188 10.8589 9.12552 10.3404 9.6788Z"
								fill="var(--primarycolor)"
							></path>
						</svg>
						<p>+48 123 456 789</p>
					</a>

					<a href="mailto:kochiris94@gmail.com" class="contact__info-item email">
						<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.66305 9.48354L6.86763 7.88638L0.603701 14.7672H16.5632L10.4146 7.87477L8.66305 9.48354ZM11.3107 7.14446L17.2676 13.7905C17.3017 13.6615 17.3261 13.5279 17.3261 13.3867V1.8992L11.3107 7.14446ZM0 1.87248V13.3867C0 13.5279 0.0243658 13.6615 0.0584765 13.7905L6.03544 7.16595L0 1.87248ZM16.7847 0.817383H0.541441L8.66305 7.80041L16.7847 0.817383Z"
								fill="var(--primarycolor)"
							></path>
						</svg>
						<p>kochiris94@gmail.com</p>
					</a>

					<a target="_blank" href="" class="contact__info-item address">
						<svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.32798 0.520508C5.49439 0.520875 4.66907 0.697899 3.8994 1.04142C3.12973 1.38494 2.43086 1.88819 1.84291 2.52229C1.25496 3.15638 0.789501 3.90884 0.473256 4.73646C0.157011 5.56409 -0.00379458 6.45058 6.79662e-05 7.34507C6.79662e-05 12.0607 4.53334 16.3844 5.92798 17.529C6.04506 17.6327 6.19215 17.6895 6.34398 17.6895C6.49581 17.6895 6.6429 17.6327 6.75997 17.529C8.15729 16.3501 12.6532 12.0607 12.6532 7.34507C12.6571 6.45082 12.4964 5.56456 12.1803 4.73712C11.8642 3.90969 11.399 3.15736 10.8113 2.5233C10.2237 1.88924 9.5251 1.38593 8.75574 1.04224C7.98638 0.698553 7.16135 0.521252 6.32798 0.520508ZM6.32798 10.1665C5.80057 10.1665 5.285 9.99864 4.84648 9.68422C4.40795 9.3698 4.06616 8.9229 3.86433 8.40004C3.6625 7.87718 3.6097 7.30183 3.71259 6.74677C3.81548 6.1917 4.06945 5.68184 4.44239 5.28166C4.81532 4.88148 5.29047 4.60895 5.80774 4.49854C6.32502 4.38813 6.86119 4.4448 7.34845 4.66137C7.83572 4.87795 8.25219 5.24471 8.5452 5.71527C8.83821 6.18583 8.99461 6.73907 8.99461 7.30501C8.99461 8.06391 8.71366 8.79173 8.21357 9.32836C7.71348 9.86499 7.03521 10.1665 6.32798 10.1665Z"
								fill="var(--primarycolor)"
							></path>
						</svg>
						<p>Przedmiejska, Wrocław</p>
					</a>

					<div class="contact__socials flex   ">
						<a target="_blank" href="#" class="contact__socials-item">
							<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 0.132568C5.37188 0.132568 0 5.5237 0 12.1756C0 18.8275 5.37188 24.2186 12 24.2186C18.6281 24.2186 24 18.8275 24 12.1756C24 5.5237 18.6281 0.132568 12 0.132568ZM14.6484 10.1339L14.5125 11.9357H12.6703V18.1924H10.3453V11.9357H9.10312V10.1339H10.3453V8.92491C10.3453 8.39332 10.3594 7.57007 10.7437 7.0573C11.1516 6.51631 11.7094 6.14937 12.6703 6.14937C14.2359 6.14937 14.8922 6.37518 14.8922 6.37518L14.5828 8.21926C14.5828 8.21926 14.0672 8.06872 13.5844 8.06872C13.1016 8.06872 12.6703 8.24278 12.6703 8.72733V10.1339H14.6484Z"
									fill="#ffffffcb"
								></path>
							</svg>
						</a>
						<a target="_blank" href="#" class="contact__socials-item">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM17.767 9.04554C17.775 9.17143 17.775 9.30268 17.775 9.43125C17.775 13.3634 14.7804 17.8929 9.30804 17.8929C7.62054 17.8929 6.05625 17.4027 4.73839 16.5589C4.97946 16.5857 5.20982 16.5964 5.45625 16.5964C6.84911 16.5964 8.12946 16.125 9.15 15.3268C7.84286 15.3 6.74464 14.4429 6.36964 13.2643C6.82768 13.3313 7.24018 13.3313 7.71161 13.2107C7.03855 13.074 6.43359 12.7084 5.99951 12.1762C5.56542 11.644 5.32898 10.9779 5.33036 10.2911V10.2536C5.72411 10.4759 6.1875 10.6125 6.67232 10.6313C6.26476 10.3596 5.93051 9.99164 5.69923 9.5599C5.46794 9.12817 5.34676 8.64603 5.34643 8.15625C5.34643 7.60179 5.49107 7.09554 5.75089 6.65625C6.49795 7.5759 7.43017 8.32806 8.48696 8.86384C9.54375 9.39961 10.7014 9.70702 11.8848 9.76607C11.4643 7.74375 12.975 6.10714 14.7911 6.10714C15.6482 6.10714 16.4196 6.46607 16.9634 7.04464C17.6357 6.91875 18.2786 6.66696 18.8518 6.32946C18.6295 7.01786 18.1634 7.59911 17.5446 7.96607C18.1446 7.90179 18.7232 7.73571 19.2589 7.50268C18.8545 8.09732 18.3482 8.625 17.767 9.04554Z"
									fill="#ffffffcb"
								></path>
							</svg>
						</a>
						<a target="_blank" href="#" class="contact__socials-item">
							<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_1444_87)">
									<path
										d="M12 14.16C13.1625 14.16 14.114 13.2098 14.114 12.0384C14.114 11.5774 13.964 11.1493 13.7156 10.8012C13.3312 10.2696 12.7078 9.91675 12.0047 9.91675C11.3015 9.91675 10.6781 10.2649 10.2937 10.8012C10.0453 11.1493 9.89528 11.5774 9.89528 12.0384C9.89059 13.2098 10.8375 14.16 12 14.16Z"
										fill="#ffffffcb"
									></path>
									<path d="M16.6125 9.45085V7.67262V7.40918H16.35L14.5781 7.41388L14.5875 9.45555L16.6125 9.45085Z" fill="#ffffffcb"></path>
									<path
										d="M15.2812 12.0429C15.2812 13.8588 13.8094 15.3359 12 15.3359C10.1906 15.3359 8.71875 13.8588 8.71875 12.0429C8.71875 11.6054 8.80781 11.1867 8.9625 10.8057H7.17188V15.7358C7.17188 16.3709 7.6875 16.8883 8.32031 16.8883H15.6797C16.3125 16.8883 16.8281 16.3709 16.8281 15.7358V10.8057H15.0375C15.1969 11.1867 15.2812 11.6054 15.2812 12.0429Z"
										fill="#ffffffcb"
									></path>
									<path
										d="M12 0C5.37188 0 0 5.39113 0 12.043C0 18.6949 5.37188 24.086 12 24.086C18.6281 24.086 24 18.6949 24 12.043C24 5.39113 18.6281 0 12 0ZM18 10.8058V15.7359C18 17.0202 16.9594 18.0645 15.6797 18.0645H8.32031C7.04063 18.0645 6 17.0202 6 15.7359V10.8058V8.34543C6 7.06116 7.04063 6.0168 8.32031 6.0168H15.6797C16.9594 6.0168 18 7.06116 18 8.34543V10.8058Z"
										fill="#ffffffcb"
									></path>
								</g>
								<defs>
									<clipPath id="clip0_1444_87">
										<rect width="24" height="24.086" fill="white"></rect>
									</clipPath>
								</defs>
							</svg>
						</a>
						<a target="_blank" href="#" class="contact__socials-item">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.4368 10.018C11.4368 7.32237 11.4427 7.11727 11.5423 7.06453C11.595 7.02937 11.8353 7.00007 12.0697 7.00007C12.3133 7.00007 12.4666 6.99317 12.563 7.06384C12.7332 7.18865 12.726 7.55536 12.726 8.62915C12.726 9.39681 12.7436 10.0473 12.7612 10.0648C12.7846 10.0883 12.9604 10.0121 13.1596 9.90663C13.6636 9.62535 14.0738 9.51987 14.6598 9.51987C15.6091 9.51987 16.3182 9.81287 16.9745 10.4809C17.6543 11.1724 18 12.0572 18 13.112C18 14.3192 17.4785 15.3564 16.5526 15.9893C15.9431 16.4054 15.4275 16.5577 14.5426 16.5929C13.9273 16.6163 13.7222 16.6046 13.2827 16.4991C12.5561 16.3292 11.7357 15.9014 10.8215 15.2275C8.97561 13.868 8.46579 13.5984 7.79775 13.6336C7.28207 13.6629 6.92461 13.8797 6.59645 14.3544L6.36205 14.706L5.79363 14.7235C5.09629 14.7411 4.96151 14.6884 5.00839 14.4071C5.09629 13.8856 5.90497 12.9597 6.53199 12.6608C7.45201 12.2272 8.59471 12.2272 9.43854 12.655C9.59676 12.7311 10.1593 13.1179 10.6867 13.5164C11.847 14.3837 12.3158 14.6884 12.8608 14.9404C13.8687 15.4033 14.7418 15.4443 15.5036 15.0693C16.3592 14.6415 16.6815 14.0907 16.6756 13.0652C16.6756 12.3151 16.535 11.94 16.0896 11.4595C15.6619 10.9907 15.3103 10.8384 14.6891 10.8442C14.1148 10.8442 13.687 11.0259 13.3237 11.4185C12.8959 11.8814 12.767 12.2155 12.7377 12.9011C12.7084 13.6629 12.6615 13.7098 12.2279 13.4812C12.058 13.3933 11.806 13.2292 11.6771 13.112L11.4368 12.9069V10.018Z"
									fill="#ffffffcb"
								></path>
							</svg>
						</a>
					</div>
				</div>

				<a target="_blank" class="contact__hours h-full">
					<p class="title">Godziny otwarcia</p>

					<div class="contact__hours-item">
						<span>Pon - Pt</span>
						<p>9:00 - 17:00</p>
					</div>
					<div class="contact__hours-item">
						<span>Sobota</span>
						<p>Zamknięte</p>
					</div>
					<div class="contact__hours-item">
						<span>Niedziela</span>
						<p>Zamknięte</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default ContactForm;
