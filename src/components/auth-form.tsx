import React, { ChangeEvent, FormEvent, useState } from 'react';
import { authService } from '../firebase';

export const AuthForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    newAccount: true,
    error: '',
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e;
    setForm({ ...form, [name]: value });
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (form.newAccount) {
        await authService.createUserWithEmailAndPassword(
          form.email,
          form.password
        );
      } else {
        await authService.signInWithEmailAndPassword(form.email, form.password);
      }
    } catch (error) {
      setForm({ ...form, error: error.message });
    }
  };
  const toggleAccount = () =>
    setForm((prev) => ({ ...prev, newAccount: !prev.newAccount }));
  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
          className="authInput"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
          required
          className="authInput"
        />
        <input
          type="submit"
          className="authInput authSubmit"
          value={form.newAccount ? 'Create account' : 'sign in'}
        />
        {form.error && <span className="authError">{form.error}</span>}
      </form>
      <span onClick={toggleAccount} className=" authSwitch">
        {form.newAccount ? 'Sign In' : 'Create Account'}
      </span>
    </>
  );
};
