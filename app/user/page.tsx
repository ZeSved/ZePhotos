'use client'

import { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { app } from '../db/firebase'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

export default function SignIn() {
	const [show, setShow] = useState(false)
	const [accountDetails, setAccountDetails] = useState({
		password: '',
		gmail: '',
	})

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type='email'
				name=''
				id=''
				placeholder='example@gmail.com'
				required
				onChange={(e) => {
					setAccountDetails({
						gmail: e.target.value,
						password: accountDetails.password,
					})
				}}
			/>
			<div>
				<input
					type={show ? 'text' : 'password'}
					name=''
					id=''
					minLength={5}
					min={5}
					required
					onChange={(e) => {
						setAccountDetails({
							gmail: accountDetails.gmail,
							password: e.target.value,
						})
					}}
				/>
				<button
					onClick={(e) => {
						e.preventDefault()
						setShow(!show)
						console.log(accountDetails)
					}}>
					{show ? <FaEye /> : <FaEyeSlash />}
				</button>
			</div>
			<button
				onClick={() => {
					createUserWithEmailAndPassword(auth, accountDetails.gmail, accountDetails.password)
						.then((userCredential) => {
							// Signed up
							const user = userCredential.user
							// ...
						})
						.catch((error) => {
							const errorCode = error.code
							const errorMessage = error.message
							// ..
						})

					console.log(accountDetails)
				}}>
				Sign Up
			</button>
		</form>
	)
}
