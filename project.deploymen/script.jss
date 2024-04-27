{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Placeholder function to simulate ChatGPT's response\
function getChatGPTResponse() \{\
  const responses = [\
    "Consider taking regular breaks from social media to maintain a healthy balance in your life.",\
    "Find alternative activities like reading, exercising, or spending time with friends and family to reduce your social media usage.",\
    "Use social media consciously by setting specific time limits for each session.",\
    "Try using productivity apps or browser extensions that block access to social media sites during certain hours of the day.",\
    "Engage in hobbies or interests that keep you away from social media distractions."\
  ];\
  const randomIndex = Math.floor(Math.random() * responses.length);\
  return responses[randomIndex];\
\}\
\
function analyzeUsage() \{\
  const hours = parseInt(document.getElementById("hoursInput").value);\
  const minutes = parseInt(document.getElementById("minutesInput").value);\
  const totalMinutes = hours * 60 + minutes;\
  const age = parseInt(document.getElementById("ageInput").value);\
  const gender = document.getElementById("genderInput").value;\
\
  let suggestion = "";\
\
  if (totalMinutes <= 60) \{\
    suggestion = "You're using social media in moderation. Keep it up!";\
  \} else if (totalMinutes <= 120) \{\
    suggestion = "Your social media usage is a bit high. Try to reduce it to maintain a healthy balance.";\
  \} else if (totalMinutes <= 180) \{\
    suggestion = "Your social media usage is above average. Consider cutting back to prevent negative effects on your daily life.";\
  \} else if (totalMinutes <= 240) \{\
    suggestion = "Your social media usage is high. It may start impacting your productivity and well-being. Try to limit your time spent.";\
  \} else \{\
    suggestion = "Your social media usage is very high. It's likely affecting your daily routine and mental health. You should seriously consider reducing it.";\
  \}\
\
  // Get ChatGPT response\
  const chatGPTResponse = getChatGPTResponse();\
\
  // Combine the suggestion with the ChatGPT response\
  const combinedResponse = `$\{suggestion\} ChatGPT suggests: $\{chatGPTResponse\}`;\
\
  document.getElementById("result").textContent = combinedResponse;\
\}\
}