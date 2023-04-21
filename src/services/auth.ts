import Cookies from "js-cookie";

interface props {
  email: string;
  password: string;
}

export const authLogin = async (values: props) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  let nameUser = {} as { name: string; token: string };
  let error = {} as { message: string };
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const res = await fetch(`${urlbase}auth/login`, {
      method: "POST",
      credentials: "include",
      headers: myHeaders,
      body: JSON.stringify(values),
    });
    if (res.status == 200) {
      if (res) {
        nameUser = await res.json();
        Cookies.set("token", nameUser.token);
      }
    } else if (res.status == 401) {
      if (res) error = await res.json();
    }
  } catch (error) {
    console.log(error);
    error = "server";
    return "";
  }
  return {
    name: nameUser.name,
    error: error.message,
  };
};
