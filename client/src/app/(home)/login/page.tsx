import Link from "next/link";

export default function Login() {
    return (
      <section className="flex justify-center flex-1 items-center form-section-main">
          <form className="login-form-layout">
                <label htmlFor="email" className="flex flex-col">Email
                <input className="login-email" placeholder="Email..." name="email"></input>
                </label>
                <label htmlFor="email" className="flex flex-col">Password
                <input className="login-password" placeholder="Password..." name="password"></input>
                </label>
                <button className="login-submit">Login</button>
                <Link href='/register'>Don't have an account ? Sign up now !</Link>
          </form>
      </section>
    )
  }
  