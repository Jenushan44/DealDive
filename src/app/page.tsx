"use client"; // Allows components to run in the browser
import { useState } from 'react'

export default function Home() {

  const [productName, setProductName] = useState("") // Holds current text user is typing
  const [productUrl, setProductUrl] = useState("")
  const [currentPrice, setCurrentPrice] = useState("")

  const [submittedName, setSubmittedName] = useState("") // Holds final submitted value
  const [submittedUrl, setSubmittedUrl] = useState("")
  const [submittedPrice, setSubmittedPrice] = useState("")


  return (
    <div>
      <p>
        <form onSubmit={(e) => {
          e.preventDefault();
          setSubmittedName(productName);
          setSubmittedUrl(productUrl);
          setSubmittedPrice(currentPrice);

          fetch("api/submitDeal", {
            method: "POST", // Send data to backend
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: submittedName,
              url: submittedUrl,
              price: submittedPrice
            }
            )
          })
            .then(response => response.json()) // Converts response into JSON
            .catch(error => {
              console.log("Error:", error);
            })

        }
        }>
          <div>
            <input type='text' placeholder='Enter Name' onChange={(e) => setProductName(e.target.value)}></input>
          </div>
          <div>
            <input type='text' placeholder='Enter URL' onChange={(e) => setProductUrl(e.target.value)}></input>
          </div>
          <div>
            <input type='text' placeholder='Enter Price' onChange={(e) => setCurrentPrice(e.target.value)}></input>
          </div>
          <button type='submit'>Submit</button>
          <div>
            <p>Product Name: {submittedName} </p>
            <p>Product URL: {submittedUrl}</p>
            <p>Current Price: {submittedPrice} </p>
          </div>
        </form>
      </p>
    </div>
  );
}