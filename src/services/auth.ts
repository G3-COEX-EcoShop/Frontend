interface props {
  email: string;
  password: string;
}

export const authLogin = async (values: props) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  let nameUser = {} as { name: string };
  let error = {} as { message: string };
  try {
    const res = await fetch(`${urlbase}auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.status == 200) {
      if (res) nameUser = await res.json();
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
