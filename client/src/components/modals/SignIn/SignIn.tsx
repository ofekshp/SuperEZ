'use client'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
// import { checkEmailExists, connectWithProvider, signin } from '../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { Dispatch, RootState } from '../../store/store'
// import DirectionSensitive from '../DirectionSensitive'
// import ForgotPasswordModal from './ForgotPassword'
import './SignIn.css'


interface SignInModalProps {
    isOpen: boolean
    onClose: () => void
    onSignUp: () => void
}

const closeIcon = (
	<svg
		width="32"
		height="32"
		viewBox="0 0 62 62"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="62" height="62" rx="31" fill="#AAAAAA" fillOpacity="0.5" />
		<path
			d="M44.8125 47H38.4375L30.3125 36.0625L22.4375 47H16.625L27.6875 32.5625L17.4375 19.1875H23.75L31.0625 29.1875L38.25 19.1875H44.0625L33.75 32.5625L44.8125 47Z"
			fill="white"
		/>
	</svg>
)

// Inline SVG for the Google "G" logo
const googleIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		x="0px"
		y="0px"
		width="20"
		height="20"
		viewBox="0 0 48 48"
	>
		<path
			fill="#FFC107"
			d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
		></path>
		<path
			fill="#FF3D00"
			d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
		></path>
		<path
			fill="#4CAF50"
			d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
		></path>
		<path
			fill="#1976D2"
			d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
		></path>
	</svg>
)

const SignInModal: React.FC<SignInModalProps> = ({
    isOpen,
    onClose,
    onSignUp,
}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)
    const [signInAttempted, setSignInAttempted] = useState(false)

    // const dispatch = useDispatch<Dispatch>()
    // const { user, error, loading, token } = useSelector(
    //     (state: RootState) => state.auth,
    // )
    const [isEmail, setIsEmail] = useState<String>('')
    const [passwordError, setPasswordError] = useState<string>('')

    const { data: session, status } = useSession()

    // useEffect(() => {
	// 	if (signInAttempted && !loading && error) {
	// 		setSignInAttempted(false)
	// 	} else if (signInAttempted && !loading && !error) {
	// 		onClose()
	// 		setSignInAttempted(false)
	// 	}
	// }, [loading, error, signInAttempted])


    const handleEmailSignIn = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!email) {
			setIsEmail('עליך למלא כתובת מייל')
			return
		}

		if (!password) {
			setPasswordError('יש למלא סיסמא')
			return
		}

		setSignInAttempted(true)

		// try {
		// 	dispatch(signin({ email, password }))
		// } catch (err) {
		// 	console.error('Error during signin:', err)
		// }
	}

	// const handleGoogleSignIn = async () => {
	// 	signIn('google')
	// 	dispatch(
	// 		connectWithProvider({
	// 			email: session?.user?.email,
	// 			name: session?.user?.name,
	// 		}),
	// 	)
	// }

    // const handleForgotPasswordClick = () => {
    //     setIsForgotPasswordModalOpen(true)
    // }

    return (
        <>
            <Modal open={isOpen} onClose={onClose}>
                <Box className="modal-box">
                    <Typography variant="h2" gutterBottom className="modal-title">
                        ברוך שובך!
                    </Typography>
                    <form onSubmit={handleEmailSignIn}>
                        <Button
                            startIcon={closeIcon}
                            onClick={onClose}
                            className="close-button"
                        />
                        <FormControl fullWidth>
                            {/* <DirectionSensitive> */}
                                <TextField
                                    fullWidth
                                    label="כתובת מייל"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setIsEmail('')
                                    }}
                                    InputLabelProps={{
                                        className: 'input-label'
                                    }}
                                    InputProps={{
                                        className: 'input-field'
                                    }}
                                />
                                {isEmail && <h3 className="error-message">{isEmail}</h3>}
                            {/* </DirectionSensitive>
                            <DirectionSensitive> */}
                                <TextField
                                    fullWidth
                                    label="סיסמה"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setPasswordError('')
                                    }}
                                    InputLabelProps={{
                                        className: 'input-label'
                                    }}
                                    InputProps={{
                                        className: 'input-field'
                                    }}
                                    sx={{ mt: '10px' }}
                                />
                                {passwordError && <h3 className="error-message">{passwordError}</h3>}
                            {/* </DirectionSensitive> */}
                            <Typography variant="h6" className="forgot-password">
                                <Link
                                    // onClick={handleForgotPasswordClick}
                                    underline="hover"
                                    className="forgot-password-link"
                                >
                                    שכחתי סיסמה
                                </Link>
                            </Typography>
                            <Box>
                                <Button
                                    fullWidth
                                    type="submit"
                                    className="continue-button"
                                >
                                    המשך
                                </Button>
                                <Box className="signup-box">
                                    <Typography variant="h6" className="signup-text">
                                        אין לך חשבון?
                                        <Link
                                            underline="hover"
                                            className="signup-link"
                                            onClick={onSignUp}
                                        >
                                            הרשם
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </FormControl>
                    </form>
                    <Divider textAlign="center" className="divider">
                        או
                    </Divider>
                    <Box>
                        <Button
                            startIcon={googleIcon}
                            // onClick={handleGoogleSignIn}
                            fullWidth
                            className="google-button"
                        >
                            <Box className="button-text">המשך עם גוגל</Box>
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            startIcon={<FacebookRoundedIcon sx={{ color: '#3b5998' }} />}
                            onClick={() => signIn('facebook')}
                            fullWidth
                            type="submit"
                            className="facebook-button"
                        >
                            <Box className="button-text">המשך עם פייסבוק</Box>
                        </Button>
                    </Box>
                    <Box className="policy-links">
                        <Link
                            href="/policy"
                            underline="hover"
                            className="policy-link"
                        >
                            תנאי השימוש
                        </Link>
                        <Typography className="policy-separator">
                            |
                        </Typography>
                        <Link
                            href="/policy"
                            underline="hover"
                            className="policy-link"
                        >
                            מדיניות הפרטיות
                        </Link>
                    </Box>
                </Box>
            </Modal>
            {/* {isForgotPasswordModalOpen && (
                <ForgotPasswordModal
                    isOpen={isForgotPasswordModalOpen}
                    onClose={() => setIsForgotPasswordModalOpen(false)}
                    onSignUp={() => {}}
                />
            )} */}
        </>
    )
}

export default SignInModal