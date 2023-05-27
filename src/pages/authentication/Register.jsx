import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
const Registration = () => {
  const districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chittagong",
    "Chuadanga",
    "Comilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jessore",
    "Jhalokati",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Nawabganj",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState(true);
  const authInfo = useContext(AuthContext);
  const { user, loading, createNewUserWithEmail } = authInfo;
  console.log(loading);
  console.log(user);

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const school = event.target.school.value;
    const address = event.target.address.value;
    const district = event.target.district.value;
    const email = event.target.email.value;
    const userInput = { name, school, address, district, email};
    try {
      await createNewUserWithEmail(email, password, name);
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });
      const result = await response.json();
      console.log(result)
    } catch {
      (err) => console.error(err);
    }
    event.target.reset();
  };

  const getNewPassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };
  const confirmPassword = (e) => {
    const confirmPass = e.target.value;
    if (confirmPass.length > 5) {
      if (confirmPass !== password) {
        setConfirmedPassword(false);
      }
    } else {
      setConfirmedPassword(true);
    }
  };

  return (
    <div className="mx-auto p-4 rounded-lg bg-slate-100">
      <h1 className="text-5xl text-center font-bold my-10">
        Welcome To Classroom!
      </h1>
      <section className="max-w-xl mx-auto">
        <h3 className="text-2xl text-center mb-5">Registration now</h3>
        <form
          onSubmit={handleCreateUser}
          className="max-w-xl mx-auto flex flex-col gap-5"
        >
          <input
            required
            className="border rounded-lg p-3 block"
            placeholder="Enter name"
            type="text"
            name="name"
          />
          <input
            required
            className="border rounded-lg p-3 block"
            placeholder="Enter Your School/College/University"
            type="text"
            name="school"
          />
          <input
            required
            className="border rounded-lg p-3 block"
            placeholder="Enter Your Address"
            type="text"
            name="address"
          />
          <select
            required
            className="border rounded-lg p-3 w-full"
            name="district"
          >
            <option value="">Select your district</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <input
            required
            className="border rounded-lg p-3 block"
            placeholder="Enter Email"
            type="text"
            name="email"
          />
          <input
            onChange={getNewPassword}
            required
            className="border rounded-lg p-3 block"
            placeholder="Enter New Password"
            minLength={6}
            type="password"
            name="password"
          />
          <input
            onChange={confirmPassword}
            required
            className="border rounded-lg p-3 block"
            placeholder="Confirm Password"
            type="password"
            name="password"
          />
          {!confirmedPassword && (
            <span className="text-red-700">Password did not match</span>
          )}
          <button
            type="submit"
            className="font-bold rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3"
          >
            Register
          </button>
        </form>
        <p className="mt-5">
          Already have an account? Please{" "}
          <Link
            className="font-bold text-blue-700 hover:underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Registration;
