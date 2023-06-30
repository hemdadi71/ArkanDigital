import { SignUpFormInputs } from '@/Types/types'
import { SingUpSchame } from '@/utils/Schema/SingUpSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { hideRegisterModal } from '@/Redux/Slices/RegisterModal'
import { toast } from 'react-hot-toast'
// .............................................................
const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(SingUpSchame),
  })
  const dispatch = useDispatch()
  const onSubmit = async (data: SignUpFormInputs) => {
    try {
      const response = await axios.post('/api/auth/signup', data)
      console.log(response.data)
      if (response.data) {
        dispatch(hideRegisterModal())
        toast('ثبت نام موفقیت آمیز بود می توانید وارد حساب کاربری خود شوید', {
          style: {
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
          },
        })
      }
    } catch (error) {
      console.error('Failed to sign up:', error)
    }
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <Input
          name="username"
          register={{ ...register('username') }}
          type="text"
          label="نام کاربری:"
          errorTxt={errors.username?.message}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Input
          name="email"
          register={{ ...register('email') }}
          type="text"
          label="ایمیل:"
          errorTxt={errors.email?.message}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Input
          name="password"
          register={{ ...register('password') }}
          type="password"
          label="رمز عبور:"
          errorTxt={errors.password?.message}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Input
          name="reenterPassword"
          register={{ ...register('reenterPassword') }}
          type="password"
          label="تایید رمز عبور:"
          errorTxt={errors.reenterPassword?.message}
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-purple text-white w-fit py-1 px-6 rounded-md mt-3">
          ثبت نام
        </button>
      </div>
    </form>
  )
}

export default SignUpForm
