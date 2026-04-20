{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Custom Cursor Logic\
const cursor = document.getElementById('cursor');\
const ring = document.getElementById('cursorRing');\
let mx = 0, my = 0, rx = 0, ry = 0;\
\
document.addEventListener('mousemove', e => \{\
  mx = e.clientX;\
  my = e.clientY;\
  cursor.style.left = mx + 'px';\
  cursor.style.top = my + 'px';\
\});\
\
// Smooth ring follow\
function anim() \{\
  rx += (mx - rx) * 0.1;\
  ry += (my - ry) * 0.1;\
  ring.style.left = rx + 'px';\
  ring.style.top = ry + 'px';\
  requestAnimationFrame(anim);\
\}\
anim();\
\
// Booking Button Action\
const submitBtn = document.getElementById('bsubmit');\
if(submitBtn) \{\
    submitBtn.addEventListener('click', () => \{\
        document.getElementById('bform').style.display = 'none';\
        document.getElementById('bconfirm').style.display = 'block';\
    \});\
\}}