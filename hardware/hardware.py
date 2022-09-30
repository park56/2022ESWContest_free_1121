from imutils.video import VideoStream
from pyzbar import pyzbar
import RPi.GPIO as GPIO
import requests
import imutils
import time
import cv2

def create_rand(seed,alpha):
    seed ^= seed << 13
    t = seed ^ alpha ^ (seed >> 17) ^ (alpha >> 26)
    return t + alpha

hotel='신라호텔'
room=2003
seed=1234

servo_pin = 25

print("[start]")

vs = VideoStream(usePiCamera=True).start()
time.sleep(2.0)

GPIO.setmode(GPIO.BCM)
GPIO.setup(servo_pin, GPIO.OUT)
pwm = GPIO.PWM(servo_pin, 50)
pwm.start(7.5)
time.sleep(1.0)
pwm.stop()

while True:
    frame = vs.read()   
    frame = imutils.resize(frame, width=400)

    qrcodes = pyzbar.decode(frame)

    # if not barcodes:
    #     cv2.putText("not qr",(0, 0),
	# 		cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

    for qrcode in qrcodes:
        # (x, y, w, h) = qrcode.rect
        # cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)

        qrcodeData = qrcode.data.decode("utf-8")

        response=requests.get("http://10.80.161.228:8080/getalpha?hotel="+hotel+"&room="+str(room))
        alpha=int(response.json()['qr'])
        pw=create_rand(seed,alpha)
        # pw=1234
        if(int(qrcodeData)==pw):
            pwm.start(3)
            time.sleep(1.0)
            pwm.stop()
            time.sleep(10.0)
            pwm.start(7.5)
            time.sleep(1.0)
            pwm.stop()

        # text=qrcodeData
        # cv2.putText(frame, text, (x, y - 10),
		# 	cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

    # cv2.imshow("QRcode Scanner", frame)
    # key = cv2.waitKey(1) & 0xFF

    # # q를 누르면 loop를 break함
    # if key == ord("q"):
    #     break

print("[end]")
cv2.destroyAllWindows()
vs.stop()
pwm.ChangeDutyCycle(0.0)
pwm.stop()
GPIO.cleanup()