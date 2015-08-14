import os
import sys
from Naked.toolshed.shell import execute_js
os.chdir("/Users/shaunak/swf")
filenames = os.listdir(os.curdir)
for filename in filenames:
    if filename.endswith(("jpg")):
        sys.stderr.write ('File found. Exiting program. \n')
        os.chdir("/Users/shaunak/livestream/camera")
        success = execute_js('email.js')
        break
else:
    sys.stderr.write ('No file found. Exiting program. \n')
    sys.exit()
