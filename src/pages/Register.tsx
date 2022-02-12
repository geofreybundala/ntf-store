import { Link } from 'react-router-dom';
import NFTimage from '../assets/images/nft-register.jpg';
import Button from '../components/forms/Button';
import Input from '../components/forms/Input';

const Register = () => {
  return (
    <section className='flex items-center justify-center h-screen'>
        <div className='flex justify-center h-96' style={{width: '50rem'}}>
            <div className='w-1/2 rounded-l-md'  
            style={{backgroundImage: `url(${NFTimage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
            }}>                            
                    

                    <div className='flex flex-col items-center text-center'>
                    <div className='pt-2 text-2xl text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-purple-500'>
                        <Link to="/">NTF-store</Link>
                    </div>

                    <div className='m-6 '>
                        Welcome to NFT-store , here you can sell and buy NFT
                        create new account
                    </div>
                    </div>
            </div>
            <div className='w-1/2 bg-gray-100 rounded-r-md'>
                <div className='flex flex-col items-center justify-center pt-3'>
                    <div className='text-2xl text-gray-600'>
                        Welcome
                    </div>

                    <form>
                        <div className='py-1'>
                            <label>Email</label>
                            <Input inputtype='email' classes='w-full p-2 px-3 rounded mx form-input' placeholder='Email' />
                        </div>

                        <div className='py-1'>
                            <label>Password</label>
                            <Input inputtype='password' classes='w-full p-2 px-3 rounded mx form-input' placeholder='Password' />
                        </div>

                        <div className='py-1'>
                            <label>Password</label>
                            <Input inputtype='password' classes='w-full p-2 px-3 rounded mx form-input' placeholder='confirm password' />
                        </div>
                        
                        <div className='py-2'>
                            <Button classes='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' name='Sign up'/>
                        </div>
                    </form>

                    <Link to="/login" className='text-gray-500 hover:text-purple-500'>do you have account?</Link>
                    
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Register