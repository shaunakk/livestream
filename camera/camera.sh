#!/bin/bash
cd
sshpass -praspberry ssh -o "StrictHostKeyChecking no" pi@192.168.1.161 'sh /home/pi/motionCamera.sh'
sshpass -p "raspberry" scp pi@192.168.1.161:/home/pi/videos/* "/Users/shaunak/swf"
cd /Users/shaunak/swf
python /Users/shaunak/livestream/camera/fileCheck.py
cd /Users/shaunak
cd swf
for i in *.swf; do ffmpeg -i $i -ar 44100 $i.mp4; done
cp /Users/shaunak/swf/*.mp4 "/Users/shaunak/Google Drive/camera"
rm -rf /Users/shaunak/swf/*


