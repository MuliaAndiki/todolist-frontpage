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
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import Link from 'next/link';
import useLogin from '@/app/hooks/mutation/auth/useLogin';
import { useState } from 'react';
import { FormLoginType } from '@/app/types/form';
import { IconLock, IconLockOpen } from '@tabler/icons-react';
import { useAlert } from '@/app/hooks/use-alert';
import Fallback from '../../components/Fallback';

const CardLogin = () => {
  const alert = useAlert();
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [formLogin, setFormLogin] = useState<FormLoginType>({
    email: '',
    password: '',
  });
  const login = useLogin();
  const handleLogin = () => {
    if (!formLogin.email || !formLogin.password) {
      alert.toast({
        title: 'Perhatian',
        message: 'Mohon Isi Semua Colum',
        icon: 'warning',
      });
      return;
    }
    login.mutate(formLogin);
  };

  return (
    <section>
      <View className="flex min-h-screen justify-center items-center relative z-0">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            <CardAction>
              <Link href="/register">
                <Button variant="link">Sign Up</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label className="font-extrabold text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={formLogin.email}
                    required
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label className="font-extrabold text-lg">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      type={isPassword ? 'text' : 'password'}
                      placeholder="Kata Sandi"
                      name={formLogin.password}
                      value={formLogin.password}
                      className="w-full"
                      onChange={(e) =>
                        setFormLogin((prev) => {
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
              onClick={() => handleLogin()}
              disabled={login.isPending}
            >
              {login.isPending ? <Fallback title="Tunggu Sebentar" /> : 'Masuk'}
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

export default CardLogin;
