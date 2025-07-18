export async function POST(request: Request) {
  const data = await request.json();

  const { name, url, price } = data;
  const prompt = `Is this a suspicious product deal? Product: ${name}, Price: ${price}, URL: ${url}`;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tells OPENAI JSON data is being sent
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` // 
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      max_tokens: 50, // Max length of each response
      temperature: 0.7, // Control creativity of AI response
      prompt: prompt,
      messages: [
        { role: "user", content: prompt }
      ]

    })
  })

  const json = await response.json(); // Wait for response from OPENAI 
  console.log("OpenAI raw response:", json);


  const aiMessage = "Placeholder for AI message"
  //json.choices[0].message.content; 
  console.log("API key is:", process.env.OPENAI_API_KEY);

  console.log(data)

  return new Response(JSON.stringify({
    message: aiMessage
  }), {
    status: 200
  })

}