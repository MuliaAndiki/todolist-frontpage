'use client';
import View from '@/app/components/ui/view';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/app/components/ui/input';
import { useState } from 'react';
import { FormRegisterType } from '@/app/types/form';
import { IconLock, IconLockOpen } from '@tabler/icons-react';
import useRegister from '@/app/hooks/mutation/auth/useRegister';
import { useAlert } from '@/app/hooks/use-alert';
import Fallback from '../../components/Fallback';
const CardRegister = () => {
  const alert = useAlert();
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [formRegister, setFormRegister] = useState<FormRegisterType>({
    email: '',
    fullname: '',
    password: '',
  });
  const register = useRegister();

  const handleRegister = () => {
    if (!formRegister.email || !formRegister.fullname || !formRegister.password) {
      alert.toast({
        title: 'Perhatian',
        message: 'Mohon Cek Kembali',
        icon: 'warning',
      });
      return;
    }
    return register.mutate(formRegister);
  };

  return (
    <section>
      <View className="flex min-h-screen justify-center items-center relative z-0">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Register to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            <CardAction>
              <Link href="/login">
                <Button variant="link">Have Account?</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div>
                  <Label className="font-extrabold text-lg">FullName </Label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="saiful"
                    value={formRegister.fullname}
                    required
                    onChange={(e) =>
                      setFormRegister((prev) => {
                        const newObj = { ...prev, fullname: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="font-extrabold text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={formRegister.email}
                    required
                    onChange={(e) =>
                      setFormRegister((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label className="font-extrabold text-lg">Password</Label>
                  </div>
                  <div className="relative">
                    <Input
                      type={isPassword ? 'text' : 'password'}
                      placeholder="Kata Sandi"
                      name={formRegister.password}
                      value={formRegister.password}
                      className="w-full"
                      onChange={(e) =>
                        setFormRegister((prev) => {
                          const newObj = { ...prev, password: e.target.value };
                          return newObj;
                        })
                      }
                    />
                    <button
                      type="button"
                      aria-Text={isPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                      onClick={() => setIsPassword((prev) => !prev)}
                    >
                      {isPassword ? <IconLockOpen /> : <IconLock />}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              variant="gradient"
              type="submit"
              className="w-full font-semibold"
              onClick={() => handleRegister()}
              disabled={register.isPending}
            >
              {register.isPending ? <Fallback title="Tunggu Sebenter" /> : 'Daftar'}
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </View>
    </section>
  );
};

export default CardRegister;
