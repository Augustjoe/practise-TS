
import time
import random
import pyautogui
 
while 1:
    # 5秒钟移动一次鼠标(移动鼠标时间可以根据自己需要设定)
    time.sleep(5)
    pyautogui.moveTo(x=1500,y=random.randint(100,900))