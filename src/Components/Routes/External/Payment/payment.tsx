import * as React from "react";
import "./payment.css";
import { PaystackButton } from "react-paystack";

const Payment = () => {
    const publicKey = "pk_test_0fcb580a4f40063207095c3d11d51840d68e225e";
    // const amount = 30_000_000;
    const [state, setState] = React.useState({
      email: "",
      hospital: "",
      name: "",
      custom_fields: [],
      subscription: "",
      amount: 0,
      plan: "",
    //   plan: "PLN_vgbgiomax1jkfvb"
    })
    const { email, hospital, name, custom_fields, subscription, amount, plan } = state;
    const componentProps = {
      name,
      email,
      amount: subscription === "tier 1" ? 30_000_000 : subscription === "tier 2" ? 60_000_000 : 0,
      custom_fields: [{"name": {name}, "userMail": {email}, "hospitalName": {hospital}}],
      publicKey,
      plan: subscription === "tier 1" ? "PLN_vgbgiomax1jkfvb" : subscription === "tier 2" ? "PLN_6ggenctgdxds3jp" : "PLN_vgbgiomax1jkfvb" ,
      text: "Pay Now",
      onSuccess: () => alert("payment successful"),
      onClose: () => alert("Don't go, you need this plan")
    }
    const handleChange = (e) => {
        setState({
            ...state,
            email: email,
            hospital: hospital,
            subscription: subscription,
            amount: subscription === "tier 1" ? 30_000_000 : subscription === "tier 2" ? 60_000_000 : 0,
        })
    }
    return (
        <>
            <form>
                <input onChange={handleChange} type="email" placeholder="Email address" value={email} />
                <input onChange={handleChange} type="text" placeholder="hospital name" value={hospital} />
                <select onChange={handleChange} value={subscription}>
                    <option selected disabled>Select a plan</option>
                    <option value="tier 1">Tier 1</option>
                    <option value="tier 2">Tier 2</option>
                </select>
                <input type="text" placeholder="amount" value={amount} />
          <PaystackButton {...componentProps} />
            </form>
        </>
    )
}

export default Payment;