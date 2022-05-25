
// import {Link, useNavigate} from 'react-router-dom'
// import GPButton from '../components/GPButton'
// import Logo from '../resources/Images/LogoDark.svg'
// import {useDispatch, useSelector} from 'react-redux'
// import {loginUser} from '../actions/index'
// // import {GPLoader} from '../components/GPLoader'
// import {useForm, SubmitHandler} from 'react-hook-form'
// import {RootState} from '../store'
// type SigninInput = {
//     emailOrUsername: string
//     password: string
// }
// const SignIn = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm<SigninInput>()
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const {error, loading} = useSelector(
//         (state: RootState) => state.login
//     )
//     const signInUser: SubmitHandler<SigninInput> = async data => {
//         const {emailOrUsername, password} = data
//         let loginData: any = {}
//         if (
//             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
//                 emailOrUsername
//             )
//         ) {
//             loginData['emailAddress'] = emailOrUsername
//         } else {
//             loginData['phoneNumber'] = emailOrUsername
//         }
//         loginData['password'] = password
//         const {payload}: any = await dispatch(loginUser(loginData))
//         if (!payload.data) return
//         navigate('/dashbord/index')
//     }
//     return (
//         <div>
//             <div className="ui three column grid">
//                 <div className="row">
//                     <div className="column"></div>
//                     <div className="column">
//                         <div className="ui segment AuthContainer">
//                             <div className="Logo">
//                                 <img src={Logo} alt="logo" />
//                             </div>
//                             <div className="ui divider"></div>
//                             <form
//                                 className="LoginBody"
//                                 onSubmit={handleSubmit(signInUser)}
//                             >
//                                 <h3 className="ui header">
//                                     Login into your GoldPos account
//                                 </h3>
//                                 <div>
//                                     <p
//                                         className="sub header"
//                                         style={{marginTop: 5, marginBottom: 5}}
//                                     >
//                                         Email or Phone Number
//                                     </p>
//                                     <div className="ui input textInput">
//                                         <input
//                                             type={'text'}
//                                             placeholder={'Email or Username'}
//                                             className="textInputInner"
//                                             {...register('emailOrUsername', {
//                                                 required: true,
//                                                 validate: {
//                                                     validateUsernameOrEmail:
//                                                         data => {
//                                                             let valid = false
//                                                             if (
//                                                                 data.includes(
//                                                                     '@'
//                                                                 )
//                                                             ) {
//                                                                 if (
//                                                                     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
//                                                                         data
//                                                                     )
//                                                                 ) {
//                                                                     valid = true
//                                                                 }
//                                                             } else {
//                                                                 if (
//                                                                     data.length >=
//                                                                     6
//                                                                 )
//                                                                     valid = true
//                                                             }
//                                                             return valid
//                                                         },
//                                                 },
//                                             })}
//                                         />
//                                     </div>
//                                     {errors.emailOrUsername?.type ===
//                                         'required' && (
//                                         <div className="ui negative mini message">
//                                             <div className="header">
//                                                 We&#x27;re sorry
//                                             </div>
//                                             <p>
//                                                 please provide either username
//                                                 or password to continue
//                                             </p>
//                                         </div>
//                                     )}
//                                     {errors.emailOrUsername?.type !==
//                                         'required' &&
//                                         errors.emailOrUsername && (
//                                             <div className="ui negative mini message">
//                                                 <div className="header">
//                                                     We&#x27;re sorry
//                                                 </div>
//                                                 <p>
//                                                     phone number or email
//                                                     provided is invalid
//                                                 </p>
//                                             </div>
//                                         )}
//                                 </div>
//                                 <div>
//                                     <div className="ui two column grid">
//                                         <div className="column">
//                                             <p
//                                                 className="sub header"
//                                                 style={{
//                                                     marginTop: 5,
//                                                 }}
//                                             >
//                                                 Password
//                                             </p>
//                                         </div>
//                                         <div className="column">
//                                             <p
//                                                 className="sub header"
//                                                 style={{
//                                                     marginTop: 5,
//                                                     marginBottom: 5,
//                                                     color: '#4189CD',
//                                                     textAlign: 'end',
//                                                     marginRight: 5,
//                                                 }}
//                                             >
//                                                 <Link to="reset/password">
//                                                     Forgot Password?
//                                                 </Link>
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div
//                                             className="ui input textInput"
//                                             style={{marginTop: 5}}
//                                         >
//                                             <input
//                                                 type={'password'}
//                                                 placeholder={''}
//                                                 className="textInputInner"
//                                                 {...register('password', {
//                                                     required: true,
//                                                 })}
//                                             />
//                                         </div>
//                                         {errors.password?.type ===
//                                             'required' && (
//                                             <div className="ui negative mini message">
//                                                 <div className="header">
//                                                     We&#x27;re sorry
//                                                 </div>
//                                                 <p>
//                                                     Password field is required
//                                                 </p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div style={{marginTop: 20}}>
//                                     {/* <GPButton
//                                         btnText={loading ? '' : 'SignIn'}
//                                         backgroundColor="#35B858"
//                                         borderColor="#35B858"
//                                         borderRadius={3}
//                                         color="#FFFF"
//                                         width={350}
//                                     >
//                                         {loading && (
//                                         //     <GPLoader
//                                         //         size="tiny"
//                                         //         inline="centered"
//                                         //         active={true}
//                                         //         className="GPLoader"
//                                         //         inverted={true}
//                                         //     />
//                                         // )}
//                                     </GPButton> */}
//                                 </div>
//                                 {Object.keys(error).length > 0 && (
//                                     <div className="ui negative mini message">
//                                         <p className="header">
//                                             Username or Password does not exist
//                                         </p>
//                                     </div>
//                                 )}
//                             </form>
//                         </div>
//                         <div className="ui two column grid">
//                             <div className="column">
//                                 <p style={{textAlign: 'center'}}>
//                                     Question?{' '}
//                                     <span style={{color: '#4189CD'}}>
//                                         visit help
//                                     </span>
//                                 </p>
//                             </div>
//                             <div className="column">
//                                 <p style={{textAlign: 'start'}}>
//                                     New to GOLDPOS?{' '}
//                                     <span style={{color: '#4189CD'}}>
//                                         <Link to={'register'}>signup</Link>
//                                     </span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="column"></div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react'

function SignIn() {
  return (
    <div>SignIn</div>
  )
}

export default SignIn


