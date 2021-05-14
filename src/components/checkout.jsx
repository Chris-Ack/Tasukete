import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IpqSaAvO61I5XZRj77hWRG7epQ8fnU632M5wF2tr305UFYMpjqFwiIxmnjOdPD1cyicOWb99iYdEUzyvE5g8Con00cg4nIZOX");

export default function Checkout() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Yoshio order placed! You will receive an email confirmation with a picture of Yoshio.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout a Yoshio when you're ready."
            );
        }
    }, [message]);

    const handleClick = async (event) => {
        const stripe = await stripePromise;

        const response = await fetch("/api/create-checkout-session", {
            method: "POST",
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
    };

    return message ? (
        <section>
            <p>{message}</p>
        </section>
    ) : (
        <section>
            <button type="button" id="checkout-button" role="link" onClick={handleClick}>
             Checkout
            </button>
        </section>
        );
}
