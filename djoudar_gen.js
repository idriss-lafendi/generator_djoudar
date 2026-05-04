{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function generatePDF() \{\
    const doc = new jsPDF();\
    \
    const hotelName = document.getElementById('hotelName').value;\
    const bookingId = document.getElementById('bookingId').value;\
    const clientName = document.getElementById('clientName').value;\
    const checkin = document.getElementById('checkin').value;\
    const checkout = document.getElementById('checkout').value;\
    const roomType = document.getElementById('roomType').value;\
    const mealType = document.getElementById('mealType').value;\
\
    doc.text(`Hotel Name: $\{hotelName\}`, 10, 10);\
    doc.text(`Booking ID: $\{bookingId\}`, 10, 20);\
    doc.text(`Client Name: $\{clientName\}`, 10, 30);\
    doc.text(`Check-in: $\{checkin\}`, 10, 40);\
    doc.text(`Check-out: $\{checkout\}`, 10, 50);\
    doc.text(`Room Type: $\{roomType\}`, 10, 60);\
    doc.text(`Meal Type: $\{mealType\}`, 10, 70);\
\
    doc.save('voucher.pdf');\
\}}